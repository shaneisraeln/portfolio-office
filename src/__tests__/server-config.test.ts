/**
 * **Feature: portfolio-customization, Email API Configuration Tests**
 * **Validates: Requirements 5.3**
 * 
 * Unit tests for server email configuration
 */

import * as fs from 'fs';
import * as path from 'path';

describe('Server Email Configuration Tests', () => {
  let serverContent: string;

  beforeAll(() => {
    // Read the server configuration file
    const serverPath = path.join(__dirname, '../../server/index.ts');
    serverContent = fs.readFileSync(serverPath, 'utf-8');
  });

  test('should send emails to Shane email address', () => {
    expect(serverContent).toMatch(/to: ['"]shaneisrael2006@gmail\.com/);
    expect(serverContent).not.toMatch(/to: ['"]henryheffernan@gmail\.com/);
  });

  test('should use Shane folio email as sender', () => {
    expect(serverContent).toMatch(/from: .*shaneisrael\.folio@gmail\.com/);
    expect(serverContent).not.toMatch(/from: .*henryheffernan\.folio@gmail\.com/);
  });

  test('should have proper email recipient configuration', () => {
    // Should include both Shane's main email and folio email
    expect(serverContent).toMatch(/shaneisrael2006@gmail\.com.*shaneisrael\.folio@gmail\.com/);
    
    // Should not contain old email addresses
    expect(serverContent).not.toMatch(/henryheffernan@gmail\.com/);
    expect(serverContent).not.toMatch(/henryheffernan\.folio@gmail\.com/);
  });

  test('should have environment variable configuration comments', () => {
    // Should have comments about updating environment variables
    expect(serverContent).toMatch(/Update these environment variables/);
    expect(serverContent).toMatch(/FOLIO_EMAIL should be set to Shane/);
    expect(serverContent).toMatch(/FOLIO_PASSWORD should be set to Shane/);
  });

  test('should maintain proper email API structure', () => {
    // Should have the email API endpoint
    expect(serverContent).toMatch(/app\.post\(['"]\/api\/send-email['"],/);
    
    // Should have proper email fields
    expect(serverContent).toMatch(/const \{ name, company, email, message \}/);
    
    // Should have proper nodemailer configuration
    expect(serverContent).toMatch(/nodemailer\.createTransport/);
    expect(serverContent).toMatch(/host: ['"]smtp\.gmail\.com['"],/);
    expect(serverContent).toMatch(/port: 587/);
  });

  test('should have proper error handling', () => {
    // Should have error handling for transporter verification
    expect(serverContent).toMatch(/\.catch\(\(e\) => \{/);
    expect(serverContent).toMatch(/console\.error\(e\)/);
    expect(serverContent).toMatch(/res\.status\(500\)\.send\(e\)/);
  });

  test('should have proper success response', () => {
    // Should return success message
    expect(serverContent).toMatch(/res\.json\(\{ message: ['"]success['"] \}\)/);
  });

  test('should not contain any Henry-related email addresses', () => {
    const henryEmailPatterns = [
      /henryheffernan@gmail\.com/g,
      /henryheffernan\.folio@gmail\.com/g,
      /henry.*@.*\.com/gi
    ];

    henryEmailPatterns.forEach(pattern => {
      expect(serverContent).not.toMatch(pattern);
    });
  });

  test('should have proper email subject format', () => {
    // Should have proper subject line format
    expect(serverContent).toMatch(/subject: `\$\{name\} <\$\{email\}>/);
    expect(serverContent).toMatch(/submitted a contact form`/);
  });

  test('should have proper email body format', () => {
    // Should use message as email body
    expect(serverContent).toMatch(/text: `\$\{message\}`/);
  });
});