# Portfolio Setup Guide

This guide will help you get your portfolio website up and running.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.x or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager (comes with Node.js)
- A code editor (VS Code recommended)
- Git (optional, for version control)

## 🚀 Quick Start

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:

- React & React DOM
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- ESLint

### 2. Add Your Resume

1. Place your actual resume PDF file in the `public/` directory
2. Name it `resume.pdf` or update the filename in `src/data/content.json`

```json
{
  "personal": {
    "resumeUrl": "/your-resume-filename.pdf"
  }
}
```

### 3. Customize Content

Edit `src/data/content.json` to update:

#### Personal Information

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your tagline...",
    "email": "your.email@example.com",
    "phone": "+1234567890",
    "location": "Your City, Country",
    "social": {
      "github": "https://github.com/yourusername",
      "linkedin": "https://linkedin.com/in/yourusername",
      "email": "mailto:your.email@example.com"
    },
    "resumeUrl": "/resume.pdf"
  }
}
```

#### Enable/Disable Sections

Toggle sections on or off by changing `enabled` to `true` or `false`:

```json
{
  "sections": {
    "hero": { "enabled": true },
    "about": { "enabled": true },
    "experience": { "enabled": true },
    "projects": { "enabled": true },
    "skills": { "enabled": true },
    "blog": { "enabled": true },
    "featured": { "enabled": true },
    "contact": { "enabled": true }
  }
}
```

#### Blog Configuration

Update your blog details:

```json
{
  "blog": {
    "externalBlogUrl": "https://your-blog-url.com/",
    "rssUrl": "https://your-blog-url.com/rss.xml"
  }
}
```

**Note**: Make sure your blog has a valid RSS feed. The application uses the RSS2JSON API to fetch posts.

### 4. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

The dev server features:

- ⚡ Hot Module Replacement (HMR)
- 🔄 Automatic page reload on changes
- 🐛 Error overlay for quick debugging

### 5. Make it Your Own

#### Update Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3B82F6',  // Change this
        dark: '#60A5FA',   // And this
      },
    },
  },
}
```

#### Add Your Projects

In `content.json`, update the projects array:

```json
{
  "projects": [
    {
      "id": "1",
      "title": "Your Project Name",
      "description": "Short description",
      "longDescription": "Detailed description with achievements",
      "technologies": ["React", "Node.js", "etc"],
      "image": "",
      "demoUrl": "https://demo-link.com",
      "githubUrl": "https://github.com/user/repo"
    }
  ]
}
```

#### Update Experience

Add or modify your work experience:

```json
{
  "experience": [
    {
      "id": "1",
      "company": "Company Name",
      "position": "Your Position",
      "location": "City, Country",
      "startDate": "Jan 2020",
      "endDate": "Present",
      "description": "Brief description",
      "achievements": ["Achievement 1", "Achievement 2"]
    }
  ]
}
```

## 🎨 Customization

### Adding Profile Picture

1. Add your image to `public/` directory (e.g., `avatar.jpg`)
2. Update `content.json`:

```json
{
  "personal": {
    "avatar": "/avatar.jpg"
  }
}
```

3. Update `Hero.tsx` to display the image (optional customization)

### Modifying Animations

Edit `src/utils/animations.ts` to adjust animation timings and effects:

```typescript
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5, // Adjust timing here
      ease: 'easeOut',
    },
  },
};
```

### Adding New Sections

1. Create a new component in `src/sections/YourSection.tsx`
2. Add the section config in `content.json`
3. Import and use in `src/App.tsx`

## 🔧 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

## 📦 Building for Production

### 1. Build the Project

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 2. Test Production Build Locally

```bash
npm run preview
```

Preview the production build at `http://localhost:4173`

### 3. Deploy

The `dist/` folder contains your static website. You can deploy it to:

#### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

#### GitHub Pages

```bash
# Add to package.json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}

# Install gh-pages
npm install gh-pages --save-dev

# Deploy
npm run deploy
```

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is busy, Vite will automatically use the next available port. Check the terminal output for the actual port.

### Dependencies Not Installing

```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Blog Posts Not Loading

1. Verify your RSS feed URL is correct
2. Check if your blog's RSS feed is accessible
3. RSS2JSON API has rate limits - use caching in production
4. Consider setting up your own RSS proxy for production

### Dark Mode Not Working

1. Clear browser localStorage
2. Check browser console for errors
3. Ensure Tailwind's dark mode is configured correctly

### TypeScript Errors

```bash
# Check for type errors
npx tsc --noEmit
```

## 📱 Testing Responsive Design

### Browser DevTools

1. Open Chrome DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Test different device sizes

### Recommended Test Sizes

- Mobile: 375x667 (iPhone SE)
- Tablet: 768x1024 (iPad)
- Desktop: 1920x1080

## 🔒 Security Best Practices

1. **Never commit sensitive data** to your repository
2. Use environment variables for API keys (if needed in future)
3. Keep dependencies updated: `npm audit` and `npm update`
4. Review `package.json` before deploying

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Vite Documentation](https://vitejs.dev/)

## 🆘 Getting Help

If you encounter issues:

1. Check the browser console for errors
2. Review the terminal output for build errors
3. Ensure all dependencies are installed
4. Check that Node.js version is 16.x or higher

## ✅ Checklist Before Going Live

- [ ] Updated all personal information in `content.json`
- [ ] Added actual resume PDF to `public/` directory
- [ ] Updated social media links
- [ ] Tested all sections are displaying correctly
- [ ] Verified blog integration is working
- [ ] Tested on mobile, tablet, and desktop
- [ ] Checked all links are working
- [ ] Tested dark/light mode
- [ ] Optimized images (if added)
- [ ] Ran `npm run build` successfully
- [ ] Tested production build with `npm run preview`
- [ ] Set up custom domain (if applicable)

---

**Happy coding! 🚀**

If you found this template helpful, consider giving it a star ⭐
