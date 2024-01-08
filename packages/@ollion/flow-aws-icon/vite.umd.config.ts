import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "flowAwsIcon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["umd"],
		  },
		   outDir: "umd",
		  rollupOptions: {
			external: ["@ollion/flow-core-config"],
			output: {
			  globals: {
				"@ollion/flow-core-config": "flowCore",
			  },
			},
		  },
		},
	  });