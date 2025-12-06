import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx,markdown}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date().optional(),
			date: z.coerce.date().optional(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
		}).transform(data => ({
            ...data,
            pubDate: data.pubDate || data.date || new Date(),
            description: data.description || ""
        })),
});

const projects = defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number().optional(),
        avatar: z.string().optional(),
        screenshots: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
        play_store_link: z.string().optional(),
        apk_link: z.string().optional(),
        app_store_link: z.string().optional(),
        github_link: z.string().optional(),
    })
});

export const collections = { blog, projects };
