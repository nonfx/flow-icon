import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "flowProductIcon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["umd"],
		  },
		   outDir: "umd",
		  rollupOptions: {
			external: ["@cldcvr/flow-core-config"],
			output: {
			  globals: {
				"@cldcvr/flow-core-config": "flowCore",
			  },
			},
		  },
		},
	  });