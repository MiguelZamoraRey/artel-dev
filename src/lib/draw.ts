export const clamp01 = (value: number): number => {
  if (value < 0) return 0;
  if (value > 1) return 1;
  return value;
};

export const progressFor = (top: number, height: number, vh: number): number =>
  clamp01((vh - top) / (vh + height));
