import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
	plugins: [sveltekit(), purgeCss(), viteCompression()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
