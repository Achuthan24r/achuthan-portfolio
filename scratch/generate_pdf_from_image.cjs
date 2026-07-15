const fs = require('fs');
const path = require('path');

function getJpegDimensions(buffer) {
  let i = 2; // skip SOI marker FFD8
  while (i < buffer.length) {
    if (buffer[i] !== 0xFF) {
      throw new Error('Invalid JPEG marker');
    }
    const marker = buffer[i + 1];
    if (marker === 0xC0 || marker === 0xC2) { // SOF0 or SOF2
      const height = buffer.readUInt16BE(i + 5);
      const width = buffer.readUInt16BE(i + 7);
      return { width, height };
    }
    const length = buffer.readUInt16BE(i + 2);
    i += 2 + length;
  }
  throw new Error('SOF0 marker not found');
}

const jpegPath = path.join(__dirname, '../public/resume.jpg');
const pdfPath = path.join(__dirname, '../public/resume.pdf');

const jpegBuffer = fs.readFileSync(jpegPath);
const { width, height } = getJpegDimensions(jpegBuffer);
console.log(`JPEG dimensions: ${width}x${height}`);

// Standard A4 size: 595 x 842
const pageWidth = 595;
const pageHeight = 842;

const pdfHeader = "%PDF-1.4\r\n";
const obj1 = "1 0 obj\r\n<< /Type /Catalog /Pages 2 0 R >>\r\nendobj\r\n";
const obj2 = "2 0 obj\r\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\r\nendobj\r\n";
const obj3 = `3 0 obj\r\n<< /Type /Page /Parent 2 0 R /Resources << /XObject << /Im1 4 0 R >> >> /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Contents 5 0 R >>\r\nendobj\r\n`;

const obj4Header = `4 0 obj\r\n<< /Type /XObject /Subtype /Image /Width ${width} /Height ${height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBuffer.length} >>\r\nstream\r\n`;
const obj4Footer = "\r\nendstream\r\nendobj\r\n";

const contentStream = `q\r\n${pageWidth} 0 0 ${pageHeight} 0 0 cm\r\n/Im1 Do\r\nQ\r\n`;
const obj5 = `5 0 obj\r\n<< /Length ${contentStream.length} >>\r\nstream\r\n${contentStream}endstream\r\nendobj\r\n`;

// Calculate offsets
let currentOffset = pdfHeader.length;
const offsets = [];

const parts = [
  obj1,
  obj2,
  obj3,
  obj4Header,
  jpegBuffer, // object 4 stream binary
  obj4Footer,
  obj5
];

for (let i = 0; i < parts.length; i++) {
  if (i === 4) {
    // Binary buffer
    offsets.push(currentOffset - obj4Header.length); // Object 4 starts at the header
    currentOffset += jpegBuffer.length;
  } else if (i === 5) {
    currentOffset += parts[i].length;
  } else {
    offsets.push(currentOffset);
    currentOffset += parts[i].length;
  }
}

const pad = (num, size) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

let xref = "xref\r\n0 " + (offsets.length + 1) + "\r\n";
xref += "0000000000 65535 f \r\n";
for (let i = 0; i < offsets.length; i++) {
  xref += pad(offsets[i], 10) + " 00000 n \r\n";
}

const startXref = currentOffset;
const trailer = "trailer\r\n<< /Size " + (offsets.length + 1) + " /Root 1 0 R >>\r\nstartxref\r\n" + startXref + "\r\n%%EOF\r\n";

const finalPdf = Buffer.concat([
  Buffer.from(pdfHeader),
  Buffer.from(obj1),
  Buffer.from(obj2),
  Buffer.from(obj3),
  Buffer.from(obj4Header),
  jpegBuffer,
  Buffer.from(obj4Footer),
  Buffer.from(obj5),
  Buffer.from(xref),
  Buffer.from(trailer)
]);

fs.writeFileSync(pdfPath, finalPdf);
console.log('PDF compiled successfully with embedded JPEG image!');
