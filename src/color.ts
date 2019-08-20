export const rgb = (
  r: number | string,
  g: number | string,
  b: number | string,
) => `rgb(${r}, ${g}, ${b})`;
export const rgba = (
  r: number | string,
  g: number | string,
  b: number | string,
  a: number,
) => `rgba(${r}, ${g}, ${b}, ${a})`;
export const hsl = (h: number, s: string, l: string) => `hsl(${h}, ${s}, ${l})`;
export const hsla = (h: number, s: string, l: string, a: number) =>
  `hsla(${h}, ${s}, ${l}, ${a})`;
