# Deployment Guide

This guide covers deploying your portfolio to various hosting platforms.

## 🌐 Deployment Platforms

### Vercel (Recommended - Easiest)

Vercel offers the best experience for Vite/React apps with automatic deployments.

#### Method 1: Using Vercel Dashboard (Easiest)

1. **Push to GitHub**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

#### Method 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Configuration**: Vercel auto-detects Vite projects. No configuration needed!

---

### Netlify

Netlify is another excellent option with great features.

#### Method 1: Using Netlify Dashboard

1. **Build your project**

   ```bash
   npm run build
   ```

2. **Deploy via Dashboard**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Your site is live!

#### Method 2: Using Git Integration

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify**
   - Go to Netlify → "New site from Git"
   - Select your repository
   - Configure build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

#### Method 3: Using Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize
netlify init

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

**netlify.toml** (Optional - for advanced config):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### GitHub Pages

Perfect for hosting directly from your GitHub repository.

#### Setup

1. **Install gh-pages**

   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**

   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.ts**

   ```typescript
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Replace with your repo name
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
   });
   ```

4. **Deploy**

   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

Your site will be live at `https://yourusername.github.io/portfolio`

---

### Cloudflare Pages

Fast and free with excellent global CDN.

#### Deployment

1. **Push to GitHub**

2. **Connect to Cloudflare Pages**

   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository

3. **Configure build settings**
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Click "Save and Deploy"

---

### AWS S3 + CloudFront

For those who want full control with AWS.

#### Prerequisites

- AWS Account
- AWS CLI installed and configured

#### Deployment Steps

1. **Build your project**

   ```bash
   npm run build
   ```

2. **Create S3 Bucket**

   ```bash
   aws s3 mb s3://your-portfolio-bucket
   ```

3. **Configure for static website hosting**

   ```bash
   aws s3 website s3://your-portfolio-bucket \
     --index-document index.html \
     --error-document index.html
   ```

4. **Upload files**

   ```bash
   aws s3 sync dist/ s3://your-portfolio-bucket
   ```

5. **Set bucket policy** (public read access)

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-portfolio-bucket/*"
       }
     ]
   }
   ```

6. **Setup CloudFront** (Optional but recommended)
   - Create CloudFront distribution
   - Set origin to your S3 bucket
   - Configure custom domain and SSL

---

### Railway

Modern platform with great developer experience.

1. **Install Railway CLI**

   ```bash
   npm i -g @railway/cli
   ```

2. **Login**

   ```bash
   railway login
   ```

3. **Initialize and Deploy**
   ```bash
   railway init
   railway up
   ```

---

### Firebase Hosting

Great option if you're using other Firebase services.

1. **Install Firebase CLI**

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**

   ```bash
   firebase login
   ```

3. **Initialize Firebase**

   ```bash
   firebase init
   ```

   Select:

   - Hosting
   - Use `dist` as public directory
   - Configure as single-page app: Yes
   - Don't overwrite index.html

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

---

## 🔧 Pre-Deployment Checklist

### Essential

- [ ] All content in `content.json` is accurate and updated
- [ ] Resume PDF is in `public/` directory
- [ ] All social links are correct and working
- [ ] Blog RSS feed URL is correct
- [ ] Tested build locally: `npm run build && npm run preview`
- [ ] No console errors in production build
- [ ] All images optimized (if any added)

### Performance

- [ ] Remove unused dependencies
- [ ] Images are optimized and compressed
- [ ] Large files are properly lazy-loaded
- [ ] Fonts are optimized

### SEO & Meta

- [ ] Updated `index.html` meta tags
- [ ] Added favicon
- [ ] Included Open Graph tags (optional)
- [ ] Added sitemap (optional)

### Testing

- [ ] Tested on Chrome, Firefox, Safari
- [ ] Tested on mobile devices
- [ ] Tested dark/light mode
- [ ] All links work correctly
- [ ] Blog section loads properly
- [ ] Download resume works

---

## 🎯 Custom Domain Setup

### For Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records at your domain registrar:

   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### For Netlify

1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records:

   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### For Cloudflare Pages

1. Pages dashboard → Custom domains
2. Add your domain
3. Cloudflare automatically manages DNS if domain is on Cloudflare

---

## 🔄 Continuous Deployment

### Auto-deploy on Git Push

Most platforms (Vercel, Netlify, Cloudflare Pages) automatically deploy when you push to your main branch.

**Workflow:**

1. Make changes locally
2. Test: `npm run dev`
3. Commit: `git commit -am "Update content"`
4. Push: `git push origin main`
5. Platform auto-deploys (usually takes 1-3 minutes)

### Branch Previews

Create preview deployments for branches:

**Vercel & Netlify:**

- Create a new branch: `git checkout -b feature-branch`
- Push: `git push origin feature-branch`
- Get a preview URL automatically

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Add to `index.html`** (before closing `</head>`)
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag() {
       dataLayer.push(arguments);
     }
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics

1. Go to your project on Vercel
2. Analytics tab → Enable
3. No code changes needed!

---

## 🐛 Common Deployment Issues

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 on Page Reload

**Solution**: Configure redirects for SPA

**Vercel** - Create `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

**Netlify** - Create `public/_redirects`:

```
/*    /index.html   200
```

### Environment Variables Not Working

Ensure variables are prefixed with `VITE_`:

```
VITE_API_URL=https://api.example.com
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🚀 Performance Optimization

### Before Deploying

1. **Optimize Dependencies**

   ```bash
   npm run build -- --mode production
   ```

2. **Analyze Bundle**

   ```bash
   npm install -D rollup-plugin-visualizer
   ```

3. **Enable Compression** (Usually automatic on platforms)

4. **Use CDN** for static assets (automatic on most platforms)

---

## 📈 Post-Deployment

1. **Test your live site**

   - Check all pages
   - Test on different devices
   - Verify all links work

2. **Monitor Performance**

   - Use Google PageSpeed Insights
   - Check Lighthouse score
   - Monitor Core Web Vitals

3. **Set up Monitoring** (Optional)
   - Error tracking: Sentry
   - Analytics: Google Analytics
   - Uptime monitoring: UptimeRobot

---

## 🎉 You're Live!

Congratulations! Your portfolio is now live on the internet.

**Next Steps:**

- Share your portfolio URL
- Add it to your resume
- Update LinkedIn profile
- Share on social media

---

**Need help?** Check the main README.md for troubleshooting tips.
