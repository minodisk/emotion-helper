// 5.5. Percentages
// https://drafts.csswg.org/css-values/#percentages
export const percent = (size: number): string => `${size}%`;

// 6.1. Relative Lengths
// https://drafts.csswg.org/css-values/#relative-lengths
export const em = (size: number): string => `${size}em`;
export const ex = (size: number): string => `${size}ex`;
export const cap = (size: number): string => `${size}cap`;
export const ch = (size: number): string => `${size}ch`;
export const ic = (size: number): string => `${size}ic`;
export const rem = (size: number): string => `${size}rem`;
export const lh = (size: number): string => `${size}lh`;
export const rlh = (size: number): string => `${size}rlh`;
export const vw = (size: number): string => `${size}vw`;
export const vh = (size: number): string => `${size}vh`;
export const vi = (size: number): string => `${size}vi`;
export const vb = (size: number): string => `${size}vb`;
export const vmin = (size: number): string => `${size}vmin`;
export const vmax = (size: number): string => `${size}vmax`;

// 6.2. Absolute Lnegths
// https://drafts.csswg.org/css-values/#absolute-lengths
export const cm = (size: number): string => `${size}cm`;
export const mm = (size: number): string => `${size}mm`;
export const Q = (size: number): string => `${size}Q`;
export const inch = (size: number): string => `${size}in`;
export const pc = (size: number): string => `${size}pc`;
export const pt = (size: number): string => `${size}pt`;
export const px = (size: number): string => `${size}px`;

// 7. Other Quantities
export const deg = (size: number): string => `${size}deg`;
export const grad = (size: number): string => `${size}grad`;
export const rad = (size: number): string => `${size}rad`;
export const turn = (size: number): string => `${size}turn`;
export const s = (size: number): string => `${size}s`;
export const ms = (size: number): string => `${size}ms`;
export const Hz = (size: number): string => `${size}Hz`;
export const kHz = (size: number): string => `${size}kHz`;
export const dpi = (size: number): string => `${size}dpi`;
export const dpcm = (size: number): string => `${size}dpcm`;
export const dppx = (size: number): string => `${size}dppx`;
