# ShaneIsrael.com

This is the repository for Shane Israel N's 3D interactive portfolio website <a href="https://ShaneIsrael.com/"><samp>ShaneIsrael.com</samp></a>. This portfolio showcases Shane's work as a Software Engineer and Machine Learning Engineer, featuring a sophisticated Three.js-based 3D office environment with interactive elements.

Thanks for taking the time to check this out! If you have any questions or comments, feel free to reach out:

- 📧 Email: <samp><a href="mailto:shaneisrael2006@gmail.com">shaneisrael2006@gmail.com</a></samp>
- 💼 LinkedIn: <a href="https://www.linkedin.com/in/shane-israel/"><samp>linkedin.com/in/shane-israel</samp></a>
- 🐙 GitHub: <a href="https://github.com/shaneisraeln"><samp>github.com/shaneisraeln</samp></a>
- 📸 Instagram: <a href="https://www.instagram.com/_shane__israel_lh44_/"><samp>@_shane__israel_lh44_</samp></a>

## About Shane

Shane Israel N is a Software Engineer and Machine Learning Engineer from India, currently an undergraduate Computer Science student with a strong focus on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, and real-world software systems. He is actively building projects, participating in hackathons, and seeking internships and full-time software engineering roles.

## Development Setup

### Quick Start (Development Mode)

**Terminal 1 - Start the OS:**
```bash
cd portfolio-temp-website/os
npm install
npm run dev
```

**Terminal 2 - Start the Portfolio:**
```bash
cd portfolio-temp-website
npm install
npm run dev
```

**Open Browser:**
Navigate to `http://localhost:8080/?dev`

The `?dev` parameter loads the OS from the local dev server for hot-reload during development.

### Full Setup

```bash
# Clone the repository
git clone https://github.com/shaneisraeln/portfolio-website.git
cd portfolio-website/portfolio-temp-website

# Install portfolio dependencies 
npm install

# Install OS dependencies
cd os
npm install
cd ..

# Run the local dev server
npm run dev

# In another terminal, run the OS dev server
npm run dev:os

# Open http://localhost:8080/?dev in your browser
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test:watch
```

## Production Deployment

### Quick Deploy Options

**Vercel (Recommended):**
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables: `FOLIO_EMAIL`, `FOLIO_PASSWORD`
4. Deploy automatically

**Netlify:**
1. Push code to GitHub  
2. Connect repository to Netlify
3. Set environment variables: `FOLIO_EMAIL`, `FOLIO_PASSWORD`
4. Deploy automatically

**Manual Deployment:**
```bash
# Install dependencies if not already done
npm install

# Build for production (includes OS build)
npm run build

# Serve the build using express
npm start
```

The build process will:
1. Build the custom OS (ShaneOS)
2. Build the main portfolio
3. Copy the OS to the portfolio's public folder

### Email Configuration

For the contact form to work, set up Gmail App Password:
1. Enable 2-Step Verification in Google Account
2. Generate App Password: Google Account > Security > 2-Step Verification > App passwords
3. Set environment variables:
   - `FOLIO_EMAIL`: Your Gmail address
   - `FOLIO_PASSWORD`: Your 16-character App Password

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## Features

- 🎮 **Interactive 3D Environment**: Explore a detailed 3D office space built with Three.js
- 💻 **Custom OS Interface**: ShaneOS - A retro-styled operating system with draggable windows
- 📁 **Interactive Desktop**: About, Projects, Skills, Contact sections in window format
- 🖥️ **Functional Terminal**: Command-line interface with custom commands
- ⚡ **Modern Tech Stack**: React, TypeScript, Three.js, Vite, and Express.js
- 📱 **Responsive Design**: Optimized for desktop and mobile devices
- 🎵 **Immersive Audio**: Dynamic sound effects and ambient audio
- 🧪 **Comprehensive Testing**: Property-based testing with Jest and fast-check
- 🚀 **Performance Optimized**: Webpack bundling with production optimizations
- 🎨 **Dark Theme**: Matrix-inspired green-on-black aesthetic

## Project Structure

```
├── os/                        # Custom ShaneOS application
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── windows/     # Window content (About, Projects, etc.)
│   │   │   ├── BootScreen.tsx
│   │   │   ├── Desktop.tsx
│   │   │   ├── Taskbar.tsx
│   │   │   └── Window.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json          # OS dependencies
├── src/
│   ├── Application/          # Three.js application core
│   │   ├── UI/              # React UI components
│   │   ├── World/           # 3D scene management
│   │   │   └── MonitorScreen.ts  # Loads OS in monitor
│   │   ├── Camera/          # Camera controls
│   │   └── Utils/           # Utility classes
│   ├── __tests__/           # Test files
│   └── index.html           # Main HTML file
├── static/                  # Static assets
│   ├── models/             # 3D models
│   ├── textures/           # Textures and images
│   ├── audio/              # Sound effects and music
│   └── images/             # Icons and preview images
├── server/                 # Express.js server
└── bundler/               # Webpack configuration
```

## Contributing

This is Shane's personal portfolio, but if you find any bugs or have suggestions, feel free to open an issue or reach out directly!

## Customizing ShaneOS

The custom operating system can be fully customized to showcase your projects and personality:

### Content Updates
- **About**: Edit `os/src/components/windows/AboutContent.tsx`
- **Projects**: Edit `os/src/components/windows/ProjectsContent.tsx` 
- **Skills**: Edit `os/src/components/windows/SkillsContent.tsx`
- **Contact**: Edit `os/src/components/windows/ContactContent.tsx`
- **Terminal**: Edit `os/src/components/windows/TerminalContent.tsx`

### Styling
- **Theme Colors**: Edit `os/src/index.css`
- **Component Styles**: Each component has its own `.css` file

For detailed customization instructions, see [OS_SETUP.md](./OS_SETUP.md)

## License

This project is for portfolio purposes. Please respect the creative work and don't use it as your own portfolio.
