# Design Document

## Overview

This design document outlines the technical approach for customizing Henry Heffernan's 3D interactive portfolio website to transform it into Shane Israel N's personalized portfolio. The existing portfolio is a sophisticated Three.js-based application with React UI components, featuring a 3D office environment, interactive elements, and multimedia assets. The customization will maintain the technical architecture while systematically replacing personal information, visual assets, audio content, and external references.

The portfolio consists of several key layers:
- **3D Environment**: Three.js scene with interactive office objects
- **React UI Layer**: Loading screens, overlays, and interactive controls
- **Asset Management**: GLTF models, textures, audio files, and images
- **Server Layer**: Express.js server handling email functionality
- **Build System**: Webpack-based bundling with TypeScript support

## Architecture

### Current System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser Layer                            │
├─────────────────────────────────────────────────────────────┤
│  React UI Components                                        │
│  ├── LoadingScreen (BIOS-style boot sequence)              │
│  ├── InfoOverlay (Name, title, time display)              │
│  ├── HelpPrompt (User guidance)                            │
│  └── InterfaceUI (Interactive controls)                    │
├─────────────────────────────────────────────────────────────┤
│  Three.js 3D Environment                                   │
│  ├── Scene Management (Application.ts)                     │
│  ├── Camera Controls                                       │
│  ├── Resource Loading                                      │
│  └── Interactive Objects                                   │
├─────────────────────────────────────────────────────────────┤
│  Asset Pipeline                                            │
│  ├── 3D Models (GLTF)                                     │
│  ├── Textures (JPG/PNG)                                   │
│  ├── Audio Files (MP3)                                    │
│  └── Static Images                                        │
├─────────────────────────────────────────────────────────────┤
│  Express.js Server                                         │
│  ├── Static File Serving                                  │
│  ├── Email API Endpoint                                   │
│  └── CORS & Compression                                   │
└─────────────────────────────────────────────────────────────┘
```

### Customization Strategy

The customization will follow a **systematic replacement approach** rather than architectural changes:

1. **Content Layer Updates**: Replace hardcoded personal information in React components
2. **Asset Replacement**: Swap visual and audio assets while maintaining file structure
3. **Configuration Updates**: Update metadata, analytics, and external references
4. **Server Configuration**: Update email endpoints and domain references

## Components and Interfaces

### 1. React UI Components

#### InfoOverlay Component
**Current State**: Displays "Henry Heffernan" and "Software Engineer"
**Required Changes**:
- Update `NAME_TEXT` constant to "Shane Israel N"
- Update `TITLE_TEXT` constant to "Software Engineer | Machine Learning Engineer"
- Maintain typing animation functionality

#### LoadingScreen Component
**Current State**: BIOS-style loading with "Heffernan, Henry Inc." branding
**Required Changes**:
- Update company branding to "Israel, Shane Inc." or similar
- Update portfolio name from "Henry Heffernan Portfolio Showcase" to "Shane Israel N Portfolio Showcase"
- Maintain BIOS aesthetic and loading functionality

#### HelpPrompt Component
**Current State**: Generic help text
**Required Changes**: Minimal - component is generic enough to remain unchanged

### 2. HTML Metadata System

#### Meta Tag Updates
**Location**: `src/index.html`
**Required Changes**:
- Title: "Shane Israel N - Software Engineer | Machine Learning Engineer"
- Description: "Shane Israel N is a Software Engineer and Machine Learning Engineer from India, currently an undergraduate Computer Science student specializing in AI/ML, actively building projects and seeking internships and full-time roles"
- Open Graph URLs: Update to "ShaneIsrael.com"
- Twitter card information: Update with Shane's details
- Remove or update Google Analytics ID

### 3. Asset Management System

#### Visual Assets Replacement
**Favicon Set**: Replace all favicon files in `static/images/`
- `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`
- `android-chrome-192x192.png`, `android-chrome-512x512.png`
- `apple-touch-icon.png`

**Social Media Preview**: Replace `preview-new.jpg` with Shane's custom image

**3D Environment Assets**: Optional replacement of textures and models in `static/models/` and `static/textures/`

#### Audio Assets Replacement
**Location**: `static/audio/`
**Optional Replacements**:
- Background office ambience
- Keyboard typing sounds
- Mouse click sounds
- Startup audio
- Radio/music content

### 4. Server Configuration

#### Email API Updates
**Location**: `server/index.ts`
**Required Changes**:
- Update recipient email from "henryheffernan@gmail.com" to "shaneisrael2006@gmail.com"
- Update sender configuration
- Update environment variables for email credentials

#### Static File Serving
**Current State**: Serves from `public/` directory
**Required Changes**: No architectural changes needed

## Data Models

### Asset Resource Model
```typescript
interface Resource {
    name: string;           // Unique identifier for the asset
    type: 'gltfModel' | 'texture' | 'audio';  // Asset type
    path: string;           // Relative path from static directory
}
```

### UI Component Props
```typescript
interface InfoOverlayProps {
    visible: boolean;       // Controls overlay visibility
}

