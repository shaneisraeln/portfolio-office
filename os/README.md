# ShaneOS - Custom Portfolio Operating System

A retro-styled, terminal-inspired operating system interface for Shane Israel's portfolio. Built with React, TypeScript, and Vite.

## Features

- 🖥️ **Retro OS Interface**: Classic desktop with draggable windows
- 💻 **Interactive Terminal**: Functional command-line interface
- 📁 **Desktop Icons**: About, Projects, Skills, Contact, Terminal
- 🎨 **Dark Theme**: Matrix-inspired green-on-black aesthetic
- ⚡ **Fast & Responsive**: Built with Vite for optimal performance

## Development

```bash
# Install dependencies
npm install

# Run dev server (localhost:3000)
npm run dev

# Build for production
npm run build
```

## Integration with Portfolio

The OS is embedded in the 3D portfolio's monitor screen via iframe.

### Development Mode
Add `?dev` query parameter to the portfolio URL to use the local dev server:
```
http://localhost:8080/?dev
```

### Production Mode
The built OS is copied to the portfolio's public folder as `/os-dist/` during the portfolio build process.

## Customization

### Adding New Windows
1. Create a new content component in `src/components/windows/`
2. Add the window type to `Desktop.tsx`
3. Add a desktop icon with the appropriate handler

### Modifying Terminal Commands
Edit the `commands` object in `src/components/windows/TerminalContent.tsx`

### Styling
- Global styles: `src/index.css`
- Component styles: Individual `.css` files next to components
- Theme colors: Primarily `#00ff00` (matrix green) and `#0a0a0a` (dark background)

## Project Structure

```
os/
├── src/
│   ├── components/
│   │   ├── windows/          # Window content components
│   │   ├── BootScreen.tsx    # Boot animation
│   │   ├── Desktop.tsx       # Desktop with icons
│   │   ├── DesktopIcon.tsx   # Individual desktop icons
│   │   ├── Taskbar.tsx       # Bottom taskbar
│   │   └── Window.tsx        # Draggable window component
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── tsconfig.json             # TypeScript config
└── vite.config.ts            # Vite config
```

## Technologies

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **react-draggable**: Draggable windows
- **CSS3**: Styling and animations
