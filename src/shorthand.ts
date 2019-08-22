import { MarginProperty, PaddingProperty } from "csstype";
import { px } from "./unit";

export const sizes = (
  ...sizes:
    | Array<MarginProperty<string | number>>
    | Array<PaddingProperty<string | number>>
): string =>
  sizes
    .map(size => (typeof size === "number" && size !== 0 ? px(size) : size))
    .join(" ");
