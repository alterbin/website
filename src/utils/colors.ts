export const rootColors = {
  'random-rdm-grn': '#62B19E',
  'lights-success': '#F1F9F4',
  'text-primary': '#272930',
};

export type Color = ReturnType<() => typeof rootColors>

export default function generateColorsCss () {
  let css = '';
  let rootVariables = '';

  Object.entries(rootColors).forEach(([key, value]) => {
    css += `.${key} {
      color: var(--${key}) !important;
    }`;

    css += `.bg-${key} {
      background-color: var(--${key}) !important;  
    }`;

    rootVariables += `--${key}: ${value};`;
  });

  return css + ` :root { ${rootVariables} }`;
}
