# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

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

## Architecture Overview

This is an Astro-based personal blog with a Medium-inspired design focused on AI engineering, startup development, and tech leadership content.

### Key Architecture Patterns

**Content Management**: Uses Astro Content Collections with TypeScript schema validation. Blog posts are markdown files in `src/content/posts/` with required frontmatter including title, pubDate, author, and optional fields like showToc, emoji, and description.

**Static Site Generation**: The blog page (`src/pages/blog/[slug].astro`) uses `getStaticPaths()` to generate individual blog post pages with prev/next navigation based on publication date sorting.

**Post Filtering**: The homepage (`src/pages/index.astro`) includes hardcoded filters to hide specific posts that are not ready for publication (lines 9-11).

**Table of Contents**: Automatically generated from H2 headers (`## `) in markdown content when `showToc: true` is set in frontmatter. The TOC extraction logic is in the blog page template.

**Typography System**: Custom Tailwind CSS configuration with Inter font and detailed prose styling including custom H2 separators with top borders.

### Component Structure

- `Layout.astro`: Base layout with HTML structure, social links footer, and global styles
- `BlogPost.astro`: Homepage blog post preview component
- `Header.astro`: Site header component
- `Welcome.astro`: Homepage welcome section component

### Content Schema

Blog posts require this frontmatter structure:
```yaml
---
title: "Post Title"
pubDate: 2025-01-01
author: "Adam Bossy-Mendoza" 
showToc: false
emoji: "🚀"
description: "Brief description"
---
```

### Styling Approach

Uses Tailwind CSS with `@tailwindcss/typography` plugin for blog content. Custom typography configuration provides Medium-style article formatting with Inter font family and detailed spacing/styling rules.

## Adding Blog Posts

1. Create `.md` file in `src/content/posts/`
2. Add required frontmatter (see schema above)
3. Post automatically appears on homepage unless filtered
4. Remove hardcoded filters in `src/pages/index.astro` when ready to publish hidden posts