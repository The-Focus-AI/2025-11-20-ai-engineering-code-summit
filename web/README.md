# Horizon 2025 Conference Report - Astro Version

This is an Astro conversion of the original React/Vite conference report site, preserving the exact design while leveraging Astro's performance benefits.

## Features

- **Static Site Generation**: All pages are pre-rendered at build time for optimal performance
- **File-based Routing**: Clean URLs with Astro's intuitive routing system
- **Astro Islands**: Interactive components (Chat, Research Sidebar) load only when needed
- **Preserved Design**: Exact replica of the original brutalist/retro design aesthetic
- **Custom Tailwind**: Maintains all custom colors, fonts, and styling

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Hero.astro              # Home page hero section
│   │   ├── Navigation.astro        # File-tab navigation
│   │   ├── ChatAssistant.tsx       # Interactive AI chat (React)
│   │   └── ResearchSidebar.tsx     # Saved items sidebar (React)
│   ├── layouts/
│   │   └── BaseLayout.astro        # Base layout with navigation
│   ├── pages/
│   │   ├── index.astro             # Home page
│   │   ├── track/
│   │   │   └── [trackId].astro     # Leadership/Engineering tracks
│   │   ├── article/
│   │   │   └── [articleId].astro   # Individual article pages
│   │   └── speakers/
│   │       ├── index.astro         # Personnel roster
│   │       └── [speakerId].astro   # Individual speaker pages
│   ├── styles/
│   │   └── global.css              # Tailwind + custom styles
│   ├── constants.ts                # App data (articles, speakers)
│   └── types.ts                    # TypeScript type definitions
└── public/                         # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Add your Google Gemini API key to `.env.local`:
   ```
   PUBLIC_API_KEY=your_actual_api_key_here
   ```

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build

Build the site for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Key Differences from React Version

### Routing
- **React**: Client-side routing with React state management
- **Astro**: File-based routing with static page generation

### Interactivity
- **React**: All components are interactive by default
- **Astro**: Most components are static, interactive components use `client:load` directive

### State Management
- **React**: React hooks (useState, useEffect) throughout
- **Astro**: LocalStorage + Custom Events for cross-component communication

### Performance
- **React**: Ships entire React runtime to client
- **Astro**: Minimal JavaScript, only for interactive islands (Chat, Sidebar)

## Design Elements

### Typography
- **Sans**: Inter (headings, UI)
- **Mono**: Courier Prime (typewriter effect)

### Color Palette
- **Paper**: `#f3f2ea` (aged document)
- **Void**: `#1a1a1a` (deep black ink)
- **RAND Blue**: `#0055aa` (corporate accent)
- **Alert Red**: `#d93025` (classification markers)
- **Terminal Green**: `#00ff41` (CRT display)

### Special Effects
- Bell Labs photo filter (grayscale with hover color reveal)
- Halftone pattern overlays on images
- CRT scanlines and flicker on chat interface
- File-tab navigation system

## Interactive Features

### Research Sidebar
- Save articles and speakers to personal collection
- Persistent storage via localStorage
- File cabinet aesthetic

### Chat Assistant
- AI-powered Q&A about conference content
- Retro terminal interface
- Powered by Google Gemini

## Browser Support

Modern browsers with ES2020+ support. The site uses:
- CSS Grid & Flexbox
- CSS Custom Properties
- LocalStorage API
- Fetch API

## License

Same as original project.
