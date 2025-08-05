export const isArrayEqual = (a: readonly unknown[], b: readonly unknown[]) => {
  if (a.length !== b.length) return false;

  return a.every((item, index) => item === b[index]);
};
