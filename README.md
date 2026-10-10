# MyBookVibes Project

A personal book review site built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [React](https://react.dev). Each book is a Markdown file with its own review page, and every review has an interactive "Like" button.

## Features

- Book reviews written in Markdown, managed with Astro content collections
- A book list with cards showing title, author, rating, and summary
- A dynamic review page for each book, generated from the file name
- A React "Like" button, hydrated only when it scrolls into view
- A `/products` page rendered on the server, fetching data from [DummyJSON](https://dummyjson.com)
- Styling with Tailwind CSS 4 and a custom hard-shadow utility
- Netlify adapter for deployment

## Pages

| Route          | Description                                                  |
| :------------- | :----------------------------------------------------------- |
| `/`            | Home, with a short intro and a link to the reviews           |
| `/about`       | About the reader                                             |
| `/books`       | List of all books, rendered as cards                         |
| `/books/[id]`  | Review page for one book. `id` is the Markdown file name     |
| `/products`    | Product list fetched on the server at request time           |

Shared layout (header, navigation, page title) lives in `src/layouts/BaseLayout.astro`. Global styles and the Tailwind theme are in `src/styles/global.css`.

## Stack

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4, wired through the Vite plugin
- [React](https://react.dev) 19, via `@astrojs/react`
- [Netlify adapter](https://docs.astro.build/en/guides/integrations-guide/netlify/) (`@astrojs/netlify`)
- TypeScript (strict Astro config)
- Prettier with `prettier-plugin-astro`

Node.js **22.12.0** or newer is required.

## Getting started

From the project root:

```sh
npm install
npm run dev
```

The dev server starts at [http://localhost:4321](http://localhost:4321).

## Scripts

| Command           | Action                                                     |
| :---------------- | :--------------------------------------------------------- |
| `npm install`     | Install dependencies                                       |
| `npm run dev`     | Start the local dev server                                 |
| `npm run build`   | Build the production site                                  |
| `npm run preview` | Preview the production build locally                       |
| `npm run astro`   | Run the Astro CLI (`astro add`, `astro check`, and so on)  |

## Project structure

```text
/
├── public/                      # Static assets (favicon)
├── src/
│   ├── components/
│   │   ├── BookCard.astro       # Card used in the book list
│   │   └── Likes.tsx            # React like button
│   ├── content/
│   │   └── books/               # One Markdown file per book
│   │       ├── 1984.md
│   │       ├── the-hobbit.md
│   │       └── ...
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro          # /
│   │   ├── about.astro          # /about
│   │   ├── books/
│   │   │   ├── index.astro      # /books
│   │   │   └── [id].astro       # /books/:id
│   │   └── products/
│   │       └── index.astro      # /products (server-rendered)
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts        # Content collection schema
├── astro.config.mjs
└── package.json
```

Astro turns each `.astro` file in `src/pages/` into a route from its file path. Static files in `public/` are served from the site root.

## Adding a book

Create a new Markdown file in `src/content/books/`. The file name becomes the URL slug, so `dune.md` is served at `/books/dune`.

```markdown
---
title: Dune
author: Frank Herbert
summary: A short summary shown on the book card.
rating: 9
---

# Dune

## Protagonists

Paragraph about the main characters.

## Plot

Paragraph about the story.

## Themes

Paragraph about the main ideas.

## Review

Your own opinion of the book.
```

The frontmatter is validated by the schema in `src/content.config.ts`:

| Field     | Type     | Notes                                              |
| :-------- | :------- | :------------------------------------------------- |
| `title`   | `string` | Book title                                         |
| `author`  | `string` | Book author                                        |
| `summary` | `string` | Shown on the card. Wrap it in quotes if it contains a colon |
| `rating`  | `number` | Score from 1 to 10                                 |

## Rendering notes

- `/books` and `/books/[id]` are generated at build time from the `books` collection.
- `/products` sets `export const prerender = false`, so it runs on the server for every request. This needs the Netlify adapter, or another server adapter, in production.
- The `Likes` component uses `client:visible`, so React loads only when the button reaches the viewport. The like count is kept in component state and resets on page reload.

## Deployment

The project uses `@astrojs/netlify`. To deploy, connect the repository to Netlify. It runs `npm run build` and uses the adapter output.
