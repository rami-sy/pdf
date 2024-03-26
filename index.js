const express = require("express");
const pdf = require("html-pdf"); // Use html-pdf
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const fs = require("fs");
const os = require("os");
const path = require("path");
const htmlContent = `<p>Test</p>`;
// Path to save the PDF to
const desktopDir = path.join(os.homedir(), "Desktop");
const pdfPath = path.join(desktopDir, "MyPDF.pdf");

// Increase the payload limit if dealing with very large HTML content
app.use(bodyParser.text({ limit: "50mb", type: "text/html" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.post("/html-to-pdf", (req, res) => {
  // const htmlContent = req.body;
  // console.log({ htmlContent });
  // if (!htmlContent) {
  //   return res.status(400).send("No HTML content provided.");
  // }

  const options = {
    format: "A4",
    // Add more options here if needed
  };

  // Use html-pdf to create PDF from HTML content
  pdf.create(htmlContent, options).toFile(pdfPath, function (err, resp) {
    if (err) return console.log(err);
    console.log(`PDF saved to ${pdfPath}`);

    // Send the path to the PDF file
    res.status(200).send(pdfPath);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
