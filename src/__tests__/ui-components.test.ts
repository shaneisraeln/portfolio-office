/**
 * **Feature: portfolio-customization, Property 1: Name consistency across title elements**
 * **Validates: Requirements 1.1**
 * 
 * **Feature: portfolio-customization, Property 6: Branding consistency in UI components**
 * **Validates: Requirements 2.5**
 * 
 * **Feature: portfolio-customization, Property 3: Contact information display**
 * **Validates: Requirements 1.4**
 * 
 * Property-based tests for UI component consistency
 */

import * as fc from 'fast-check';
import * as fs from 'fs';
import * as path from 'path';

describe('UI Components Consistency Tests', () => {
  let infoOverlayContent: string;
  let loadingScreenContent: string;

  beforeAll(() => {
    // Read the actual component files
    const infoOverlayPath = path.join(__dirname, '../Application/UI/components/InfoOverlay.tsx');
    const loadingScreenPath = path.join(__dirname, '../Application/UI/components/LoadingScreen.tsx');
    
    infoOverlayContent = fs.readFileSync(infoOverlayPath, 'utf-8');
    loadingScreenContent = fs.readFileSync(loadingScreenPath, 'utf-8');
  });

  describe('Name Consistency Tests', () => {
    test('InfoOverlay should have Shane Israel N as NAME_TEXT', () => {
      expect(infoOverlayContent).toMatch(/const NAME_TEXT = ['"]Shane Israel N['"];/);
      expect(infoOverlayContent).not.toMatch(/const NAME_TEXT = ['"]Henry Heffernan['"];/);
    });

    test('InfoOverlay should have correct professional title', () => {
      expect(infoOverlayContent).toMatch(/const TITLE_TEXT = ['"]Software Engineer \| Machine Learning Engineer['"];/);
      expect(infoOverlayContent).not.toMatch(/const TITLE_TEXT = ['"]Software Engineer['"];/);
    });

    test('LoadingScreen should have Shane branding', () => {
      expect(loadingScreenContent).toMatch(/Shane Israel N Portfolio Showcase/);
      expect(loadingScreenContent).not.toMatch(/Henry Heffernan Portfolio Showcase/);
    });

    test('LoadingScreen should have Israel, Shane Inc. branding', () => {
      expect(loadingScreenContent).toMatch(/<b>Israel,<\/b>/);
      expect(loadingScreenContent).toMatch(/<b>Shane Inc\.<\/b>/);
      expect(loadingScreenContent).not.toMatch(/<b>Heffernan,<\/b>/);
      expect(loadingScreenContent).not.toMatch(/<b>Henry Inc\.<\/b>/);
    });

    /**
     * Property-based test: For any component that displays a name,
     * it should consistently use Shane Israel N
     */
    test('property: all name references use Shane Israel N', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(infoOverlayContent, loadingScreenContent),
          (componentContent) => {
            // If the component contains any name reference, it should be Shane's
            const hasNameReference = componentContent.includes('NAME_TEXT') || 
                                   componentContent.includes('Portfolio Showcase');
            
            if (hasNameReference) {
              const containsShane = componentContent.includes('Shane Israel N') || 
                                  componentContent.includes('Shane Inc.');
              const containsHenry = componentContent.includes('Henry Heffernan') || 
                                  componentContent.includes('Henry Inc.');
              
              expect(containsShane).toBe(true);
              expect(containsHenry).toBe(false);
              
              return containsShane && !containsHenry;
            }
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Branding Consistency Tests', () => {
    test('LoadingScreen should have consistent Shane branding throughout', () => {
      // Check for SIBIOS branding
      expect(loadingScreenContent).toMatch(/SIBIOS.*Israel Shane Inc/);
      expect(loadingScreenContent).not.toMatch(/HHBIOS.*Heffernan Henry Inc/);
      
      // Check for portfolio showcase name
      expect(loadingScreenContent).toMatch(/Shane Israel N Portfolio Showcase/);
      expect(loadingScreenContent).not.toMatch(/Henry Heffernan Portfolio Showcase/);
    });

    test('InfoOverlay should have complete professional title', () => {
      expect(infoOverlayContent).toMatch(/Software Engineer \| Machine Learning Engineer/);
      expect(infoOverlayContent).not.toMatch(/^Software Engineer$/m);
    });

    /**
     * Property-based test: For any branding text in components,
     * it should reference Shane's identity consistently
     */
    test('property: all branding references are consistent with Shane identity', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(
            'Portfolio Showcase',
            'Inc.',
            'BIOS',
            'Software Engineer'
          ),
          (brandingTerm) => {
            const infoOverlayMatches = infoOverlayContent.match(new RegExp(brandingTerm, 'g')) || [];
            const loadingScreenMatches = loadingScreenContent.match(new RegExp(brandingTerm, 'g')) || [];
            
            // For each branding term found, ensure it's associated with Shane's information
            const allMatches = [...infoOverlayMatches, ...loadingScreenMatches];
            
            if (allMatches.length > 0) {
              // Check context around branding terms
              if (brandingTerm === 'Portfolio Showcase') {
                expect(loadingScreenContent).toMatch(/Shane Israel N Portfolio Showcase/);
                expect(loadingScreenContent).not.toMatch(/Henry.*Portfolio Showcase/);
              }
              
              if (brandingTerm === 'Inc.') {
                expect(loadingScreenContent).toMatch(/Shane Inc\./);
                expect(loadingScreenContent).not.toMatch(/Henry Inc\./);
              }
              
              if (brandingTerm === 'Software Engineer') {
                expect(infoOverlayContent).toMatch(/Software Engineer \| Machine Learning Engineer/);
              }
              
              return true;
            }
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Contact Information Display Tests', () => {
    test('components should not contain old contact information', () => {
      const oldContactInfo = [
        'henryheffernan@gmail.com',
        'henryheffernan.com',
        '@henryheffernan'
      ];

      oldContactInfo.forEach(oldInfo => {
        expect(infoOverlayContent).not.toContain(oldInfo);
        expect(loadingScreenContent).not.toContain(oldInfo);
      });
    });

    test('components should be ready for Shane contact information integration', () => {
      // These components don't directly display contact info, but should not contain old info
      expect(infoOverlayContent).not.toMatch(/henry|heffernan/i);
      expect(loadingScreenContent).not.toMatch(/henry.*heffernan|heffernan.*henry/i);
    });

    /**
     * Property-based test: For any contact-related information,
     * it should not reference old contact details
     */
    test('property: no old contact information remains in UI components', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(
            'henry',
            'heffernan',
            'henryheffernan.com',
            'henryheffernan@gmail.com',
            '@henryheffernan'
          ),
          (oldContactInfo) => {
            const infoOverlayHasOldInfo = infoOverlayContent.toLowerCase().includes(oldContactInfo.toLowerCase());
            const loadingScreenHasOldInfo = loadingScreenContent.toLowerCase().includes(oldContactInfo.toLowerCase());
            
            expect(infoOverlayHasOldInfo).toBe(false);
            expect(loadingScreenHasOldInfo).toBe(false);
            
            return !infoOverlayHasOldInfo && !loadingScreenHasOldInfo;
          }
        ),
        { numRuns: 100 }
      );
    });
  });

  describe('Professional Identity Consistency', () => {
    /**
     * Property-based test: Shane's professional identity should be consistent
     * across all UI components that display professional information
     */
    test('property: professional identity consistency across components', () => {
      fc.assert(
        fc.property(
          fc.constantFrom(
            'Software Engineer',
            'Machine Learning Engineer',
            'Shane Israel N'
          ),
          (professionalTerm) => {
            if (professionalTerm === 'Shane Israel N') {
              // Name should appear in InfoOverlay
              expect(infoOverlayContent).toMatch(/Shane Israel N/);
              // Name should appear in LoadingScreen
              expect(loadingScreenContent).toMatch(/Shane Israel N/);
            }
            
            if (professionalTerm === 'Software Engineer') {
              // Should be part of the full title in InfoOverlay
              expect(infoOverlayContent).toMatch(/Software Engineer \| Machine Learning Engineer/);
            }
            
            if (professionalTerm === 'Machine Learning Engineer') {
              // Should be part of the full title in InfoOverlay
              expect(infoOverlayContent).toMatch(/Software Engineer \| Machine Learning Engineer/);
            }
            
            return true;
          }
        ),
        { numRuns: 100 }
      );
    });
  });
});