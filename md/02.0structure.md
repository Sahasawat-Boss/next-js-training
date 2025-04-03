# Structure
```
/
├── node_modules/        ← Installed dependencies
├── public/              ← Static assets (images, icons, SVGs)
│   ├── *.svg
│   └── favicon.ico
├── src/
│   └── app/             ← App directory (Next 13+ routing system)
│       ├── layout.js    ← Root layout (shared across all pages)
│       ├── page.js      ← Homepage (`/`)
│       └── globals.css  ← Global styles
├── .gitignore           ← Files/folders Git will ignore
├── README.md            ← Project overview/documentation
├── jsconfig.json        ← JS path aliases and intellisense config
├── next.config.mjs      ← Next.js custom configuration
├── package.json         ← Project metadata and scripts
├── package-lock.json    ← Dependency lock file
└── postcss.config.mjs   ← PostCSS config (for Tailwind or plugins)
```