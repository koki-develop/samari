export const extractHostname = (url: string) => {
  return new URL(url).hostname;
};
