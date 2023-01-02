import downloadIcons from "./download-icons.js";
import config from "./config.js";
import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

/**
 *
 * @param pkgName The npm package name
 * @returns The valid `package.json` in **stringified** JSON
 *
 * NOTE: The registry can be decided by setting the `CUSTOM_REGISTRY_URL` env flag
 */
const generatePackageJsonContents = (pkgName: string) => {
  return JSON.stringify(
    {
      name: pkgName,
      version: "0.0.1",
      description:
        "This package contains free set icons to use in `@cldcvr/flow-core`",
      main: "dist/flow-icon.es.js",
      module: "dist/flow-icon.es.js",
      types: "./dist/types/index.d.ts",
      scripts: {
        test: "echo 'Error: no test specified' && exit 1",
        build: "vite build --emptyOutDir && tsc",
        prepublishOnly: "yarn build"
      },
      keywords: ["icons"],
      author: "@cldcvr",
      license: "MIT",
      dependencies: {
        "@cldcvr/flow-core": "*"
      },
      devDependencies: {
        axios: "^0.27.2",
        fs: "^0.0.1-security",
        "lit-html": "^2.2.7",
        prettier: "^2.7.1",
        typescript: "^4.7.4",
        vite: "^3.0.4"
      },
      peerDependencies: {
        "@cldcvr/flow-core": "*"
      },
      repository: {
        type: "git",
        url: "git+ssh://github.com/cldcvr/flow-icon.git"
      },
      publishConfig: {
        access: process.env.CUSTOM_REGISTRY_URL ? "private" : "public",
        registry:
          process.env.CUSTOM_REGISTRY_URL ?? "https://registry.npmjs.org"
      }
    },
    null,
    2
  );
};

/**
 * downloading icons
 */
for (const pkg of config.packages) {
  await downloadIcons(pkg.nodeId, pkg.name);

  const pkgJsonFilePath = `${__dirname}/../packages/${pkg.name}/package.json`;

  try {
    if (!fs.existsSync(pkgJsonFilePath))
      fs.writeFileSync(pkgJsonFilePath, generatePackageJsonContents(pkg.name));

    fs.writeFileSync(
      `${__dirname}/../packages/${pkg.name}/tsconfig.json`,
      `{
			"compilerOptions": {
			  "module": "esnext",
			  "lib": ["es2017", "dom", "dom.iterable","ES2021.String"],
			  "declaration": true,
			  "outDir": "dist/types",
			  "baseUrl": ".",
			  "strict": true,
			  "noUnusedLocals": true,
			  "noUnusedParameters": true,
			  "noImplicitReturns": true,
			  "noFallthroughCasesInSwitch": true,
			  "moduleResolution": "node",
			  "isolatedModules": true,
			  "allowSyntheticDefaultImports": true,
			  "experimentalDecorators": true,
			  "forceConsistentCasingInFileNames": true,
			  "useDefineForClassFields": false,
			  "skipLibCheck": true,
			  "target": "ESNext",
			  "resolveJsonModule": true
			},
			"include": ["./**/*.ts"],
			"exclude": ["vite.config.ts"]
		  }`
    );
    fs.writeFileSync(
      `${__dirname}/../packages/${pkg.name}/vite.config.ts`,
      `import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "${pkg.name}",
			fileName: (format) => \`flow-icon.\${format}.js\`,
			formats: ["es"],
		  },
		  // outDir: "dist",
		  rollupOptions: {
			external: ["@cldcvr/flow-core"],
			output: {
			  globals: {
				"@cldcvr/flow-core": "@cldcvr/flow-core",
			  },
			},
		  },
		},
	  });`
    );
    fs.writeFileSync(
      `${__dirname}/../packages/${pkg.name}/shims.d.ts`,
      `declare module '@cldcvr/flow-core';`
    );
  } catch (err) {
    console.error(err);
  }
}
