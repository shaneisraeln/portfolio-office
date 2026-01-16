/**
 * **Feature: portfolio-customization, Property 2: Social media metadata consistency**
 * **Validates: Requirements 1.3**
 * 
 * Property-based test for metadata consistency across Open Graph and Twitter card meta tags
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

describe('Metadata Consistency Tests', () => {
  let htmlContent: string;

  beforeAll(() => {
    // Read the actual HTML file
    const htmlPath = path.join(__dirname, '../index.html');
    htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  });

  test('should have Shane Israel N in page title', () => {
    expect(htmlContent).toMatch(/<title>.*Shane Israel N.*<\/title>/);
    expect(htmlContent).toMatch(/<title>.*Software Engineer \| Machine Learning Engineer.*<\/title>/);
  });

  test('should have consistent Shane Israel N information across all meta tags', () => {
    // Check title meta tags
    expect(htmlContent).toMatch(/name="title".*content=".*Shane Israel N.*"/);
    expect(htmlContent).toMatch(/property="og:title".*content=".*Shane Israel N.*"/);
    expect(htmlContent).toMatch(/property="twitter:title".*content=".*Shane Israel N.*"/);
    expect(htmlContent).toMatch(/name="twitter:title".*content=".*Shane Israel N.*"/);

    // Check professional title
    expect(htmlContent).toMatch(/content=".*Software Engineer \| Machine Learning Engineer.*"/);
  });

  test('should have consistent domain references across all URL meta tags', () => {
    // Check for ShaneIsrael.com domain
    expect(htmlContent).toMatch(/property="og:url".*content=".*ShaneIsrael\.com.*"/);
    expect(htmlContent).toMatch(/property="twitter:url".*content=".*ShaneIsrael\.com.*"/);
    expect(htmlContent).toMatch(/name="twitter:url".*content=".*ShaneIsrael\.com.*"/);
    expect(htmlContent).toMatch(/property="og:image".*content=".*ShaneIsrael\.com.*"/);
    expect(htmlContent).toMatch(/property="twitter:image".*content=".*ShaneIsrael\.com.*"/);

    // Should not contain old domain
    expect(htmlContent).not.toMatch(/henryheffernan\.com/);
  });

  test('should have consistent Shane description across all description meta tags', () => {
    const expectedContent = [
      'Shane Israel N',
      'Software Engineer and Machine Learning Engineer',
      'India',
      'undergraduate Computer Science student',
      'AI/ML',
      'internships and full-time roles'
    ];

    // All description tags should contain Shane's key information
    expectedContent.forEach(content => {
      expect(htmlContent).toMatch(new RegExp(`name="description".*content=".*${content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*"`));
      expect(htmlContent).toMatch(new RegExp(`property="og:description".*content=".*${content.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}.*"`));
    });

    // Should not contain Henry's information
    const oldContent = ['Henry', 'NY', 'Rensselaer Polytechnic Institute'];
    oldContent.forEach(content => {
      expect(htmlContent).not.toMatch(new RegExp(`content=".*${content}.*"`));
    });
  });

  /**
   * Property-based test: For any meta tag pattern that should contain Shane's information,
   * it should consistently reference his name and professional details
   */
  test('property: all Shane-related meta tags contain consistent information', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          'name="title"',
          'property="og:title"',
          'property="twitter:title"',
          'name="twitter:title"'
        ),
        (metaAttribute) => {
          const regex = new RegExp(`${metaAttribute}.*content="([^"]*)"`, 'i');
          const match = htmlContent.match(regex);
          
          if (match && match[1]) {
            const content = match[1];
            // Property: All title meta tags should contain Shane's name
            return content.includes('Shane Israel N');
          }
          return false;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property-based test: For any URL meta tag, it should use the correct domain
   */
  test('property: all URL meta tags use ShaneIsrael.com domain', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          'property="og:url"',
          'property="twitter:url"',
          'name="twitter:url"',
          'property="og:image"',
          'property="twitter:image"',
          'name="twitter:image"'
        ),
        (metaAttribute) => {
          const regex = new RegExp(`${metaAttribute}.*content="([^"]*)"`, 'i');
          const match = htmlContent.match(regex);
          
          if (match && match[1]) {
            const content = match[1];
            // Property: All URL references should use the correct domain
            const usesCorrectDomain = content.includes('ShaneIsrael.com');
            const doesNotUseOldDomain = !content.includes('henryheffernan.com');
            
            return usesCorrectDomain && doesNotUseOldDomain;
          }
          return false;
        }
      ),
      { numRuns: 100 }
    );
  });

  /**
   * Property-based test: No old personal information should remain
   */
  test('property: no Henry Heffernan information remains in any meta tag', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(
          'Henry',
          'Heffernan',
          'henryheffernan.com',
          'henryheffernan@gmail.com'
        ),
        (oldInfo) => {
          // Property: No old information should be present in the HTML
          return !htmlContent.includes(oldInfo);
        }
      ),
      { numRuns: 100 }
    );
  });
});