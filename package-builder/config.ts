export type PackageDetails = {
  name: string;
  umdName: string;
  nodeId: string;
};

export type FigmaPackageConfig = {
  packages: PackageDetails[];
  figma: {
    FIGMA_TOKEN?: string;
    FILE_KEY?: string;
  };
};
const config: FigmaPackageConfig = {
  packages: [
    {
      name: "@ollion/flow-system-icon",
      umdName: "flowSystemIcon",
      nodeId: "0:1",
    },
    {
      name: "@ollion/flow-product-icon",
      umdName: "flowProductIcon",
      nodeId: "1:2",
    },
    {
      name: "@ollion/flow-gcp-icon",
      umdName: "flowGcpIcon",
      nodeId: "1:3",
    },
    {
      name: "@ollion/flow-aws-icon",
      umdName: "flowAwsIcon",
      nodeId: "1:4",
    },
  ],
  figma: {},
};

export default config;
