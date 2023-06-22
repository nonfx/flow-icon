import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "@cldcvr/flow-system-icon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["es"],
		  },
		  // outDir: "dist",
		  rollupOptions: {
			external: ["@cldcvr/flow-core-config",/^lit/],
			output: {
			  globals: {
				"@cldcvr/flow-core-config": "@cldcvr/flow-core-config",
			  },
			},
		  },
		},
	  });