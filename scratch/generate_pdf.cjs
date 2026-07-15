const fs = require('fs');
const path = require('path');

// We use standard CRLF (\r\n) line endings for the PDF template to be consistent
const pdfHeader = "%PDF-1.4\r\n";
const objects = [
  "1 0 obj\r\n<< /Type /Catalog /Pages 2 0 R >>\r\nendobj\r\n",
  "2 0 obj\r\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\r\nendobj\r\n",
  "3 0 obj\r\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>\r\nendobj\r\n",
  "4 0 obj\r\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\r\nendobj\r\n",
  "5 0 obj\r\n<< /Length 50 >>\r\nstream\r\nBT\r\n/F1 20 Tf\r\n72 712 Td\r\n(ACHUTHAN RAMESHKUMAR - RESUME PLACEHOLDER) Tj\r\nET\r\nendstream\r\nendobj\r\n"
];

let currentOffset = pdfHeader.length;
const offsets = [];

for (let i = 0; i < objects.length; i++) {
  offsets.push(currentOffset);
  currentOffset += objects[i].length;
}

const pad = (num, size) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

let xref = "xref\r\n0 " + (objects.length + 1) + "\r\n";
xref += "0000000000 65535 f \r\n";
for (let i = 0; i < offsets.length; i++) {
  xref += pad(offsets[i], 10) + " 00000 n \r\n";
}

const startXref = currentOffset;
const trailer = "trailer\r\n<< /Size " + (objects.length + 1) + " /Root 1 0 R >>\r\nstartxref\r\n" + startXref + "\r\n%%EOF\r\n";

const finalPdf = Buffer.concat([
  Buffer.from(pdfHeader),
  ...objects.map(obj => Buffer.from(obj)),
  Buffer.from(xref),
  Buffer.from(trailer)
]);

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'resume.pdf'), finalPdf);
console.log('PDF generated successfully at public/resume.pdf');
