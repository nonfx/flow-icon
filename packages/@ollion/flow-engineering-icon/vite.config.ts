import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "@ollion/flow-engineering-icon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["es"],
		  },
		  // outDir: "dist",
		  rollupOptions: {
			external: ["@ollion/flow-core-config",/^lit/],
			output: {
			  globals: {
				"@ollion/flow-core-config": "@ollion/flow-core-config",
			  },
			},
		  },
		},
	  });