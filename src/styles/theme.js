export const colors = {
  black: '#141531',
  purple: '#7847F2',
  white: '#FFFFFF',
  green: '#99D5AA',
  orange: '#EA8432',
};

export const sizes = {
  mobile: '375px',
  desktop: '1440px',
};

export const devices = {
  mobile: `(max-width: ${sizes.mobile})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export const themeDefault = {
  colors: {
    ...colors,
    primary: colors.purple,
    secondary: colors.orange,
  },
  sizes,
  devices,
};
