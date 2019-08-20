export * from "./numeric";
export * from "./unit";
export * from "./color";

export const url = (url: string): string => `url(${url})`;

export type LineWidth = "thin" | "medium" | "thick" | number | string;

export const border = (lineWidth: LineWidth) => `${lineWidth}`;
