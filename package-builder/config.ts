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
      name: "@cldcvr/flow-system-icon",
      umdName: "flowSystemIcon",
      nodeId: "0:1",
    },
    {
      name: "@cldcvr/flow-product-icon",
      umdName: "flowProductIcon",
      nodeId: "1:2",
    },
    {
      name: "@cldcvr/flow-gcp-icon",
      umdName: "flowGcpIcon",
      nodeId: "1:3",
    },
    {
      name: "@cldcvr/flow-aws-icon",
      umdName: "flowAwsIcon",
      nodeId: "1:4",
    },
  ],
  figma: {},
};

export default config;
