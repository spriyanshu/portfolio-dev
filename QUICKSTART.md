# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## Step 1: Install Dependencies (2 minutes)

Open your terminal in this directory and run:

```bash
npm install
```

Wait for all packages to install...

## Step 2: Replace the Resume (30 seconds)

1. Go to the `public/` folder
2. Replace `resume.pdf` with your actual resume PDF
3. Keep the filename as `resume.pdf` OR update the filename in `src/data/content.json`

## Step 3: Update Your Information (2 minutes)

Open `src/data/content.json` and update:

### Must Update:

```json
{
  "personal": {
    "name": "YOUR NAME HERE",
    "email": "YOUR EMAIL",
    "phone": "YOUR PHONE",
    "social": {
      "github": "YOUR GITHUB URL",
      "linkedin": "YOUR LINKEDIN URL"
    }
  }
}
```

### Optional (but recommended):

- Update the `about` section with your own story
- Verify `experience` entries are correct
- Check `projects` section
- Update `skills` to match yours

## Step 4: Start the Development Server (30 seconds)

```bash
npm run dev
```

Open your browser and go to: **http://localhost:5173**

## Step 5: Make It Yours! 🎨

### Customize Colors (Optional)

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    light: '#3B82F6',  // Change to your preferred color
    dark: '#60A5FA',
  },
}
```

### Toggle Sections On/Off

In `content.json`, set any section to `false` to hide it:

```json
{
  "sections": {
    "blog": { "enabled": false }, // Hides blog section
    "featured": { "enabled": false } // Hides featured section
  }
}
```

## 🎉 You're Done!

Your portfolio is now running locally.

### What's Next?

1. **Test Everything**

   - Click all buttons
   - Test dark/light mode toggle
   - Check mobile responsiveness (browser DevTools)
   - Verify download resume works

2. **Build for Production**

   ```bash
   npm run build
   ```

3. **Deploy** (Choose one)
   - **Vercel** (Easiest): See DEPLOYMENT.md
   - **Netlify**: See DEPLOYMENT.md
   - **GitHub Pages**: See DEPLOYMENT.md

## 📝 Need More Help?

- **Setup Details**: See `SETUP.md`
- **Deployment**: See `DEPLOYMENT.md`
- **Full Docs**: See `README.md`

## 🐛 Quick Troubleshooting

**Problem**: Port 5173 is already in use

- **Solution**: Vite will use the next available port (check terminal)

**Problem**: Dependencies won't install

- **Solution**:
  ```bash
  rm -rf node_modules package-lock.json
  npm cache clean --force
  npm install
  ```

**Problem**: Blog not loading

- **Solution**: Make sure your blog URL and RSS feed URL are correct in `content.json`

---

**Happy building! 🎨**

Questions? Check the other documentation files or raise an issue.