interface LoadingScreenProps {
    // No props - uses internal state management
}
```

### Email API Model
```typescript
interface EmailRequest {
    name: string;           // Sender name
    company?: string;       // Optional company
    email: string;          // Sender email
    message: string;        // Message content
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the prework analysis, I've identified several properties that can be automatically tested, while filtering out performance-related and subjective aesthetic requirements that are better handled through manual testing.

**Property 1: Name consistency across title elements**
*For any* title element in the portfolio system, it should display "Shane Israel N" when the portfolio loads
**Validates: Requirements 1.1**

**Property 2: Social media metadata consistency**
*For any* Open Graph or Twitter card meta tag, it should contain Shane's professional information and use the "ShaneIsrael.com" domain
**Validates: Requirements 1.3**

**Property 3: Contact information display**
*For any* UI component that displays contact information, it should show Shane's email "shaneisrael2006@gmail.com" and links to his GitHub, LinkedIn, and Instagram profiles
**Validates: Requirements 1.4**

**Property 4: Asset source consistency**
*For any* asset referenced in the sources configuration, it should point to files that exist and are appropriate for Shane's customized portfolio
**Validates: Requirements 2.3, 4.1, 4.3**

**Property 5: Interactive content relevance**
*For any* interactive element that displays content, it should show Shane's actual projects, repositories, or professional information
**Validates: Requirements 2.4, 4.2**

**Property 6: Branding consistency in UI components**
*For any* UI component that displays branding text, it should reference Shane Israel N and his professional identity as a Software Engineer and Machine Learning Engineer
**Validates: Requirements 2.5**

**Property 7: Audio system consistency**
*For any* audio interaction (keyboard, mouse, background), the system should play the audio files specified in Shane's customized asset configuration
**Validates: Requirements 3.1, 3.2, 3.3, 3.5**

**Property 8: External link accuracy**
*For any* external link in the portfolio, it should point to Shane's actual profiles and use the correct URLs for GitHub, LinkedIn, and Instagram
**Validates: Requirements 5.1, 5.4**

**Property 9: Domain reference consistency**
*For any* reference to a domain name in the system, it should use "ShaneIsrael.com" and not contain any references to "henryheffernan.com"
**Validates: Requirements 5.5**

**Property 10: Responsive UI behavior**
*For any* viewport size change, UI components should maintain proper layout and functionality without breaking
**Validates: Requirements 6.3**

## Error Handling

### Asset Loading Failures
- **3D Models**: Implement fallback loading with error logging if custom models fail to load
- **Textures**: Provide default textures if custom textures are unavailable
- **Audio Files**: Graceful degradation if audio assets are missing or fail to load
- **Images**: Fallback to default images for favicon and preview images

### Email Service Failures
- **SMTP Configuration**: Validate email credentials and provide clear error messages
- **Network Issues**: Implement retry logic for email sending
- **Validation**: Client-side and server-side validation for email form inputs

### Build Process Errors
- **Asset Validation**: Pre-build checks to ensure all referenced assets exist
- **TypeScript Compilation**: Clear error reporting for type issues
- **Webpack Bundling**: Proper error handling for asset bundling failures

### Runtime Errors
- **WebGL Support**: Graceful fallback for browsers without WebGL support
- **Mobile Compatibility**: Responsive design with mobile-specific optimizations
- **Loading States**: Proper loading indicators and error states for all async operations

## Testing Strategy

### Dual Testing Approach

The testing strategy combines unit testing and property-based testing to ensure comprehensive coverage:

**Unit Tests** verify specific examples, edge cases, and error conditions:
- Specific meta tag content validation
- Email API endpoint functionality
- Asset loading success/failure scenarios
- UI component rendering with specific props

**Property-Based Tests** verify universal properties across all inputs:
- Name consistency across all title elements
- Link accuracy for all external references
- Asset source validity for all referenced files
- Responsive behavior across viewport size ranges

### Property-Based Testing Framework

**Framework**: fast-check (JavaScript/TypeScript property-based testing library)
**Configuration**: Minimum 100 iterations per property test
**Tagging**: Each property-based test tagged with format: '**Feature: portfolio-customization, Property {number}: {property_text}**'

### Unit Testing Framework

**Framework**: Jest with React Testing Library
**Coverage**: Component rendering, API endpoints, asset loading, error handling
**Integration**: Tests for component interaction and data flow

### Testing Implementation Requirements

- Property-based tests must run minimum 100 iterations
- Each correctness property implemented by single property-based test
- Unit tests complement property tests for specific scenarios
- All tests tagged with requirement references
- Build process includes test validation before deployment

### Manual Testing Areas

The following areas require manual validation due to their subjective or performance-dependent nature:
- Visual aesthetic alignment with Shane's preferences
- 3D environment performance on various hardware
- Audio quality and appropriateness
- Overall user experience and interaction flow
- Cross-browser compatibility testing
- Mobile device testing on actual devices

## Implementation Phases

### Phase 1: Content and Metadata Updates
- Update React component constants and text
- Replace HTML meta tags and titles
- Update server email configuration
- Remove or update analytics tracking

### Phase 2: Asset Replacement
- Replace favicon set and preview images
- Update 3D models and textures (if provided)
- Replace audio files (if provided)
- Update asset source configurations

### Phase 3: External Reference Updates
- Update all external links and URLs
- Update domain references throughout codebase
- Update repository and social media links
- Validate all external connections

### Phase 4: Testing and Validation
- Implement property-based tests for correctness properties
- Create unit tests for specific functionality
- Perform manual testing for subjective elements
- Validate build process and deployment

### Phase 5: Performance and Polish
- Optimize new assets for web delivery
- Validate loading performance
- Cross-browser and mobile testing
- Final quality assurance and deployment preparation