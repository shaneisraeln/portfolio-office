# ShaneOS Setup Guide

This guide will help you set up and run the custom operating system interface for your portfolio.

## Quick Start

### Option 1: Development Mode (Recommended for testing)

1. **Install portfolio dependencies:**
   ```bash
   cd portfolio-temp-website
   npm install
   ```

2. **Install OS dependencies:**
   ```bash
   cd os
   npm install
   cd ..
   ```

3. **Run the OS dev server (in one terminal):**
   ```bash
   npm run dev:os
   ```
   This starts the OS on `http://localhost:3000`

4. **Run the portfolio dev server (in another terminal):**
   ```bash
   npm run dev
   ```
   This starts the portfolio on `http://localhost:8080`

5. **View with OS integration:**
   Open `http://localhost:8080/?dev` in your browser
   
   The `?dev` parameter tells the portfolio to load the OS from localhost:3000

### Option 2: Production Build

1. **Build everything:**
   ```bash
   cd portfolio-temp-website
   npm install
   npm run build
   ```
   
   This will:
   - Install OS dependencies
   - Build the OS
   - Build the portfolio
   - Copy the OS build to the portfolio's public folder

2. **Serve the production build:**
   ```bash
   npm start
   ```
   
   Open `http://localhost:8080` (no query parameter needed)

## Project Structure

```
portfolio-temp-website/
├── os/                          # Custom OS application
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── windows/         # Window content (About, Projects, etc.)
│   │   │   ├── BootScreen.tsx   # Boot animation
│   │   │   ├── Desktop.tsx      # Desktop with icons
│   │   │   ├── Taskbar.tsx      # Bottom taskbar
│   │   │   └── Window.tsx       # Draggable windows
│   │   ├── App.tsx              # Main app
│   │   └── main.tsx             # Entry point
│   ├── package.json             # OS dependencies
│   └── vite.config.ts           # Vite configuration
├── src/
│   └── Application/
│       └── World/
│           └── MonitorScreen.ts # Loads OS in iframe
└── package.json                 # Portfolio dependencies
```

## Customizing Your OS

### Update Your Information

Edit these files to personalize your OS:

1. **About Section** - `os/src/components/windows/AboutContent.tsx`
   - Update your bio, interests, and background

2. **Projects Section** - `os/src/components/windows/ProjectsContent.tsx`
   - Add your hackathon projects and websites
   - Update project descriptions and tech stacks

3. **Skills Section** - `os/src/components/windows/SkillsContent.tsx`
   - List your programming languages and technologies
   - Add new skill categories

4. **Contact Section** - `os/src/components/windows/ContactContent.tsx`
   - Already has your contact info from the README
   - Update social media links if needed

5. **Terminal Commands** - `os/src/components/windows/TerminalContent.tsx`
   - Add custom terminal commands
   - Modify command outputs

### Styling

- **Colors**: Edit `os/src/index.css` to change the color scheme
- **Component styles**: Each component has its own `.css` file
- **Current theme**: Matrix-inspired green (#00ff00) on black (#0a0a0a)

### Adding New Windows

1. Create a new content component in `os/src/components/windows/`
2. Import it in `os/src/components/Window.tsx`
3. Add a case in the `renderContent()` function
4. Add a desktop icon in `os/src/components/Desktop.tsx`

Example:
```tsx
// In Desktop.tsx
<DesktopIcon
  icon="🎮"
  label="Games"
  onDoubleClick={() => openWindow('Games', 'games')}
/>

// In Window.tsx
case 'games':
  return <GamesContent />;
```

## Troubleshooting

### OS not loading in the monitor

1. **Development mode**: Make sure the OS dev server is running on port 3000
   ```bash
   cd os
   npm run dev
   ```

2. **Check the URL**: Use `?dev` parameter: `http://localhost:8080/?dev`

3. **Production mode**: Ensure the OS was built and copied:
   ```bash
   npm run build
   ```

### Port conflicts

If port 3000 or 8080 is already in use:

- **OS port**: Edit `os/vite.config.ts` and change the port
- **Portfolio port**: Edit `bundler/webpack.dev.js` and change the port

### Styling issues

- Clear browser cache
- Check browser console for errors
- Ensure all CSS files are imported correctly

## Available Scripts

### Portfolio Scripts
- `npm run dev` - Start portfolio dev server
- `npm run build` - Build everything for production
- `npm start` - Serve production build
- `npm test` - Run tests

### OS Scripts (run from `os/` directory)
- `npm run dev` - Start OS dev server
- `npm run build` - Build OS for production
- `npm run preview` - Preview production build

### Combined Scripts (run from portfolio root)
- `npm run dev:os` - Start OS dev server
- `npm run build:os` - Build OS only
- `npm run copy:os` - Copy OS build to portfolio

## Tips

1. **Development workflow**: Keep both dev servers running in separate terminals for hot reload
2. **Testing**: Use `?dev` parameter to test OS changes without rebuilding
3. **Production testing**: Build and serve locally before deploying
4. **Customization**: Start with content updates, then move to styling
5. **Performance**: The OS is lightweight and loads quickly in the iframe

## Next Steps

1. ✅ OS is set up and integrated
2. 📝 Update content with your projects and information
3. 🎨 Customize colors and styling to match your brand
4. 🚀 Build and deploy your portfolio

Need help? Check the README files in both the portfolio root and the `os/` directory.
