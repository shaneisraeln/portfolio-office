# Shane's Portfolio - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Set environment variables in Vercel dashboard:
   - `FOLIO_EMAIL`: Your Gmail address
   - `FOLIO_PASSWORD`: Your Gmail App Password
4. Deploy automatically

### Option 2: Netlify
1. Push your code to GitHub
2. Connect your GitHub repo to Netlify
3. Set environment variables in Netlify dashboard:
   - `FOLIO_EMAIL`: Your Gmail address
   - `FOLIO_PASSWORD`: Your Gmail App Password
4. Deploy automatically

### Option 3: Manual Server Deployment
1. Clone the repository
2. Copy `.env.example` to `.env` and fill in your credentials
3. Run `npm install`
4. Run `npm run build`
5. Run `npm start`

## 📧 Email Configuration (Optional)

The contact form requires Gmail credentials:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Google Account > Security > 2-Step Verification > App passwords
   - Select "Mail" and generate password
4. Use this App Password (not your regular Gmail password)

## 🔧 Environment Variables

```bash
FOLIO_EMAIL=your-email@gmail.com
FOLIO_PASSWORD=your-16-character-app-password
PORT=8080
NODE_ENV=production
```

## 🏗️ Build Process

The build process includes:
1. Building the custom OS (`npm run build:os`)
2. Building the main 3D portfolio (`webpack --config ./bundler/webpack.prod.js`)
3. Copying OS build to public directory (`npm run copy:os`)

## 🌐 Platform-Specific Notes

### Vercel
- Uses serverless functions
- Automatic builds on push
- Built-in CDN and SSL

### Netlify
- Uses Netlify Functions
- Automatic builds on push
- Built-in CDN and SSL

### Traditional Hosting
- Requires Node.js server
- Manual SSL setup needed
- Manual domain configuration

## 🔍 Troubleshooting

### Build Issues
- Ensure Node.js >= 16.0.0
- Clear `node_modules` and reinstall if needed
- Check that all dependencies are installed

### Contact Form Issues
- Verify Gmail App Password is correct
- Check environment variables are set
- Ensure Gmail account has 2FA enabled

### OS Loading Issues
- Verify OS build completed successfully
- Check that `public/os-dist` directory exists
- Ensure server is serving static files correctly