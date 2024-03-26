const express = require("express");
const pdf = require("html-pdf"); // Use html-pdf
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const fs = require("fs");
const os = require("os");
const path = require("path");
const htmlContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="de" lang="de">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>
      PROBENAHME-AUFTRAG / PROBENAHME-PROTOKOLL / PROBEN-BEGLEITSCHEIN
    </title>
    <meta name="author" content="baranski" />
    <script>
      function toggleCheckMark(tdElement) {
        // const persistenceHelper = new PersistenceHelper();

        // how we can use the persistenceHelper insede the html
        const engomoId = "c6ce96dd-6d3b-49ce-be91-598e61d85391";
        persistenceHelper.update("technician-scheme", "technicians", engomoId, {
          firstName: "value",
          lastName: "value2",
        });
        // // https://<composerUrl>/api/v2/data/<schema>/<entity>/<id>
        // fetch("https://http://10.1.72.23/composer/api/v2/data/technician-scheme/technicians/42839cba-b557-439b-ac62-6fbc60fa2261", {
        //   method: "DELETE",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },

        // });

        const span = tdElement.querySelector("span"); // Find the span inside the clicked td
        if (span.textContent === "☐") {
          span.textContent = "☑"; // Change to checked box
        } else {
          span.textContent = "☐"; // Change back to unchecked box
        }
      }
    </script>

    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        text-indent: 0;
      }
      .s1 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
      }
      .s2 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      .s3 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: italic;
        font-weight: bold;
        text-decoration: none;
        font-size: 12pt;
      }
      .s4 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      .s5 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 30pt;
      }
      .s6 {
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      .s7 {
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8.5pt;
        vertical-align: 1pt;
      }
      .s8 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8.5pt;
        vertical-align: 1pt;
      }
      .s9 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
      }
      .s10 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s11 {
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s12 {
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10.5pt;
      }
      .s13 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
      }
      .s14 {
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s15 {
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
        vertical-align: 1pt;
      }
      .s16 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 6pt;
        vertical-align: 3pt;
      }
      .s17 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 6pt;
        vertical-align: 3pt;
      }
      .s18 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 6pt;
        vertical-align: 3pt;
      }
      .s19 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s20 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 7pt;
        vertical-align: 4pt;
      }
      .s21 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 6pt;
      }
      .s22 {
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8.5pt;
        vertical-align: 2pt;
      }
      .s23 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8.5pt;
        vertical-align: 2pt;
      }
      .s24 {
        color: black;
        font-family: "Times New Roman", serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s25 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 9pt;
      }
      .s26 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: italic;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      .s27 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
        vertical-align: 3pt;
      }
      .s28 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 6.5pt;
        vertical-align: 3pt;
      }
      .s29 {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
      }
      p {
        color: black;
        font-family: Arial, sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 7pt;
        margin: 0pt;
      }
      li {
        display: block;
      }
      #l1 {
        padding-left: 0pt;
      }
      #l1 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l2 {
        padding-left: 0pt;
      }
      #l2 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l3 {
        padding-left: 0pt;
      }
      #l3 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l4 {
        padding-left: 0pt;
      }
      #l4 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l5 {
        padding-left: 0pt;
      }
      #l5 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l6 {
        padding-left: 0pt;
      }
      #l6 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l7 {
        padding-left: 0pt;
      }
      #l7 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l8 {
        padding-left: 0pt;
      }
      #l8 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l9 {
        padding-left: 0pt;
      }
      #l9 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l10 {
        padding-left: 0pt;
      }
      #l10 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l11 {
        padding-left: 0pt;
      }
      #l11 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l12 {
        padding-left: 0pt;
      }
      #l12 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l13 {
        padding-left: 0pt;
      }
      #l13 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l14 {
        padding-left: 0pt;
      }
      #l14 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l15 {
        padding-left: 0pt;
      }
      #l15 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l16 {
        padding-left: 0pt;
      }
      #l16 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "Segoe UI Symbol", sans-serif;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l17 {
        padding-left: 0pt;
      }
      #l17 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l18 {
        padding-left: 0pt;
      }
      #l18 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l19 {
        padding-left: 0pt;
      }
      #l19 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l20 {
        padding-left: 0pt;
      }
      #l20 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l21 {
        padding-left: 0pt;
      }
      #l21 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l22 {
        padding-left: 0pt;
      }
      #l22 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l23 {
        padding-left: 0pt;
      }
      #l23 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l24 {
        padding-left: 0pt;
      }
      #l24 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l25 {
        padding-left: 0pt;
      }
      #l25 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l26 {
        padding-left: 0pt;
      }
      #l26 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l27 {
        padding-left: 0pt;
      }
      #l27 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l28 {
        padding-left: 0pt;
      }
      #l28 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l29 {
        padding-left: 0pt;
      }
      #l29 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l30 {
        padding-left: 0pt;
      }
      #l30 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l31 {
        padding-left: 0pt;
      }
      #l31 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l32 {
        padding-left: 0pt;
      }
      #l32 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l33 {
        padding-left: 0pt;
      }
      #l33 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l34 {
        padding-left: 0pt;
      }
      #l34 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l35 {
        padding-left: 0pt;
      }
      #l35 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l36 {
        padding-left: 0pt;
      }
      #l36 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l37 {
        padding-left: 0pt;
      }
      #l37 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l38 {
        padding-left: 0pt;
      }
      #l38 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l39 {
        padding-left: 0pt;
      }
      #l39 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l40 {
        padding-left: 0pt;
      }
      #l40 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
      }
      li {
        display: block;
      }
      #l41 {
        padding-left: 0pt;
      }
      #l41 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 8pt;
      }
      li {
        display: block;
      }
      #l42 {
        padding-left: 0pt;
      }
      #l42 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l43 {
        padding-left: 0pt;
      }
      #l43 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l44 {
        padding-left: 0pt;
      }
      #l44 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l45 {
        padding-left: 0pt;
      }
      #l45 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l46 {
        padding-left: 0pt;
      }
      #l46 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l47 {
        padding-left: 0pt;
      }
      #l47 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l48 {
        padding-left: 0pt;
      }
      #l48 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l49 {
        padding-left: 0pt;
      }
      #l49 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l50 {
        padding-left: 0pt;
      }
      #l50 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l51 {
        padding-left: 0pt;
      }
      #l51 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l52 {
        padding-left: 0pt;
      }
      #l52 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l53 {
        padding-left: 0pt;
      }
      #l53 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l54 {
        padding-left: 0pt;
      }
      #l54 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: normal;
        text-decoration: none;
        font-size: 9pt;
      }
      li {
        display: block;
      }
      #l55 {
        padding-left: 0pt;
      }
      #l55 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      li {
        display: block;
      }
      #l56 {
        padding-left: 0pt;
      }
      #l56 > li > *:first-child:before {
        content: "☐ ";
        color: black;
        font-family: "MS Gothic", monospace;
        font-style: normal;
        font-weight: bold;
        text-decoration: none;
        font-size: 10pt;
      }
      table,
      tbody {
        vertical-align: top;
        overflow: visible;
      }

      .flex-container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-top: 5pt;
        text-indent: -11pt;
        line-height: 11pt;
        text-align: left;
        column-gap: 3pt;
        padding-left: 3pt;
      }
    </style>
  </head>
  <body>
    <table
      style="border-collapse: collapse; margin-left: 5.95pt"
      cellspacing="0"
    >
      <tr style="height: 38pt">
        <td
          style="
            width: 336pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="8"
        >
          <p
            class="s1"
            style="
              padding-left: 98pt;
              text-indent: 0pt;
              line-height: 14pt;
              text-align: left;
            "
          >
            Limbach Analytics GmbH
          </p>
          <p
            class="s2"
            style="
              padding-top: 6pt;
              padding-left: 32pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            FB-HL-015: PROBENAHME-PROTOKOLL-TRINKWASSER
          </p>
        </td>
        <td
          style="
            width: 178pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="6"
          rowspan="5"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 21pt">
        <td
          style="
            width: 155pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="2"
        >
          <p
            class="s2"
            style="
              padding-top: 1pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Probenahmenorm
          </p>
        </td>
        <td
          style="
            width: 181pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="6"
        >
          <p
            class="s3"
            style="padding-left: 24pt; text-indent: 0pt; text-align: left"
          >
          </p>
        </td>
      </tr>
      <tr style="height: 17pt">
        <td
          style="
            width: 155pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="2"
        >
          <p
            class="s2"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            ProbenehmerIn
          </p>
        </td>
        <td
          style="
            width: 181pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="6"
        >
          <p
            class="s4"
            style="
              padding-top: 2pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Michael Boy
          </p>
        </td>
      </tr>
      <tr style="height: 17pt">
        <td
          style="
            width: 155pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="2"
        >
          <p
            class="s2"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            Datum / Uhrzeit Probenahme
          </p>
        </td>
        <td
          style="
            width: 181pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="6"
        >
          <input id="test" />
        </td>
      </tr>
      <tr style="height: 17pt">
        <td
          style="
            width: 155pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="2"
        >
          <p
            class="s2"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            Datum / Uhrzeit Laboreingang
          </p>
        </td>
        <td
          style="
            width: 181pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="6"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="padding-left: 3pt; text-indent: 0pt; text-align: left"
          >
            AuftraggeberIn
          </p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p
            class="s4"
            style="
              padding-top: 4pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Aqua Free Service GmbH
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <ul id="l1">
            <li data-list-text="☐">
              <p
                class="s2"
                style="padding-left: 16pt; text-indent: -13pt; text-align: left"
              >
                Winsbergring31, 2252 Hamburg
              </p>
            </li>
          </ul>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p
            class="s4"
            style="
              padding-top: 3pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Anschrift Auftraggeber
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <ul id="l2">
            <li data-list-text="☐">
              <p
                class="s2"
                style="padding-left: 16pt; text-indent: -13pt; text-align: left"
              >
                siehe Auftr.
              </p>
            </li>
          </ul>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p
            class="s4"
            style="
              padding-top: 2pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            mattihas@later
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <p
            class="s2"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            alte Labor-Nr.:
          </p>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            Info/Telefon
          </p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p
            class="s4"
            style="
              padding-top: 3pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            0406 later
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="padding-left: 3pt; text-indent: 0pt; text-align: left"
          >
            Probenahmeort
          </p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p style="text-indent: 0pt; text-align: left">
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <ul id="l3">
            <li data-list-text="☐">
              <p
                class="s2"
                style="padding-left: 16pt; text-indent: -13pt; text-align: left"
              >
                siehe SP
              </p>
            </li>
          </ul>
        </td>
      </tr>
      <tr style="height: 35pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 11pt;
              text-align: left;
            "
          >
            Probenbezeichnung
          </p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p
            class="s5"
            style="
              padding-left: 3pt;
              text-indent: 0pt;
              line-height: 33pt;
              text-align: left;
            "
          >
            siehe Anhang
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <p
            class="s6"
            style="
              padding-top: 7pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            ☐<span class="s7">✔</span><span class="s8"> </span
            ><span class="s2">siehe Auftr.</span>
          </p>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="3"
        >
          <p
            class="s2"
            style="
              padding-left: 3pt;
              padding-right: 11pt;
              text-indent: 0pt;
              line-height: 150%;
              text-align: left;
            "
          >
            Probenahmezweck
            <span class="s9">(bei mikrobiologischen Untersuchungen)</span>
          </p>
        </td>
        <td
          style="
            width: 132pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Zweck a)</p>
          </div>
        </td>
        <td
          style="
            width: 132pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="6"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">abflammen</p>
          </div>
        </td>
        <td
          style="
            width: 133pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Sprühdesinfektion</p>
          </div>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 132pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Zweck b)</p>
          </div>
        </td>
        <td
          style="
            width: 132pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="6"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">abflammen</p>
          </div>
        </td>
        <td
          style="
            width: 133pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Sprühdesinfektion</p>
          </div>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 132pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Zweck c)</p>
          </div>
        </td>
        <td
          style="
            width: 132pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="6"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 133pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="3"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Probenahmeart
          </p>
        </td>
        <td
          style="
            width: 195pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="6"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Trinkwasserprobenahme</p>
          </div>
        </td>
        <td
          style="
            width: 202pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="7"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Schöpfprobe</p>
          </div>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s9"
            style="
              padding-top: 6pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            (bei chem. Untersuchungen)
          </p>
        </td>
        <td
          style="
            width: 195pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="6"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Zufallsstichprobe</p>
          </div>
        </td>
        <td
          style="
            width: 202pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="7"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Pumpprobe mit</p>
          </div>
        </td>
      </tr>
      <tr style="height: 19pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 397pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="13"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">
              gestaffelte Stagnationsprobe
              <span class="s13"
                >(S1 – 1. Stagnationsprobe, S2 – 2. Stagnationsprobe, S0 -
                Ablaufprobe)</span
              >
            </p>
          </div>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Material:
          </p>
        </td>
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s14">Trinkwasser</p>
          </div>
        </td>
        <td
          style="
            width: 72pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Rohwasser</p>
          </div>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Dentalwasser</p>
          </div>
        </td>
        <td
          style="
            width: 168pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="5"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">Wasser sonst.</p>
          </div>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          rowspan="5"
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Flaschensatz
          </p>
        </td>
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">RW/PE 500 ml</p>
          </div>
        </td>
        <td
          style="
            width: 72pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">RW Reserve</p>
          </div>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">
              <a name="bookmark0">AOX</a><span class="s16">1</span>
            </p>
          </div>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">PAK</p>
          </div>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p>
              <a href="#bookmark0" class="s19">Cyanide</a
              ><a href="#bookmark0" class="s17">1</a>
            </p>
          </div>
        </td>
      </tr>
      <tr style="height: 17pt">
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">BK/SK</p>
          </div>
        </td>
        <td
          style="
            width: 72pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p>
              <a href="#bookmark0" class="s19">Metalle</a
              ><a href="#bookmark0" class="s17">1</a>
            </p>
          </div>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p>
              <a href="#bookmark0" class="s19">Phenole</a
              ><a href="#bookmark0" class="s17">1</a>
            </p>
          </div>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">
              <a href="#bookmark0" class="s19">Sulfid</a
              ><a href="#bookmark0" class="s18">1</a>
            </p>
          </div>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Chlorit/Chlorat</p>
          </div>
        </td>
      </tr>
      <tr style="height: 17pt">
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">IC</p>
          </div>
        </td>
        <td
          style="
            width: 72pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p>
              <a href="#bookmark0" class="s19">Quecksilber</a
              ><a href="#bookmark0" class="s17">1</a>
            </p>
          </div>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p>
              <a href="#bookmark0" class="s19">LHKW</a
              ><a href="#bookmark0" class="s20">1</a>
            </p>
          </div>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p>
              <a href="#bookmark0" class="s19">PSM-1</a
              ><a href="#bookmark0" class="s17">1</a>
            </p>
          </div>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">PSM-2</p>
          </div>
        </td>
      </tr>
      <tr style="height: 17pt">
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">TOC/TNb</p>
          </div>
        </td>
        <td
          style="
            width: 72pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Uran</p>
          </div>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">KW</p>
          </div>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Marmor</p>
          </div>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">THM</p>
          </div>
        </td>
      </tr>
      <tr style="height: 18pt">
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">
              NH<span class="s21">4</span>/N<a
                href="#bookmark0"
                style="
                  color: black;
                  font-family: Arial, sans-serif;
                  font-style: normal;
                  font-weight: normal;
                  text-decoration: none;
                  font-size: 6pt;
                "
                >ges</a
              ><a href="#bookmark0" class="s20">1</a>
            </p>
          </div>
        </td>
        <td
          style="
            width: 72pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">
              <a href="#bookmark0" class="s19">BAK</a
              ><span
                style="
                  color: black;
                  font-family: Arial, sans-serif;
                  font-style: normal;
                  font-weight: normal;
                  text-decoration: none;
                  font-size: 6pt;
                  vertical-align: 3pt;
                "
                >1</span
              >
              125ml
            </p>
          </div>
        </td>
        <td
          style="
            width: 76pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s11">
              <a href="#bookmark0" class="s19">BAK</a
              ><span
                style="
                  color: black;
                  font-family: Arial, sans-serif;
                  font-style: normal;
                  font-weight: normal;
                  text-decoration: none;
                  font-size: 6pt;
                  vertical-align: 3pt;
                "
                >1</span
              ><span class="s10"> 250ml</span>
            </p>
          </div>
        </td>
        <td
          style="
            width: 85pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
          </div>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
          </div>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Messung vor Ort/
          </p>
        </td>
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Temp. bei PN</p>
          </div>
        </td>
        <td
          style="
            width: 7pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 44pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            cursor: pointer;
          "
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">pH</p>
          </div>
        </td>
        <td
          style="
            width: 21pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 42pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            cursor: pointer;
          "
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">LF</p>
          </div>
        </td>
        <td style="width: 24pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td style="width: 10pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 5pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 30pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            cursor: pointer;
          "
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">O<span class="s21">2</span></p>
          </div>
        </td>
        <td style="width: 16pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 34pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p
              class="s10"
              style="
                padding-top: 5pt;
                padding-left: 15pt;
                text-indent: -11pt;
                text-align: left;
              "
            >
              Redox<span class="s16">2</span>
            </p>
          </div>
        </td>
      </tr>
      <tr style="height: 16pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Organoleptik
          </p>
        </td>
        <td
          style="
            width: 38pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 4pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            °C
          </p>
        </td>
        <td
          style="
            width: 43pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 7pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 44pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 4pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            pH
          </p>
        </td>
        <td
          style="
            width: 21pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 42pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 4pt;
              padding-left: 5pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            µS/cm
          </p>
        </td>
        <td
          style="
            width: 24pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 10pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 5pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 30pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 4pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            mg/l
          </p>
        </td>
        <td
          style="
            width: 16pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 34pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 83pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 4pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            mV
          </p>
        </td>
      </tr>
      <tr style="height: 21pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 88pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          id="temp"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Temp. °C (konst)</p>
          </div>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Trübung</p>
          </div>
        </td>
        <td
          style="
            width: 66pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Cl<span class="s21">2 </span>ges.</p>
          </div>
        </td>
        <td style="width: 10pt; border-top-style: solid; border-top-width: 1pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 5pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 46pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">Cl<span class="s21">2 </span>frei.</p>
          </div>
        </td>
        <td
          style="
            width: 34pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
            cursor: pointer;
          "
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Cl<span class="s21">2 </span>geb.</p>
          </div>
        </td>
      </tr>
      <tr style="height: 16pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <ul id="l50">
            <li data-list-text="☐">
              <p
                class="s4"
                style="
                  padding-top: 2pt;
                  padding-left: 21pt;
                  text-indent: -18pt;
                  line-height: 13pt;
                  text-align: left;
                "
              >
                s. extra Protokoll
              </p>
            </li>
          </ul>
        </td>
        <td
          style="
            width: 38pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            °C
          </p>
        </td>
        <td
          style="
            width: 43pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 7pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 44pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            FNU
          </p>
        </td>
        <td
          style="
            width: 21pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 42pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 3pt;
              padding-left: 5pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            mg/l
          </p>
        </td>
        <td
          style="
            width: 24pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 10pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 5pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 30pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 3pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            mg/l
          </p>
        </td>
        <td
          style="
            width: 16pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 34pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 83pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p
            class="s10"
            style="
              padding-top: 3pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            mg/l
          </p>
        </td>
      </tr>
      <tr style="height: 36pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s25"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Diese eine checkbox
          </p>
          <p
            class="s25"
            style="
              padding-top: 7pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            nicht durch SP ausfüllen
          </p>
        </td>
        <td
          style="
            width: 88pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">Färbung</p>
          </div>
        </td>
        <td
          style="
            width: 65pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="2"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">Trübung</p>
          </div>
        </td>
        <td
          style="
            width: 81pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="4"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>
            <p class="s10">Geruch</p>
          </div>
        </td>
        <td
          style="
            width: 80pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
            cursor: pointer;
          "
          colspan="3"
          onclick="toggleCheckMark(this)"
        >
          <div class="flex-container">
            <span style="font-size: 9pt">☐</span>

            <p class="s10">Geschmack</p>
          </div>
        </td>
        <td
          style="
            width: 83pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Untersuchungs-
          </p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p
            class="s4"
            style="
              padding-top: 3pt;
              padding-left: 4pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Legionellen
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <ul id="l55">
            <li data-list-text="☐">
              <p
                class="s2"
                style="padding-left: 16pt; text-indent: -13pt; text-align: left"
              >
                siehe SP
              </p>
            </li>
          </ul>
        </td>
      </tr>
      <tr style="height: 20pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            umfang
          </p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p style="text-indent: 0pt; text-align: left">
            <input id="umfang" />
          </p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 1pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <p
            class="s6"
            style="padding-left: 3pt; text-indent: 0pt; text-align: left"
          >
            ☐<span class="s11">✔</span><span class="s24"> </span
            ><span class="s2">siehe Auftr.</span>
          </p>
        </td>
      </tr>
      <tr style="height: 19pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 280pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 1pt;
          "
          colspan="11"
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 1pt;
            border-left-style: solid;
            border-left-width: 1pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <ul id="l56">
            <li data-list-text="☐">
              <p
                class="s2"
                style="
                  padding-top: 4pt;
                  padding-left: 16pt;
                  text-indent: -13pt;
                  line-height: 13pt;
                  text-align: left;
                "
              >
                s. alte Lab.-Nr.
              </p>
            </li>
          </ul>
        </td>
      </tr>
      <tr style="height: 26pt">
        <td
          style="
            width: 198pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
          "
          colspan="3"
        >
          <p
            class="s2"
            style="
              padding-top: 8pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Örtliche Beobachtungen/Bemerkungen:
          </p>
        </td>
        <td style="width: 7pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left">
            <input id="Örtliche" />
          </p>
        </td>
        <td style="width: 44pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td style="width: 21pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td style="width: 42pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td style="width: 24pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td style="width: 10pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td style="width: 5pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td style="width: 30pt; border-top-style: solid; border-top-width: 2pt">
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 16pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 117pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="2"
        >
          <p
            class="s2"
            style="
              padding-top: 8pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Auftrag erteilt:
          </p>
        </td>
      </tr>
      <tr style="height: 22pt">
        <td
          style="
            width: 117pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Terminwunsch:
          </p>
        </td>
        <td
          style="
            width: 38pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 43pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 7pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 44pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 21pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 42pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 24pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 10pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 5pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 30pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 16pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
        <td
          style="
            width: 34pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
          "
        >
          <p
            class="s2"
            style="
              padding-top: 5pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            am:
          </p>
        </td>
        <td
          style="
            width: 83pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
        >
          <p style="text-indent: 0pt; text-align: left"><br /></p>
        </td>
      </tr>
      <tr style="height: 22pt">
        <td
          style="
            width: 514pt;
            border-top-style: solid;
            border-top-width: 2pt;
            border-left-style: solid;
            border-left-width: 2pt;
            border-bottom-style: solid;
            border-bottom-width: 2pt;
            border-right-style: solid;
            border-right-width: 2pt;
          "
          colspan="14"
        >
          <p
            class="s26"
            style="
              padding-top: 4pt;
              padding-left: 3pt;
              text-indent: 0pt;
              text-align: left;
            "
          >
            Datum Unterschrift (ProbenehmerIn):
          </p>
        </td>
      </tr>
    </table>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <p
      style="
        padding-left: 5pt;
        text-indent: 0pt;
        line-height: 1pt;
        text-align: left;
      "
    />
    <p
      class="s28"
      style="
        padding-top: 4pt;
        padding-left: 5pt;
        text-indent: 0pt;
        text-align: left;
      "
    >
      1 <span class="s29">Konservierung siehe SOP-HL-210</span>
    </p>
    <p
      class="s28"
      style="padding-left: 5pt; text-indent: 0pt; text-align: left"
    >
      2 <span class="s29">Nicht korrigierter Messwert</span>
    </p>
    <p style="text-indent: 0pt; text-align: left"><br /></p>
    <p style="padding-left: 5pt; text-indent: 0pt; text-align: left">
      FB-HL-015, Version 01, Erstellt: S. Schönherr, Geprüft: V. Brockmann,
      Freigegeben: S. Schönherr, Gültig ab: 11.03.2020
    </p>
  </body>
</html>
`;
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
