# Providex Marketing Website

Marketing website for Providex — the accountability layer for AI agents in production.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  page.tsx              # Home
  product/page.tsx      # Product (SDK + Dashboard + Pricing)
  use-cases/page.tsx    # Use Cases (Engineers, Compliance, Security)
  blog/
    page.tsx            # Blog index
    [slug]/page.tsx     # Blog post
  design-partners/      # Design partner program + application form
  about/page.tsx        # About + mission + team
  sitemap.ts            # Auto-generated sitemap
  robots.ts             # Robots.txt
components/
  ui/                   # Button, Card, Badge, CodeBlock, SectionWrapper
  layout/               # Navbar, Footer
content/
  blog/                 # MDX blog posts
lib/
  blog.ts               # Blog utilities (frontmatter parsing, etc.)
```

## Tech Stack

- **Next.js 16** with App Router
- **Tailwind CSS v4** for styling
- **MDX** for blog posts (via gray-matter + custom renderer)
- **TypeScript** throughout

## Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description for SEO and previews."
date: "2026-04-01"
author: "Your Name"
tags: ["tag1", "tag2"]
---

Your content here. Supports **bold**, *italic*, `code`, and [links](/).
```

## Analytics

Analytics snippets (Plausible and PostHog) are included in `app/layout.tsx` as comments. Uncomment and configure to activate. The site is cookie-free by default.

## Deployment

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node.js hosting provider.
