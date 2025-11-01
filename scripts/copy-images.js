import { existsSync, mkdirSync, copyFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imageNames = [
  'ceviche.jpg',
  'empanadas.jpg',
  'sancocho.jpg',
  'corvina.jpg',
  'arroz-pollo.jpg',
  'tamales.jpg',
  'ropa-vieja.jpg',
  'tres-leches.jpg',
  'hero-bg.jpg',
  'gallery-1.jpg',
  'gallery-2.jpg',
  'gallery-3.jpg',
  'gallery-4.jpg',
  'gallery-5.jpg',
  'gallery-6.jpg',
  'story-1.jpg',
  'story-2.jpg',
  'story-3.jpg'
];

const sourcePath = join(__dirname, '../src/assets/images/placeholder.jpg');
const destDir = join(__dirname, '../src/assets/images');

// Create destination directory if it doesn't exist
if (!existsSync(destDir)) {
  mkdirSync(destDir, { recursive: true });
}

// Copy placeholder image for each required image
imageNames.forEach(imageName => {
  const destPath = join(destDir, imageName);
  if (!existsSync(destPath)) {
    copyFileSync(sourcePath, destPath);
    console.log(`Created: ${imageName}`);
  } else {
    console.log(`Skipped (exists): ${imageName}`);
  }
});

console.log('Image placeholders created successfully!');
