export const extractHostname = (url: string) => {
  return new URL(url).hostname;
};

export const clsx = (...classes: unknown[]) => {
  const result = [];

  for (const c of classes) {
    if (typeof c === "string") {
      result.push(c);
    }
  }

  return result.join(" ");
};
