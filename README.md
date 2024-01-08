## [Flow Icons](https://flow.ollion.com/icons/index.html)
Official icon library for `@ollion/flow-core` design system. Icons are downloaded from figma and packaged up and published to npm.
### prerequisite
make sure that you already installed `@ollion/flow-core` if not then run following command.
```
yarn add @ollion/flow-core
```

### Install one or multiple packages  
```
yarn add @ollion/flow-system-icon
yarn add @ollion/flow-product-icon
yarn add @ollion/flow-aws-icon
yarn add @ollion/flow-gcp-icon
```

### Usage 
Register installed icon pack in your applilcation startup file after importing `@ollion/flow-core` like below.
```JavaScript
import("@ollion/flow-core").then(async () => {
	await import("@ollion/flow-system-icon");
	await import("@ollion/flow-product-icon");
	await import("@ollion/flow-aws-icon");
	await import("@ollion/flow-gcp-icon");
  //your application startup code
});
```

### Development

#### From Figma
If you wish to create separate icon pack for `@ollion/flow-core` then fork this library follow these steps.

1. update `./figma/config.js` file with your respective figma icon file key and figma token. Learn figma api [here](https://www.figma.com/developers/api#files)
2. update package name and version in `package.json`.
3. If you are developing private package then you need `.npmrc` file.
4. run `yarn && yarn publish`.

#### Using Object
If you don't have figma then you just need svg files.
1. To create separate package refer any package from [this](https://github.com/ollionorg/flow-icon/tree/main/packages/%40ollion) directory.
2. As you can see each icon has its respective file in svg folder, In similar way you need to create those many file for your icons.
3. Import those files in `index.ts`
4. Update `package.json` with respective package name.
4. run `yarn && yarn publish`.

	
