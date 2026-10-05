# Book Project

A personal book site built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). It introduces the project, a short about page, and a books section for reviews.

## Pages

| Route    | Description                                      |
| :------- | :----------------------------------------------- |
| `/`      | Home, with a short intro and a link to reviews  |
| `/about` | About the reader                                 |
| `/books` | Books section                                    |

Shared chrome (header, navigation, and page title) lives in `src/layouts/BaseLayout.astro`. Global styles and the Tailwind theme are in `src/styles/global.css`.

## Stack

- Astro 7
- Tailwind CSS 4, wired through the Vite plugin
- TypeScript (strict Astro config)

Node.js **22.12.0** or newer is required.

## Getting started

From the project root:

```sh
npm install
npm run dev
```

The dev server starts at [http://localhost:4321](http://localhost:4321).

## Scripts

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the local dev server                  |
| `npm run build`   | Build the production site into `./dist/`    |
| `npm run preview` | Preview the production build locally        |
| `npm run astro`   | Run the Astro CLI (`astro add`, `astro check`, and so on) |

## Project structure

```text
/
├── public/                 # Static assets (favicon)
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # /
│   │   ├── about.astro     # /about
│   │   └── books/
│   │       └── index.astro # /books
│   └── styles/
│       └── global.css
├── astro.config.mjs
└── package.json
```

Astro turns each `.astro` file in `src/pages/` into a route from its file path. Static files in `public/` are served from the site root.
