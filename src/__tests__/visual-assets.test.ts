/**
 * **Feature: portfolio-customization, Visual Assets Tests**
 * **Validates: Requirements 2.1**
 * 
 * Unit tests for favicon references and visual asset configuration
 */

import * as fs from 'fs';
import * as path from 'path';

describe('Visual Assets Configuration Tests', () => {
  let htmlContent: string;
  let assetsReadmeContent: string;

  beforeAll(() => {
    // Read the HTML file and assets README
    const htmlPath = path.join(__dirname, '../index.html');
    const readmePath = path.join(__dirname, '../../static/images/README.md');
    
    htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    assetsReadmeContent = fs.readFileSync(readmePath, 'utf-8');
  });

  describe('Favicon References Tests', () => {
    test('should have correct favicon link in HTML', () => {
      expect(htmlContent).toMatch(/<link rel="shortcut icon" href="\.\.\/static\/images\/favicon\.ico"/);
    });

    test('should reference correct favicon path', () => {
      // Should point to the static/images directory
      expect(htmlContent).toMatch(/href="\.\.\/static\/images\/favicon\.ico"/);
      
      // Should not contain old domain references in favicon path
      expect(htmlContent).not.toMatch(/henryheffernan\.com.*favicon/);
    });

    test('should have proper favicon file type', () => {
      expect(htmlContent).toMatch(/type="image\/x-icon"/);
    });
  });

  describe('Social Media Preview Images Tests', () => {
    test('should use Shane domain for preview images', () => {
      expect(htmlContent).toMatch(/property="og:image" content="https:\/\/ShaneIsrael\.com\/images\/preview-new\.jpg"/);
      expect(htmlContent).toMatch(/property="twitter:image" content="https:\/\/ShaneIsrael\.com\/images\/preview-new\.jpg"/);
      expect(htmlContent).toMatch(/name="twitter:image" content="https:\/\/ShaneIsrael\.com\/images\/preview-new\.jpg"/);
    });

    test('should have secure image references', () => {
      expect(htmlContent).toMatch(/property="og:image:secure" content="https:\/\/ShaneIsrael\.com\/images\/preview-new\.jpg"/);
    });

    test('should not contain old domain in image references', () => {
      expect(htmlContent).not.toMatch(/henryheffernan\.com.*preview/);
      expect(htmlContent).not.toMatch(/henryheffernan\.com.*images/);
    });
  });

  describe('Assets Documentation Tests', () => {
    test('should have README file for asset replacement guidance', () => {
      expect(assetsReadmeContent).toContain('Visual Assets for Shane Israel N Portfolio');
    });

    test('should document all required favicon files', () => {
      const requiredFaviconFiles = [
        'favicon.ico',
        'favicon-16x16.png',
        'favicon-32x32.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'apple-touch-icon.png'
      ];

      requiredFaviconFiles.forEach(filename => {
        expect(assetsReadmeContent).toContain(filename);
      });
    });

    test('should document preview image files', () => {
      const previewFiles = [
        'preview-new.jpg',
        'preview-image.jpg',
        'preview.jpg'
      ];

      previewFiles.forEach(filename => {
        expect(assetsReadmeContent).toContain(filename);
      });
    });

    test('should indicate current status needs Shane assets', () => {
      expect(assetsReadmeContent).toMatch(/Henry Heffernan.*branding.*need.*replaced.*Shane Israel N/);
    });

    test('should provide technical requirements', () => {
      expect(assetsReadmeContent).toContain('Technical Requirements');
      expect(assetsReadmeContent).toContain('PNG or ICO format');
      expect(assetsReadmeContent).toContain('JPG format');
      expect(assetsReadmeContent).toContain('optimized for web');
    });
  });

  describe('Asset File Structure Tests', () => {
    test('should have all required favicon files present (even if they need replacement)', () => {
      const requiredFiles = [
        'static/images/favicon.ico',
        'static/images/favicon-16x16.png',
        'static/images/favicon-32x32.png',
        'static/images/android-chrome-192x192.png',
        'static/images/android-chrome-512x512.png',
        'static/images/apple-touch-icon.png'
      ];

      requiredFiles.forEach(filePath => {
        const fullPath = path.join(__dirname, '../../', filePath);
        expect(fs.existsSync(fullPath)).toBe(true);
      });
    });

    test('should have preview image files present', () => {
      const previewFiles = [
        'static/images/preview-new.jpg',
        'static/images/preview-image.jpg',
        'static/images/preview.jpg'
      ];

      previewFiles.forEach(filePath => {
        const fullPath = path.join(__dirname, '../../', filePath);
        expect(fs.existsSync(fullPath)).toBe(true);
      });
    });

    test('should have assets README file', () => {
      const readmePath = path.join(__dirname, '../../static/images/README.md');
      expect(fs.existsSync(readmePath)).toBe(true);
    });
  });

  describe('Meta Tag Consistency Tests', () => {
    test('should have consistent image references across all meta tags', () => {
      const imageUrl = 'https://ShaneIsrael.com/images/preview-new.jpg';
      
      // Count occurrences of the correct image URL
      const ogImageMatches = (htmlContent.match(/property="og:image".*content="[^"]*preview-new\.jpg"/g) || []).length;
      const twitterImageMatches = (htmlContent.match(/twitter:image".*content="[^"]*preview-new\.jpg"/g) || []).length;
      
      expect(ogImageMatches).toBeGreaterThan(0);
      expect(twitterImageMatches).toBeGreaterThan(0);
      
      // Should not have any old image references
      expect(htmlContent).not.toMatch(/henryheffernan\.com.*preview/);
    });

    test('should use HTTPS for all image references', () => {
      const imageReferences = htmlContent.match(/content="[^"]*images\/[^"]*"/g) || [];
      
      imageReferences.forEach(reference => {
        expect(reference).toMatch(/https:\/\//);
        expect(reference).not.toMatch(/http:\/\/[^s]/); // Not HTTP without S
      });
    });
  });
});