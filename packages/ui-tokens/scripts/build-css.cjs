'use strict';

const fs = require('node:fs/promises');
const path = require('node:path');

const { darkTheme, lightTheme, Tokens } = require('../dist/index.js');

const distDir = path.resolve(__dirname, '..', 'dist');

const themeBlock = (name, theme) => `[data-theme="${name}"] {
  --color-background: ${theme.colors.background};
  --color-surface: ${theme.colors.surface};
  --color-surface-muted: ${theme.colors.surfaceMuted};
  --color-text: ${theme.colors.text};
  --color-text-secondary: ${theme.colors.textSecondary};
  --color-primary: ${theme.colors.primary};
  --color-primary-foreground: ${theme.colors.primaryForeground};
  --color-border: ${theme.colors.border};
  --color-success: ${theme.colors.success};
  --color-warning: ${theme.colors.warning};
  --color-danger: ${theme.colors.danger};
  --color-info: ${theme.colors.info};
  color-scheme: ${name};
}
`;

const baseVars = `:root {
  --space-px: ${Tokens.spacing.px}px;
  --space-1: ${Tokens.spacing[1]}px;
  --space-2: ${Tokens.spacing[2]}px;
  --space-3: ${Tokens.spacing[3]}px;
  --space-4: ${Tokens.spacing[4]}px;
  --space-6: ${Tokens.spacing[6]}px;
  --space-8: ${Tokens.spacing[8]}px;
  --space-12: ${Tokens.spacing[12]}px;
  --radius-sm: ${Tokens.radius.sm}px;
  --radius-md: ${Tokens.radius.md}px;
  --radius-lg: ${Tokens.radius.lg}px;
  --radius-xl: ${Tokens.radius.xl}px;
  --shadow-sm: ${Tokens.shadow.sm};
  --shadow-md: ${Tokens.shadow.md};
  --shadow-lg: ${Tokens.shadow.lg};
}
`;

const prefersDark = `@media (prefers-color-scheme: dark) {
  :root {
    --color-background: ${darkTheme.colors.background};
    --color-surface: ${darkTheme.colors.surface};
    --color-surface-muted: ${darkTheme.colors.surfaceMuted};
    --color-text: ${darkTheme.colors.text};
    --color-text-secondary: ${darkTheme.colors.textSecondary};
    --color-primary: ${darkTheme.colors.primary};
    --color-primary-foreground: ${darkTheme.colors.primaryForeground};
    --color-border: ${darkTheme.colors.border};
  }
}
`;

const css = `${baseVars}\n${themeBlock('light', lightTheme)}\n${themeBlock('dark', darkTheme)}\n${prefersDark}`;

const tailwindPreset = `'use strict';

const noufexPreset = {
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        'surface-muted': 'var(--color-surface-muted)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        border: 'var(--color-border)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
    },
  },
};

module.exports = noufexPreset;
module.exports.default = noufexPreset;
`;

(async () => {
  await fs.mkdir(distDir, { recursive: true });
  await fs.writeFile(path.resolve(distDir, 'tokens.css'), css, 'utf8');
  await fs.writeFile(path.resolve(distDir, 'tailwind-preset.cjs'), tailwindPreset, 'utf8');
  await fs.writeFile(path.resolve(distDir, 'tailwind-preset.js'), tailwindPreset, 'utf8');
  console.log('✓ Built @noufex/ui-tokens CSS + Tailwind preset');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
