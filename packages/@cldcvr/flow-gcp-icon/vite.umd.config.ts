import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "flowGcpIcon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["umd"],
		  },
		   outDir: "umd",
		  rollupOptions: {
			external: ["@cldcvr/flow-core"],
			output: {
			  globals: {
				"@cldcvr/flow-core": "flowCore",
			  },
			},
		  },
		},
	  });