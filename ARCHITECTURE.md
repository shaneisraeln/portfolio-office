# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser Window                            │
│  ┌───────────────────────────────────────────────────────┐  │
│  │           3D Portfolio (Three.js + React)             │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────┐    │  │
│  │  │         3D Office Environment               │    │  │
│  │  │                                             │    │  │
│  │  │  ┌───────────────────────────────────┐    │    │  │
│  │  │  │      Monitor Screen (iframe)      │    │    │  │
│  │  │  │                                   │    │    │  │
│  │  │  │  ┌─────────────────────────┐    │    │    │  │
│  │  │  │  │      ShaneOS            │    │    │    │  │
│  │  │  │  │  (React + TypeScript)   │    │    │    │  │
│  │  │  │  │                         │    │    │    │  │
│  │  │  │  │  • Boot Screen          │    │    │    │  │
│  │  │  │  │  • Desktop              │    │    │    │  │
│  │  │  │  │  • Windows              │    │    │    │  │
│  │  │  │  │  • Terminal             │    │    │    │  │
│  │  │  │  │  • Taskbar              │    │    │    │  │
│  │  │  │  └─────────────────────────┘    │    │    │  │
│  │  │  └───────────────────────────────────┘    │    │  │
│  │  └─────────────────────────────────────────────┘    │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App (Portfolio)
├── LoadingScreen
│   └── SIBIOS Boot Sequence
├── Desktop (3D)
│   ├── World
│   │   ├── Office Environment
│   │   ├── Computer Model
│   │   └── MonitorScreen
│   │       └── iframe → ShaneOS
│   ├── Camera Controls
│   └── Audio System
└── UI Overlay
    ├── InfoOverlay (Name, Title, Time)
    ├── FreeCamToggle
    └── MuteToggle

ShaneOS (Inside iframe)
├── BootScreen
│   └── Boot Animation
└── Desktop
    ├── DesktopIcons
    │   ├── About Me
    │   ├── Projects
    │   ├── Skills
    │   ├── Contact
    │   └── Terminal
    ├── Windows (Draggable)
    │   ├── AboutContent
    │   ├── ProjectsContent
    │   ├── SkillsContent
    │   ├── ContactContent
    │   └── TerminalContent
    └── Taskbar
        ├── Start Button
        ├── System Info
        └── Clock
```

## Data Flow

```
User Interaction
      ↓
3D Portfolio (Three.js)
      ↓
Monitor Click Detection
      ↓
Camera Zoom to Monitor
      ↓
iframe Loads ShaneOS
      ↓
ShaneOS Boot Sequence
      ↓
Desktop Appears
      ↓
User Clicks Icon
      ↓
Window Opens
      ↓
Content Displayed
```

## Build Process

```
Development Mode:
┌──────────────┐         ┌──────────────┐
│   OS Dev     │         │ Portfolio    │
│   Server     │ ←─────→ │ Dev Server   │
│ (Port 3000)  │  iframe │ (Port 8080)  │
└──────────────┘         └──────────────┘
       ↓                        ↓
   Hot Reload              Hot Reload

Production Mode:
┌──────────────┐
│  npm run     │
│   build      │
└──────┬───────┘
       ↓
┌──────────────┐
│  Build OS    │
│  (Vite)      │
└──────┬───────┘
       ↓
┌──────────────┐
│ Build        │
│ Portfolio    │
│ (Webpack)    │
└──────┬───────┘
       ↓
┌──────────────┐
│  Copy OS     │
│  to public/  │
│  os-dist/    │
└──────┬───────┘
       ↓
┌──────────────┐
│  Production  │
│  Bundle      │
└──────────────┘
```

## File Structure

```
portfolio-temp-website/
│
├── os/                              # ShaneOS Application
│   ├── src/
│   │   ├── components/
│   │   │   ├── windows/            # Window Content
│   │   │   │   ├── AboutContent.tsx
│   │   │   │   ├── ProjectsContent.tsx
│   │   │   │   ├── SkillsContent.tsx
│   │   │   │   ├── ContactContent.tsx
│   │   │   │   ├── TerminalContent.tsx
│   │   │   │   └── WindowContent.css
│   │   │   ├── BootScreen.tsx      # Boot Animation
│   │   │   ├── Desktop.tsx         # Desktop Manager
│   │   │   ├── DesktopIcon.tsx     # Icon Component
│   │   │   ├── Window.tsx          # Window Component
│   │   │   └── Taskbar.tsx         # Bottom Bar
│   │   ├── App.tsx                 # Main App
│   │   ├── main.tsx                # Entry Point
│   │   └── index.css               # Global Styles
│   ├── package.json                # OS Dependencies
│   └── vite.config.ts              # Vite Config
│
├── src/                             # Portfolio Source
│   ├── Application/
│   │   ├── UI/                     # React UI
│   │   │   └── components/
│   │   │       ├── InfoOverlay.tsx
│   │   │       └── LoadingScreen.tsx
│   │   ├── World/                  # 3D World
│   │   │   ├── MonitorScreen.ts   # OS Integration
│   │   │   ├── Computer.ts
│   │   │   └── Environment.ts
│   │   ├── Camera/                 # Camera System
│   │   └── Utils/                  # Utilities
│   ├── script.ts                   # Entry Point
│   └── index.html                  # HTML Template
│
├── static/                          # Static Assets
│   ├── models/                     # 3D Models
│   ├── textures/                   # Textures
│   ├── audio/                      # Sounds
│   └── images/                     # Images
│
├── bundler/                         # Webpack Config
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
│
├── server/                          # Express Server
│   └── index.ts
│
└── public/                          # Build Output
    └── os-dist/                    # Built OS
```

## Technology Stack

### Portfolio (Main App)
- **Framework**: Three.js (3D), React (UI)
- **Language**: TypeScript
- **Build Tool**: Webpack
- **Styling**: CSS3
- **Server**: Express.js
- **Testing**: Jest

### ShaneOS (Embedded App)
- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3
- **Dragging**: react-draggable
- **Communication**: PostMessage API

## Communication Flow

```
Portfolio ←→ ShaneOS
    ↓           ↓
PostMessage API
    ↓           ↓
Mouse Events
Keyboard Events
    ↓           ↓
Camera Control
Window Interaction
```

## Development Workflow

```
1. Edit Content
   ↓
2. Save File
   ↓
3. Hot Reload (Dev Server)
   ↓
4. See Changes Instantly
   ↓
5. Test in Browser
   ↓
6. Repeat
```

## Production Deployment

```
1. Update Content
   ↓
2. npm run build
   ↓
3. Test Locally (npm start)
   ↓
4. Deploy to Hosting
   ↓
5. Verify Production
   ↓
6. Share Portfolio!
```

## Performance Optimization

### Portfolio
- Webpack code splitting
- Asset optimization
- Lazy loading
- Texture compression

### ShaneOS
- Vite tree shaking
- CSS minification
- Component lazy loading
- Optimized bundle size (~176KB)

## Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Mobile (Limited 3D performance)

## Security Considerations

- iframe sandbox attributes
- PostMessage origin validation
- No sensitive data in client
- Environment variables for secrets

## Scalability

### Adding New Windows
1. Create content component
2. Add to Window.tsx switch
3. Add desktop icon
4. Done!

### Adding New Commands
1. Edit TerminalContent.tsx
2. Add to commands object
3. Done!

### Changing Theme
1. Edit index.css
2. Update color variables
3. Done!

---

This architecture provides:
- ✅ Separation of concerns
- ✅ Easy maintenance
- ✅ Scalable structure
- ✅ Fast development
- ✅ Optimized production
