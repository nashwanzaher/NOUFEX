import { Palette } from './tokens';

export interface Theme {
  name: 'light' | 'dark';
  colors: {
    background: string;
    surface: string;
    surfaceMuted: string;
    text: string;
    textSecondary: string;
    primary: string;
    primaryForeground: string;
    border: string;
    success: string;
    warning: string;
    danger: string;
    info: string;
  };
}

export type ThemeName = Theme['name'];

export const lightTheme: Theme = {
  name: 'light',
  colors: {
    background: Palette.neutral[0],
    surface: Palette.neutral[50],
    surfaceMuted: Palette.neutral[100],
    text: Palette.neutral[900],
    textSecondary: Palette.neutral[500],
    primary: Palette.brand[500],
    primaryForeground: Palette.neutral[0],
    border: Palette.neutral[200],
    success: Palette.success,
    warning: Palette.warning,
    danger: Palette.danger,
    info: Palette.info,
  },
};

export const darkTheme: Theme = {
  name: 'dark',
  colors: {
    background: Palette.neutral[950],
    surface: Palette.neutral[900],
    surfaceMuted: Palette.neutral[800],
    text: Palette.neutral[50],
    textSecondary: Palette.neutral[400],
    primary: Palette.brand[400],
    primaryForeground: Palette.neutral[950],
    border: Palette.neutral[800],
    success: Palette.success,
    warning: Palette.warning,
    danger: Palette.danger,
    info: Palette.info,
  },
};

export const themes = { light: lightTheme, dark: darkTheme } as const;
