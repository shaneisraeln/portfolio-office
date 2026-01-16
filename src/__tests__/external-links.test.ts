/**
 * **Feature: portfolio-customization, Property 8: External link accuracy**
 * **Validates: Requirements 5.1, 5.4**
 * 
 * **Feature: portfolio-customization, Property 9: Domain reference consistency**
 * **Validates: Requirements 5.5**
 * 
 * Property-based tests for external links and domain references
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

describe('External Links and Domain References Tests', () => {
  let readmeContent: string;
  let htmlContent: string;
  let licenseContent: string;
  let monitorScreenContent: string;

  beforeAll(() => {
    // Read all relevant files
    const readmePath = path.join(__dirname, '../../readme.md');
    const htmlPath = path.join(__dirname, '../index.html');
    const licensePath = path.join(__dirname, '../../LICENSE.md');
    const monitorScreenPath = path.join(__dirname, '../Application/World/MonitorScreen.ts');
    
    readmeContent = fs.readFileSync(readmePath, 'utf-8');
    htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    licenseContent = fs.readFileSync(licensePath, 'utf-8');
    monitorScreenContent = fs.readFileSync(monitorScreenPath, 'utf-8');
  });

  describe('External Link Accuracy Tests', () => {
    test('README should have correct GitHub link', () => {
      expect(readmeContent).toMatch(/https:\/\/github\.com\/shaneisraeln/);
      expect(readmeContent).not.toMatch(/github\.com\/henryjeff/);
    });

    test('README should have correct LinkedIn link', () => {
      expect(readmeContent).toMatch(/https:\/\/www\.linkedin\.com\/in\/shane-israel\//);
    });

    test('README should have correct Instagram link', () => {
      expect(readmeContent).toMatch(/https:\/\/www\.instagram\.com\/_shane__israel_lh44_\//);
    });

    test('README should have correct email address', () => {
      expect(readmeContent).toMatch(/shaneisrael2006@gmail\.com/);
      expect(readmeContent).not.toMatch(/henryheffernan@gmail\.com/);
    });

    test('MonitorScreen should load custom ShaneOS', () => {
      // Should load custom OS in production
      expect(monitorScreenContent).toMatch(/iframe\.src = '\/os-dist\/index\.html'/);
      // Should load dev server when ?dev param is present
      expect(monitorScreenContent).toMatch(/iframe\.src = 'http:\/\/localhost:3000\/'/);
      // Should have ShaneOS title
      expect(monitorScreenContent).toMatch(/iframe\.title = 'ShaneOS'/);
    });

    /**
     * Property-based test: For any external link in the system,
     * it should point to Shane's actual profiles
     */
    test('property: all external links point to Shane profiles', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(
            'github.com',
            'linkedin.com',
            'instagram.com'
          ),
          (platform) => {
            if (platform === 'github.com') {
              expect(readmeContent).toMatch(/github\.com\/shaneisraeln/);
              // MonitorScreen now loads custom OS, not GitHub directly
              expect(readmeContent).not.toMatch(/github\.com\/henryjeff/);
            }
            
            if (platform === 'linkedin.com') {
              expect(readmeContent).toMatch(/linkedin\.com\/in\/shane-israel/);
            }
            
            if (platform === 'instagram.com') {
              expect(readmeContent).toMatch(/instagram\.com\/_shane__israel_lh44_/);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Domain Reference Consistency Tests', () => {
    test('HTML should use ShaneIsrael.com domain', () => {
      expect(htmlContent).toMatch(/ShaneIsrael\.com/);
      expect(htmlContent).not.toMatch(/henryheffernan\.com/);
    });

    test('README should reference ShaneIsrael.com', () => {
      expect(readmeContent).toMatch(/ShaneIsrael\.com/);
      expect(readmeContent).not.toMatch(/henryheffernan\.com/);
    });

    test('no files should contain old domain references in active code', () => {
      // README and HTML should not contain old domain
      expect(readmeContent).not.toMatch(/henryheffernan\.com/);
      expect(htmlContent).not.toMatch(/henryheffernan\.com/);
      expect(licenseContent).not.toMatch(/henryheffernan\.com/);
      
      // MonitorScreen should load custom OS, not external URLs
      expect(monitorScreenContent).toMatch(/iframe\.src = '\/os-dist\/index\.html'/);
      expect(monitorScreenContent).toMatch(/ShaneOS/);
    });

    /**
     * Property-based test: For any domain reference in the system,
     * it should use ShaneIsrael.com and not contain old domain
     */
    test('property: all domain references use ShaneIsrael.com', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(readmeContent, htmlContent),
          (fileContent) => {
            const domainMatches = fileContent.match(/https?:\/\/[^\/\s]+/g) || [];
            
            domainMatches.forEach(url => {
              if (url.includes('ShaneIsrael.com')) {
                expect(url).toMatch(/ShaneIsrael\.com/);
              }
              
              // Should not contain old domain
              expect(url).not.toMatch(/henryheffernan\.com/);
            });
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });

    /**
     * Property-based test: No old domain references should exist in active code
     */
    test('property: no old domain references remain in active code', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(readmeContent, htmlContent, licenseContent),
          (fileContent) => {
            // Property: No old domain should be present in these files
            return !fileContent.includes('henryheffernan.com');
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Contact Information Consistency Tests', () => {
    test('all email references should use Shane email', () => {
      expect(readmeContent).toMatch(/shaneisrael2006@gmail\.com/);
      expect(readmeContent).not.toMatch(/henryheffernan@gmail\.com/);
    });

    test('copyright should reference Shane', () => {
      expect(licenseContent).toMatch(/Copyright 2024 Shane Israel N/);
      expect(licenseContent).not.toMatch(/Henry Heffernan/);
    });

    /**
     * Property-based test: For any contact information,
     * it should reference Shane's details
     */
    test('property: all contact information references Shane', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(
            'shaneisrael2006@gmail.com',
            'Shane Israel N',
            'shane-israel',
            '_shane__israel_lh44_'
          ),
          (shaneInfo) => {
            if (shaneInfo === 'shaneisrael2006@gmail.com') {
              expect(readmeContent).toMatch(/shaneisrael2006@gmail\.com/);
            }
            
            if (shaneInfo === 'Shane Israel N') {
              expect(readmeContent).toMatch(/Shane Israel N/);
              expect(licenseContent).toMatch(/Shane Israel N/);
            }
            
            if (shaneInfo === 'shane-israel') {
              expect(readmeContent).toMatch(/shane-israel/);
            }
            
            if (shaneInfo === '_shane__israel_lh44_') {
              expect(readmeContent).toMatch(/_shane__israel_lh44_/);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Repository Information Tests', () => {
    test('README should reference correct repository structure', () => {
      expect(readmeContent).toMatch(/Shane Israel N's 3D interactive portfolio/);
      expect(readmeContent).toMatch(/Software Engineer and Machine Learning Engineer/);
    });

    test('README should have proper project description', () => {
      expect(readmeContent).toMatch(/Three\.js-based 3D office environment/);
      expect(readmeContent).toMatch(/interactive elements/);
    });

    test('README should include Shane professional background', () => {
      expect(readmeContent).toMatch(/undergraduate Computer Science student/);
      expect(readmeContent).toMatch(/Artificial Intelligence.*Machine Learning/);
      expect(readmeContent).toMatch(/seeking internships and full-time/);
    });

    /**
     * Property-based test: Repository information should be consistent
     * with Shane's professional identity
     */
    test('property: repository information reflects Shane identity', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(
            'Software Engineer',
            'Machine Learning Engineer',
            'Computer Science',
            'Three.js'
          ),
          (professionalTerm) => {
            expect(readmeContent).toMatch(new RegExp(professionalTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
            return readmeContent.includes(professionalTerm);
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});