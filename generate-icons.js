const { PNG } = require('pngjs');
const fs = require('fs');
const path = require('path');

function createPng(width, height, text, outPath) {
  const png = new PNG({ width, height });

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const cx = width / 2;
      const cy = height / 2;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const maxDist = Math.min(width, height) / 2;

      if (dist < maxDist * 0.9) {
        png.data[idx] = 30;     // R
        png.data[idx + 1] = 20; // G
        png.data[idx + 2] = 50; // B
        png.data[idx + 3] = 255; // A
      } else {
        png.data[idx] = 0;
        png.data[idx + 1] = 0;
        png.data[idx + 2] = 0;
        png.data[idx + 3] = 0;
      }
    }
  }

  const fontSize = Math.floor(width / 10);
  const textY = Math.floor(height / 2) - (fontSize / 2);
  const textX = Math.floor(width / 2) - (fontSize * text.length / 5);

  for (let dy = 0; dy < fontSize; dy++) {
    for (let dx = 0; dx < fontSize * text.length / 3; dx++) {
      const px = textX + dx;
      const py = textY + dy;
      if (px >= 0 && px < width && py >= 0 && py < height) {
        const idx = (width * py + px) << 2;
        const letterDist = Math.abs(dx - fontSize * text.length / 6);
        if (letterDist < fontSize * 0.4) {
          png.data[idx] = 201;
          png.data[idx + 1] = 168;
          png.data[idx + 2] = 76;
          png.data[idx + 3] = 255;
        }
      }
    }
  }

  const buffer = PNG.sync.write(png);
  fs.writeFileSync(outPath, buffer);
  console.log(`Created ${outPath} (${width}x${height})`);
}

const assetsDir = path.join(__dirname, 'assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

createPng(1024, 1024, 'Monk', path.join(assetsDir, 'icon.png'));
createPng(2732, 2732, 'Monk', path.join(assetsDir, 'splash.png'));