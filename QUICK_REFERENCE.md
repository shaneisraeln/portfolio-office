# Quick Reference Card

## 🚀 Start Development

```bash
# Terminal 1
cd portfolio-temp-website/os
npm run dev

# Terminal 2  
cd portfolio-temp-website
npm run dev

# Browser
http://localhost:8080/?dev
```

## 📝 Edit Content

| What | File |
|------|------|
| Projects | `os/src/components/windows/ProjectsContent.tsx` |
| About | `os/src/components/windows/AboutContent.tsx` |
| Skills | `os/src/components/windows/SkillsContent.tsx` |
| Contact | `os/src/components/windows/ContactContent.tsx` |
| Terminal | `os/src/components/windows/TerminalContent.tsx` |

## 🎨 Change Styling

| What | File |
|------|------|
| Theme Colors | `os/src/index.css` |
| Window Styles | `os/src/components/windows/WindowContent.css` |
| Boot Screen | `os/src/components/BootScreen.css` |
| Desktop | `os/src/components/Desktop.css` |

## 🔧 Build Commands

```bash
npm run dev        # Dev server (portfolio)
npm run dev:os     # Dev server (OS)
npm run build      # Production build (both)
npm start          # Serve production
npm test           # Run tests
```

## 💻 Terminal Commands

```
help      - Show all commands
about     - Your bio
skills    - Technical skills
projects  - Your projects
contact   - Contact info
whoami    - Current user
date      - Current date/time
clear     - Clear terminal
```

## 📂 Key Directories

```
portfolio-temp-website/
├── os/                    # Custom OS
│   └── src/components/    # React components
├── src/                   # Portfolio source
├── static/                # Assets
└── bundler/               # Webpack config
```

## 🎯 Priority Tasks

1. ✅ Update projects in `ProjectsContent.tsx`
2. ✅ Test both dev servers
3. ✅ Build for production
4. ✅ Deploy

## 📚 Documentation

- `SUMMARY.md` - Overview
- `CHECKLIST.md` - Progress tracker
- `OS_SETUP.md` - Detailed guide
- `start-dev.md` - Quick start

## 🐛 Common Issues

**OS not loading?**
- Check both servers running
- Use `?dev` in URL
- Check console for errors

**Port conflict?**
- OS: Edit `os/vite.config.ts`
- Portfolio: Edit `bundler/webpack.dev.js`

**Build fails?**
- Run `npm install` in both folders
- Check Node.js version (14+)

## 🎨 Quick Customizations

**Change color from green to cyan:**
```css
/* os/src/index.css */
color: #00ffff;
```

**Add terminal command:**
```tsx
// os/src/components/windows/TerminalContent.tsx
joke: () => ['Your joke here'],
```

**Add project:**
```tsx
// os/src/components/windows/ProjectsContent.tsx
{
  name: 'Project Name',
  description: 'Description',
  tech: 'Tech stack',
  status: 'Live',
}
```

---

**Need more help?** Check the full documentation files!
