import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const books = defineCollection({
   loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
   schema: z.object({
    title: z.string(),
    author: z.string(),
    summary: z.string(),
    rating: z.number(),
   }),
})

export const collections = {
    books
}