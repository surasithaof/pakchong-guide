# Pakchong Guide - Claude Code Project Guide

## Project Overview

A static, open-source travel guide website for Pakchong City, Thailand. Built with Astro 4.x, Tailwind CSS, and Lucide icons. Supports 7 languages with no sponsored rankings.

## Tech Stack

- **Framework**: Astro 4.x (static site generation)
- **Styling**: Tailwind CSS
- **Icons**: lucide-astro
- **Language**: TypeScript (strict mode)

## Commands

```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/   # Reusable Astro components
├── layouts/      # Page layouts (BaseLayout.astro)
├── pages/        # Route pages (Astro file-based routing)
├── i18n/         # Internationalization (ui.json, utils.ts)
└── styles/       # Global CSS (global.css)

data/
├── places.json       # Places/attractions data
├── categories.json   # Category definitions
├── itineraries.json  # Trip itineraries
└── transport.json    # Transport information

public/
└── images/places/    # Place images
```

## i18n System

- URL query param based: `?lang=en`
- Default language: Thai (th)
- Supported: th, en, zh, es, fr, it, ru
- All content stored with language keys in JSON
- UI strings in `src/i18n/ui.json`
- Helper functions in `src/i18n/utils.ts`

## Data Files

All data is stored in JSON files in the `/data` directory:

- `places.json` - All places with multilingual names/descriptions
- `categories.json` - Category definitions with icons
- `itineraries.json` - Trip plans linking to places
- `transport.json` - Taxi contacts and public transport info

## Key Design Decisions

1. No sponsored rankings - alphabetical or category-based sorting only
2. Static site generation for fast performance
3. Data-driven from JSON files for easy content updates
4. Mobile-first responsive design

## Adding Content

To add a new place:

1. Add entry to `data/places.json` with all language translations
2. Add image to `public/images/places/`
3. Rebuild site

## Code Conventions

- Components use `.astro` extension
- TypeScript for type safety
- Tailwind for all styling (no custom CSS except global.css)
- All text content should support i18n
