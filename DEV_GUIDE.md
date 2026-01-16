# Development Guide - Quick Fix for "Cannot GET /os-dist/index.html"

## The Issue

You're seeing "Cannot GET /os-dist/index.html" because the portfolio is looking for the built OS, but you haven't built it yet OR you're not using the dev mode correctly.

## ✅ Solution 1: Development Mode (RECOMMENDED)

This is the best way to develop because you get hot-reload for both the portfolio and the OS.

### Step 1: Start OS Dev Server

Open **Terminal 1**:
```bash
cd portfolio-temp-website/os
npm run dev
```

You should see:
```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:3000/
```

### Step 2: Start Portfolio Dev Server

Open **Terminal 2**:
```bash
cd portfolio-temp-website
npm run dev
```

You should see:
```
webpack 5.x.x compiled successfully
```

### Step 3: Open Browser with ?dev Parameter

**IMPORTANT:** You MUST add `?dev` to the URL!

✅ Correct: `http://localhost:8080/?dev`
❌ Wrong: `http://localhost:8080`

The `?dev` parameter tells the portfolio to load the OS from `localhost:3000` instead of `/os-dist/`.

---

## ✅ Solution 2: Production Build

If you want to test the production build (no hot-reload):

### Step 1: Build Everything

```bash
cd portfolio-temp-website
npm run build
```

This will:
1. Build the OS
2. Build the portfolio
3. Copy the OS to `public/os-dist/`

### Step 2: Start Production Server

```bash
npm start
```

### Step 3: Open Browser (No ?dev needed)

Open: `http://localhost:8080`

---

## 🔍 Troubleshooting

### "Cannot GET /os-dist/index.html"

**Cause:** You're accessing `http://localhost:8080` without `?dev` and haven't built the production version.

**Fix:** Either:
- Add `?dev` to URL: `http://localhost:8080/?dev` (and make sure OS dev server is running)
- OR build production: `npm run build` then `npm start`

### OS dev server not starting

**Check:**
```bash
cd portfolio-temp-website/os
npm install
npm run dev
```

### Port 3000 already in use

**Fix:** Edit `os/vite.config.ts` and change the port:
```typescript
server: {
  port: 3001, // Change to any available port
},
```

Then update the URL to use the new port.

### Port 8080 already in use

**Fix:** Edit `bundler/webpack.dev.js` and change the port.

---

## 📝 Quick Reference

| Mode | Command | URL | Hot Reload |
|------|---------|-----|------------|
| Development | `npm run dev` (both terminals) | `http://localhost:8080/?dev` | ✅ Yes |
| Production | `npm run build` then `npm start` | `http://localhost:8080` | ❌ No |

---

## 🎯 Recommended Workflow

1. **Daily Development:**
   - Use dev mode with `?dev` parameter
   - Keep both terminals running
   - Edit files and see changes instantly

2. **Testing Production:**
   - Run `npm run build`
   - Run `npm start`
   - Test without `?dev` parameter

3. **Before Deployment:**
   - Run `npm run build`
   - Test with `npm start`
   - Verify everything works
   - Deploy the `public/` folder

---

## ✨ Current Status

Your OS is built and ready! You can now:

1. **For Development:**
   ```bash
   # Terminal 1
   cd portfolio-temp-website/os && npm run dev
   
   # Terminal 2
   cd portfolio-temp-website && npm run dev
   
   # Browser
   http://localhost:8080/?dev
   ```

2. **For Production Testing:**
   ```bash
   # Already built! Just start the server
   cd portfolio-temp-website
   npm start
   
   # Browser
   http://localhost:8080
   ```

---

**Remember:** Always use `?dev` when using dev servers!
