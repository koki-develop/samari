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

export const groupBy = <T, K extends string>(
  array: T[],
  getKey: (item: T) => K,
) => {
  return array.reduce(
    (acc, item) => {
      const key = getKey(item);
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    },
    {} as Record<K, T[]>,
  );
};
