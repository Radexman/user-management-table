/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./src/setupTests.ts'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html'],
			exclude: [
				'src/main.tsx',
				'src/vite-env.d.ts',
				'src/setupTests.ts',
				'src/app',
				'**/*.test.{ts,tsx}',
				'**/*.spec.{ts,tsx}',
				'src/**/*.d.ts',
				'src/utils/**',
			],
			all: true,
			include: ['src/**/*.tsx', 'src/**/*.ts'],
			thresholds: {
				statements: 80,
				branches: 80,
				functions: 80,
				lines: 80,
			},
		},
	},
});
