# Adam Bossy-Mendoza's Blog

A Medium-style blog built with Astro, featuring articles on AI engineering, startup development, and tech leadership.

## 🚀 Features

- **Modern Design**: Clean, Medium-inspired layout with excellent typography
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Responsive**: Works perfectly on all devices
- **SEO Optimized**: Proper meta tags and structured data
- **Content Management**: Markdown-based blog posts with frontmatter

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Typography**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **Content**: Astro Content Collections
- **Deployment**: Ready for Netlify, Vercel, or any static host

## 📝 Blog Topics

- AI Engineering & LLM Applications
- Startup Engineering (0 to 1 and 1 to N)
- Tech Leadership & Management
- Software Development Best Practices
- Machine Learning Strategy

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BlogPost.astro
│   │   ├── Header.astro
│   │   └── Welcome.astro
│   ├── content/
│   │   ├── config.ts
│   │   └── posts/
│   │       └── *.md
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── blog/
│           └── [slug].astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## ✍️ Adding New Blog Posts

1. Create a new `.md` file in `src/content/posts/`
2. Add the required frontmatter:

```yaml
---
title: "Your Post Title"
pubDate: 2025-01-01
author: "Adam Bossy-Mendoza"
showToc: false
emoji: "🚀"
description: "A brief description of your post"
---
```

3. Write your content in Markdown
4. The post will automatically appear on the homepage

## 🎨 Customization

- **Colors**: Modify the Tailwind config in `tailwind.config.mjs`
- **Typography**: Adjust the prose styles in the Tailwind typography configuration
- **Layout**: Edit the components in `src/components/` and `src/layouts/`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **Twitter**: [@abossy](https://twitter.com/abossy)
- **LinkedIn**: [adambossy](https://linkedin.com/in/adambossy)
- **GitHub**: [adambossy](https://github.com/adambossy)

---

Built with ❤️ using [Astro](https://astro.build)