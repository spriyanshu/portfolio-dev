# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ **Modern Design**: Clean, minimalist, and professional design
- 🎨 **Dark/Light Mode**: Persistent theme toggle with smooth transitions
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- 🎭 **Smooth Animations**: Powered by Framer Motion for delightful user experience
- 📝 **Dynamic Content**: All content loaded from a single JSON file
- 📰 **Blog Integration**: Automatically fetches and displays posts from external blog
- 🎯 **Section Toggle**: Enable/disable sections via JSON configuration
- 📥 **Resume Download**: Direct download button for resume
- 🎨 **Tailwind CSS**: Utility-first CSS for rapid UI development
- ⚡ **Vite**: Lightning-fast build tool and dev server
- 🔒 **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **RSS2JSON API** - Blog post fetching

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   └── SectionTitle.tsx
├── sections/           # Page sections
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Blog.tsx
│   ├── Featured.tsx
│   └── Contact.tsx
├── data/              # Content and configuration
│   └── content.json
├── hooks/             # Custom React hooks
│   ├── useTheme.ts
│   └── useBlogPosts.ts
├── utils/             # Utility functions
│   └── animations.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd PORTFOLIO
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## ⚙️ Configuration

### Content Management

All content is managed through the `src/data/content.json` file. This includes:

- Personal information
- About section
- Work experience
- Projects
- Skills
- Education
- Featured items
- Blog configuration
- Contact information

### Section Toggle

Each section can be enabled/disabled in the `sections` object in `content.json`:

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

### Blog Integration

The blog section automatically fetches posts from your external blog RSS feed. Configure it in `content.json`:

```json
{
  "blog": {
    "externalBlogUrl": "https://blog.spriyanshu.in/",
    "rssUrl": "https://blog.spriyanshu.in/rss.xml"
  }
}
```

### Theme Customization

The website supports light and dark modes. The theme preference is saved in localStorage and persists across sessions.

To customize colors, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3B82F6',
        dark: '#60A5FA',
      },
    },
  },
}
```

## 📄 Adding Your Resume

Place your resume PDF in the `public` directory and update the `resumeUrl` in `content.json`:

```json
{
  "personal": {
    "resumeUrl": "/resume.pdf"
  }
}
```

## 🎨 Customization

### Animations

All animations are defined in `src/utils/animations.ts`. You can customize or add new animation variants:

```typescript
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
```

### Components

Each component is modular and can be customized independently. All components follow React best practices and use TypeScript for type safety.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite and configure the build settings
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Other Platforms

The build output is static files, so you can deploy to any static hosting service:

- GitHub Pages
- AWS S3
- Google Cloud Storage
- Cloudflare Pages

## 📱 Responsive Design

The website is fully responsive and tested on:

- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Troubleshooting

### Blog posts not loading

- Ensure your blog has a valid RSS feed
- Check CORS settings on your blog
- The RSS2JSON API has rate limits for free tier

### Theme not persisting

- Check if localStorage is enabled in your browser
- Clear browser cache and try again

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Priyanshu Singh**

- Email: spriyanshu751@gmail.com
- GitHub: [@spriyanshu](https://github.com/spriyanshu)
- LinkedIn: [priyanshusingh07](https://linkedin.com/in/priyanshusingh07)

## 🙏 Acknowledgments

- Design inspiration from [prajjwalarora.com](https://prajjwalarora.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
