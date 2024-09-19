const fs = require('fs');
const pdf = require('html-pdf-node');

fs.readFile('D:\\Projects\\resume-builder\\templates\\index.html', 'utf8', (err, htmlContent) => {
  if (err) {
    console.error("Error read file", err);
    return;
  }

  let file = { content: htmlContent };

  let options = { format: 'A4' };

  pdf.generatePdf(file, options).then(pdfBuffer => {
    fs.writeFileSync("D:\\Projects\\resume-builder\\output\\output.pdf", pdfBuffer);
    console.log("PDF saved successfully");
  }).catch(error => {
    console.error("Error create PDF", error);
  });
});
