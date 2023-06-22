import { html } from "lit-html";
import "./storybook.css";
import "@cldcvr/flow-core/dist/style.css";
import "@cldcvr/flow-core";

import("@cldcvr/flow-system-icon/index");
import("@cldcvr/flow-product-icon/index");
import("@cldcvr/flow-gcp-icon/index");
import("@cldcvr/flow-aws-icon/index");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: { disable: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ["Introduction", "Components"],
    },
  },
};

export const decorators = [
  (story) => {
    return html`
      <div
        style="background-color:var(--color-surface-default);color:var(--color-text-default);font-family:var(--flow-font);height:inherit;padding: 0px;"
      >
        ${story()}
      </div>
    `;
  },
];
