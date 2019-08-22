import { MarginProperty, PaddingProperty } from "csstype";

export const margin = (...sizes: Array<MarginProperty<string | 0>>) =>
  Array.prototype.join.call(sizes, " ");
export const padding = (...sizes: Array<PaddingProperty<string | 0>>) =>
  Array.prototype.join.call(sizes, " ");
