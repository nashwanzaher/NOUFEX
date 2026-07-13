/**
 * Design tokens — single source of truth for the NoufEx design system.
 * Consumed by:
 *   - apps/web-pwa (via @noufex/ui-tokens/tailwind or CSS variables)
 *   - apps/mobile-app (via the Tokens constant from this package)
 */

export const Palette = {
  brand: {
    50: '#E6F4FE',
    100: '#C7E5FC',
    200: '#94CDF9',
    300: '#5FB1F2',
    400: '#3295EA',
    500: '#208AEF',
    600: '#0E6FD3',
    700: '#0A5AAE',
    800: '#0A4888',
    900: '#0A3A6E',
  },
  neutral: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
    950: '#09090B',
  },
  success: '#16A34A',
  warning: '#F59E0B',
  danger: '#DC2626',
  info: '#0EA5E9',
} as const;

export const Spacing = {
  '0': 0,
  px: 1,
  '0.5': 2,
  '1': 4,
  '1.5': 6,
  '2': 8,
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 24,
  '8': 32,
  '10': 40,
  '12': 48,
  '16': 64,
  '20': 80,
  '24': 96,
} as const;

export const Radius = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  full: 9999,
} as const;

export const FontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
} as const;

export const LineHeight = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 28,
  '2xl': 32,
  '3xl': 36,
  '4xl': 40,
  '5xl': 56,
} as const;

export const FontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const;

export const Shadow = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const;

export const ZIndex = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
  tooltip: 1800,
} as const;

export const Breakpoint = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export const Tokens = {
  palette: Palette,
  spacing: Spacing,
  radius: Radius,
  fontSize: FontSize,
  lineHeight: LineHeight,
  fontWeight: FontWeight,
  shadow: Shadow,
  zIndex: ZIndex,
  breakpoint: Breakpoint,
} as const;

export type Tokens = typeof Tokens;
export type Palette = typeof Palette;
export type Spacing = typeof Spacing;
export type Radius = typeof Radius;
export type FontSize = typeof FontSize;
export type Breakpoint = typeof Breakpoint;
