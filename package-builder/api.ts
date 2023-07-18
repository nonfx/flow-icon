import api from "axios";
import config from "./config.js";

const headers = () => {
  return {
    "X-FIGMA-TOKEN": config.figma.FIGMA_TOKEN as string,
  };
};
/**
 * api endpoint for files
 *
 */
const instanceFiles = () =>
  api.create({
    baseURL: `https://api.figma.com/v1/files/${config.figma.FILE_KEY}`,
    headers: headers(),
  });
/**
 * api endpoint for styles
 *
 */
const instanceStyles = () =>
  api.create({
    baseURL: `https://api.figma.com/v1/files/${config.figma.FILE_KEY}/styles`,
    headers: headers(),
  });
/**
 * api endpoint for images
 *
 */
const instanceImages = () =>
  api.create({
    baseURL: `https://api.figma.com/v1/images/${config.figma.FILE_KEY}`,
    headers: headers(),
  });
/**
 * get Figma document info
 *
 * @return {Promise<Object>}
 */
const getDocument = async () => instanceFiles().get("/");

/**
 * get Figma style info
 *
 * @return {Promise<Object>}
 */
const getStyles = async () => instanceStyles().get("/");

/**
 * get Figma node info
 *
 * @param {string} nodeId
 * @return {Promise<Object>}
 */
const getNode = async (nodeId: string) => {
  return instanceFiles().get(`/nodes?ids=${decodeURIComponent(nodeId)}`);
};
/**
 * get Figma node children
 *
 * @param {string} nodeId
 * @return {Promise<[Object]>}
 */
const getNodeChildren = async (nodeId: string) => {
  const {
    data: { nodes },
  } = await instanceFiles().get(`/nodes?ids=${decodeURIComponent(nodeId)}`);
  return nodes[nodeId].document.children;
};
/**
 * get svg image resource url
 *
 * @param {string} nodeId
 * @return {Promise<string>}
 */
const getSvgImageUrl = async (nodeId: string) => {
  const {
    data: { images },
  } = await instanceImages().get(
    `/?ids=${decodeURIComponent(nodeId)}&format=svg`
  );
  return images[nodeId];
};
/**
 * get svg image resource urls
 *
 * @param {string} nodeId
 * @return {Promise<string[]>}
 */
const getAllSvgImageUrl = async (nodeId: string) => {
  const {
    data: { images },
  } = await instanceImages().get(
    `/?ids=${decodeURIComponent(nodeId)}&format=svg`
  );
  return images;
};
const getIconContent = async (url: string) => api.get(url);

export {
  getDocument,
  getNode,
  getNodeChildren,
  getSvgImageUrl,
  getIconContent,
  getAllSvgImageUrl,
  getStyles,
};
