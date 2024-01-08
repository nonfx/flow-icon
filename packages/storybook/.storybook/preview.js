import { html } from "lit-html";
import "./storybook.css";
import "@ollion/flow-core";

import("@ollion/flow-system-icon/index");
import("@ollion/flow-product-icon/index");
import("@ollion/flow-gcp-icon/index");
import("@ollion/flow-aws-icon/index");

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
