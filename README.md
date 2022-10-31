## [Flow Icons](https://flow.cldcvr.com/v2/index.html?path=/docs/dependencies-icons--system-icons)
Official icon library for `@cldcvr/flow-core` design system. Icons are downloaded from figma and packaged up and published to npm.
### prerequisite
make sure that you already installed `@cldcvr/flow-core` if not then run following command.
```
yarn add @cldcvr/flow-core
```

### Install one or multiple packages  
```
yarn add @cldcvr/flow-system-icon
yarn add @cldcvr/flow-product-icon
yarn add @cldcvr/flow-aws-icon
yarn add @cldcvr/flow-gcp-icon
```

### Usage 
Register installed icon pack in your applilcation startup file like below.
```JavaScript
	import "@cldcvr/flow-system-icon";
	import "@cldcvr/flow-product-icon";
	import "@cldcvr/flow-aws-icon";
	import "@cldcvr/flow-gcp-icon";
```

### Development

#### From Figma
If you wish to create separate icon pack for `@cldcvr/flow-core` then fork this library follow these steps.

1. update `./figma/config.js` file with your respective figma icon file key and figma token. Learn figma api [here]		(https://www.figma.com/developers/api#files)
2. update package name and version in `package.json`.
3. If you are developing private package then you need `.npmrc` file.
4. run `yarn && yarn publish`.

#### Using Object
If you don't have figma then you just need svg files.
1. To create separate package refer any package from [this](https://github.com/cldcvr/flow-icon/tree/main/packages/%40cldcvr) directory.
2. As you can see each icon has its respective file in svg folder, In similar way you need to create those many file for your icons.
3. Import those files in `index.ts`
4. Update `package.json` with respective package name.
4. run `yarn && yarn publish`.

	
