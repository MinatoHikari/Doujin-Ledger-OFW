export const formatUrl = (url?: string) => {
  if (!url) return url;
  if (!url.endsWith("/")) return `${url}/`;
  return url;
};
