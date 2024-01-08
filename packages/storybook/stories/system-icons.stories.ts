import { LitElement } from "lit";
import { html } from "lit-html";
import { customElement } from "lit/decorators.js";
import SystemIconPack from "@ollion/flow-system-icon/icon-pack";
import ProductIconPack from "@ollion/flow-product-icon/icon-pack";
import GcpIconPack from "@ollion/flow-gcp-icon/icon-pack";
import AwsIconPack from "@ollion/flow-aws-icon/icon-pack";
import SystemIconPackageJSON from "@ollion/flow-system-icon/package.json";
import ProductIconPackageJSON from "@ollion/flow-product-icon/package.json";
import GcpIconPackageJSON from "@ollion/flow-gcp-icon/package.json";
import AwsIconPackageJSON from "@ollion/flow-aws-icon/package.json";
@customElement("system-icons")
export class SystemIconStoryElement extends LitElement {
  searchTerm: string = null;

  createRenderRoot() {
    return this;
  }

  handleInput(event: CustomEvent) {
    event.stopPropagation();
    this.searchTerm = event.detail.value;
    this.requestUpdate();
  }
  handleKeydown(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  render() {
    return html`
      <f-div
        direction="column"
        width="100%"
        gap="large"
        padding="large"
        overflow="scroll"
      >
        <f-text style="width:100%" align="center"
          >@ollion/flow-system-icon : ${SystemIconPackageJSON.version}</f-text
        >
        <f-search
          .value=${this.searchTerm}
          @keydown=${this.handleKeydown}
          @input=${this.handleInput}
          style="width:100%;"
          variant="round"
        ></f-search>
        <f-div gap="x-large" padding="large">
          ${Object.keys(SystemIconPack)
            .filter((src) =>
              this.searchTerm ? src.includes(this.searchTerm) : true
            )
            .map(
              (src) =>
                html` <f-div
                  direction="column"
                  width="90px"
                  gap="medium"
                  align="middle-center"
                >
                  <f-icon .source=${src} size="large"> </f-icon>
                  <f-text
                    variant="para"
                    size="small"
                    weight="medium"
                    align="center"
                    >${src}</f-text
                  >
                </f-div>`
            )}
        </f-div>
      </f-div>
    `;
  }
}

@customElement("product-icons")
export class ProductIconStoryElement extends LitElement {
  searchTerm: string = null;

  createRenderRoot() {
    return this;
  }

  handleInput(event: CustomEvent) {
    event.stopPropagation();
    this.searchTerm = event.detail.value;
    this.requestUpdate();
  }
  handleKeydown(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  render() {
    return html`
      <f-div
        direction="column"
        width="100%"
        gap="large"
        padding="large"
        overflow="scroll"
      >
        <f-text style="width:100%" align="center"
          >@ollion/flow-product-icon : ${ProductIconPackageJSON.version}</f-text
        >
        <f-search
          .value=${this.searchTerm}
          @keydown=${this.handleKeydown}
          @input=${this.handleInput}
          style="width:100%;"
          variant="round"
        ></f-search>
        <f-div gap="x-large" padding="large">
          ${Object.keys(ProductIconPack)
            .filter((src) =>
              this.searchTerm ? src.includes(this.searchTerm) : true
            )
            .map(
              (src) =>
                html` <f-div
                  direction="column"
                  width="90px"
                  gap="medium"
                  align="middle-center"
                >
                  <f-icon .source=${src} size="large"> </f-icon>
                  <f-text
                    variant="para"
                    size="small"
                    weight="medium"
                    align="center"
                    >${src}</f-text
                  >
                </f-div>`
            )}
        </f-div>
      </f-div>
    `;
  }
}

@customElement("gcp-icons")
export class GCPIconStoryElement extends LitElement {
  searchTerm: string = null;

  createRenderRoot() {
    return this;
  }

  handleInput(event: CustomEvent) {
    event.stopPropagation();
    this.searchTerm = event.detail.value;
    this.requestUpdate();
  }
  handleKeydown(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  render() {
    return html`
      <f-div
        direction="column"
        width="100%"
        gap="large"
        padding="large"
        overflow="scroll"
      >
        <f-text style="width:100%" align="center"
          >@ollion/flow-gcp-icon : ${GcpIconPackageJSON.version}</f-text
        >
        <f-search
          .value=${this.searchTerm}
          @keydown=${this.handleKeydown}
          @input=${this.handleInput}
          style="width:100%;"
          variant="round"
        ></f-search>
        <f-div gap="x-large" padding="large">
          ${Object.keys(GcpIconPack)
            .filter((src) =>
              this.searchTerm ? src.includes(this.searchTerm) : true
            )
            .map(
              (src) =>
                html` <f-div
                  direction="column"
                  width="90px"
                  gap="medium"
                  align="middle-center"
                >
                  <f-icon .source=${src} size="large"> </f-icon>
                  <f-text
                    variant="para"
                    size="small"
                    weight="medium"
                    align="center"
                    >${src}</f-text
                  >
                </f-div>`
            )}
        </f-div>
      </f-div>
    `;
  }
}

@customElement("aws-icons")
export class AWSIconStoryElement extends LitElement {
  searchTerm: string = null;

  createRenderRoot() {
    return this;
  }

  handleInput(event: CustomEvent) {
    event.stopPropagation();
    this.searchTerm = event.detail.value;
    this.requestUpdate();
  }
  handleKeydown(event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
  render() {
    return html`
      <f-div
        direction="column"
        width="100%"
        gap="large"
        padding="large"
        overflow="scroll"
      >
        <f-text style="width:100%" align="center"
          >@ollion/flow-aws-icon : ${AwsIconPackageJSON.version}</f-text
        >
        <f-search
          .value=${this.searchTerm}
          @keydown=${this.handleKeydown}
          @input=${this.handleInput}
          style="width:100%;"
          variant="round"
        ></f-search>
        <f-div gap="x-large" padding="large">
          ${Object.keys(AwsIconPack)
            .filter((src) =>
              this.searchTerm ? src.includes(this.searchTerm) : true
            )
            .map(
              (src) =>
                html` <f-div
                  direction="column"
                  width="90px"
                  gap="medium"
                  align="middle-center"
                >
                  <f-icon .source=${src} size="large"> </f-icon>
                  <f-text
                    variant="para"
                    size="small"
                    weight="medium"
                    align="center"
                    >${src}</f-text
                  >
                </f-div>`
            )}
        </f-div>
      </f-div>
    `;
  }
}
