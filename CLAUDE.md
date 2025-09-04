# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev`: Start development server with hot reload
- `npm run dev -- --open`: Start dev server and open browser automatically  
- `npm run build`: Create production build
- `npm run preview`: Preview production build locally
- `npm run prepare`: Run SvelteKit sync (happens automatically during install)

## Project Architecture

This is a **SvelteKit application** using Svelte 5.0 with Tailwind CSS for styling. It's a fitness website for "Bodies by Gaby" focusing on postpartum core recovery with the following key characteristics:

### Technology Stack
- **SvelteKit** with file-based routing and SSR capabilities
- **Svelte 5.0** using modern `$props()` syntax and `{@render}` functions
- **Tailwind CSS** with PostCSS for styling and utility classes
- **Vite** as build tool and dev server
- **Netlify adapter** configured for deployment to Netlify

### File-based Routing Structure
- Routes in `src/routes/` follow SvelteKit conventions
- Current pages: Home (`/`), About (`/about`), Vlog (`/vlog`), Contact (`/contact`)
- `+layout.svelte` provides consistent navigation header and footer across all pages
- `+page.svelte` files define individual page content
- No server-side routes or API endpoints currently implemented

### Component Architecture  
- Uses Svelte 5's new `$props()` syntax with destructuring: `let { children } = $props()`
- Layout uses `{@render children?.()}` for child content rendering with optional chaining
- Navigation implemented in root layout with desktop/mobile responsive design
- Mobile hamburger menu exists but functionality not yet implemented

### Styling System
- **Custom Tailwind configuration** with extended color palette in `tailwind.config.js`
- Three-color system: `primary` (blues), `accent` (pinks), `neutral` (tan/greys)
- Each color has full 50-900 shade range following Tailwind conventions
- Global styles and component classes in `src/app.css` using `@layer` directives
- Predefined component classes: `.btn-primary`, `.btn-secondary`, `.card`
- Base body styling: `bg-neutral-50 text-neutral-700`

### Design System & Branding
- Brand name: "Bodies by Gaby" with tagline "Building cores" 
- Professional fitness/wellness aesthetic with light, clean color scheme
- Focus on postpartum fitness and core recovery services
- Uses placeholder content and image placeholders throughout
- Footer branding: "Empowering mothers through core recovery"

### Configuration Files
- `svelte.config.js`: SvelteKit config with Netlify adapter
- `netlify.toml`: Netlify deployment configuration with build settings and redirects
- `tailwind.config.js`: Custom color palette and content paths
- `postcss.config.js`: Tailwind and Autoprefixer integration
- `vite.config.js`: Standard Vite configuration (if present)
- `src/app.html`: Minimal HTML template with SvelteKit placeholders

## Key Architecture Patterns

- All styling done through Tailwind utilities and custom component classes
- No JavaScript interactivity beyond basic SvelteKit navigation
- Static site approach optimized for Netlify deployment
- Component composition through Svelte 5 render functions
- Favicon served from `$lib/assets/favicon.svg`

## Deployment

**Netlify Configuration:**
- Uses `@sveltejs/adapter-netlify` for optimized Netlify deployment
- Build command: `npm run build`
- Publish directory: `build/`
- Client-side routing handled with redirect rules in `netlify.toml`
- Security headers configured for production deployment

**Deployment Steps:**
1. Connect repository to Netlify
2. Netlify will auto-detect SvelteKit and use the configuration from `netlify.toml`
3. Build will run `npm run build` and deploy the `build/` directory

## Current Limitations

- Mobile hamburger menu button present but not functional
- No form handling or user interaction beyond navigation  
- No backend integration or data fetching
- Uses placeholder content throughout all pages
- No testing framework or linting configured