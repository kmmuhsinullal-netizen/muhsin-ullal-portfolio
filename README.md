# Muhsin Ullal — Personal Portfolio

A responsive, dark editorial portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons. The site uses the authentic photographs supplied for this project and presents ventures and interests without invented metrics or credentials.

## Features

- Cinematic responsive hero and glass-effect navigation
- Accessible mobile navigation and reduced-motion support
- About, ventures, professional interests, projects, insights, and contact sections
- Responsive image assets using Next.js Image
- SEO metadata, Open Graph and Twitter metadata, favicon, robots, and configurable sitemap
- Contact form UI with explicit messaging that delivery is not configured

## Requirements

- Node.js 20.9 or later (recommended for Next.js 15)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate before release

```bash
npm run typecheck
npm run lint
npm run build
```

Run these commands in an environment with dependencies installed. Resolve any reported issues before deploying.

## Personal photo assets

The selected source photos are included in `public/images/`:

- `muhsin-ullal-hero.jpg` — seated executive-office portrait
- `muhsin-ullal-executive.jpg` — full-length navy suit portrait
- `muhsin-ullal-casual.jpg` — seated casual portrait
- `muhsin-ullal-casual-alt.jpg` — alternate casual portrait
- `muhsin-ullal-graduation.jpg` and `muhsin-ullal-graduation-alt.jpg` — graduation portraits

The photographs are used as supplied, with normal image delivery and CSS crop/positioning. The code does not generate or reconstruct a face.

## Configuration

Copy `.env.example` to `.env.local` if you want to set the public production URL:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.example
```

Replace the example with a domain you control. Until configured, the app does not claim a canonical domain and the sitemap intentionally returns no URL entries.

### Contact form — action required

The form currently validates required fields in the browser but **does not send messages**. It clearly tells visitors that no message was sent. Before using it in production, connect a real form service or secure server endpoint, add server-side validation and spam protection, and store any secret keys only in environment variables. Do not advertise the form as live until this integration has been tested.

### Social profiles

No social profile URLs or email address were supplied, so none are fabricated. Add verified links when available.

## GitHub workflow

Create an empty repository in your GitHub account, then from this project folder run:

```bash
git init
git add .
git commit -m "Build Muhsin Ullal personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the remote URL with the repository you actually created. This project bundle does not claim that a repository has already been created or pushed.

## Deploy to Vercel

1. Push the project to GitHub.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Confirm the framework is detected as Next.js. The default build command is `npm run build`.
4. Add `NEXT_PUBLIC_SITE_URL` in project environment variables after choosing your real domain (optional before first deployment).
5. Deploy, then test the homepage and all anchor links at desktop and mobile widths.
6. If connecting a custom domain, configure it in Vercel and set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin, then redeploy.
7. Before public launch, connect and test the contact form backend.

## Content notes

Venture descriptions are intentionally framed as initiatives or emerging concepts. No unverified outcomes, customer numbers, awards, endorsements, or publication dates are included. The NexGuide link is the provided destination; verify its live behavior independently before launch.
