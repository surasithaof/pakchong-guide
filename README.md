# Pakchong Guide 🌿

A free, open-source travel guide for Pakchong City and Khao Yai, Thailand.

## Features

- **📍 Places Directory** - Discover attractions, restaurants, cafes, and more
- **🗺️ Itineraries** - Pre-planned trips for different durations and interests
- **🚗 Transport Info** - Taxi contacts and public transport options
- **🌍 7 Languages** - Thai, English, Chinese, Spanish, French, Italian, Russian
- **🚫 No Ads, No Sponsored Rankings** - Unbiased recommendations

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pakchong-guide.git
cd pakchong-guide

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview  # Preview the build locally
```

## Deployment

This is a static site that can be deployed to any static hosting service:

- **Vercel**: Connect your repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect your repo
- **GitHub Pages**: Use the `gh-pages` branch or GitHub Actions
- **Cloudflare Pages**: Connect your repo for automatic deployments

## Project Structure

```
pakchong-guide/
├── src/
│   ├── components/    # Reusable UI components
│   ├── layouts/       # Page layouts
│   ├── pages/         # Route pages
│   ├── i18n/          # Internationalization
│   └── styles/        # Global styles
├── data/              # JSON data files
│   ├── places.json
│   ├── categories.json
│   ├── itineraries.json
│   └── transport.json
└── public/            # Static assets
```

## Contributing

We welcome contributions! Here's how you can help:

### Adding a New Place

1. Edit `data/places.json`
2. Add translations for all 7 languages
3. Add an image to `public/images/places/`
4. Submit a pull request

### Adding Translations

1. Find the relevant JSON file in `data/` or `src/i18n/ui.json`
2. Add or improve translations
3. Submit a pull request

### Reporting Issues

Found an error or have a suggestion? [Open an issue](https://github.com/yourusername/pakchong-guide/issues)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ for travelers exploring Pakchong and Khao Yai
