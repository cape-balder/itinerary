export const DEFAULT_SPACING = 20
export const DEFAULT_RADIUS = 3
export const DEFAULT_TRANSITION = 0.5
export const Color = {
  primary: '#ffc800',
  light: '#ffe27b',
  dark: '#4a4a4a',
  secondary: '#fc5b63',
  secondaryLight: '#ff777e',
  // lightGrey: '#e8e8e8',
  lightGrey: '#F5F2F2',
  grey: '#cecece',
  darkGrey: '#9a9a9a',
  black: '#4a4a4a',
  white: '#ffffff',
  pleat: '#fcfcfc',
  link: '#5a98e6'
}

export const Font = {
  align: 'left',
  spread: 0.42,
  family: {
    primary: 'Montserrat',
    secondary: 'Roboto',
    tertiary: 'Ubuntu',
    ubuntu_medium: 'Ubuntu script=all rev=1'
  },
  weight: {
    normal: 400,
    bold: 600,
    light: 200
  },
  size: {
    h1: 32,
    h2: 22,
    h3: 20,
    h4: 18,
    p: 16,
    h5: 14,
    h6: 12,
    h7: 11
  }
}

export const DEFAULT_SHADOW = `0 2px 6px ${Color.lightGrey}`

export const LAYOUT_HEIGHT = {
  XS: 32,
  S: 44,
  SM: 54,
  M: 60,
  L: 72,
  XL: 96
}

export const ICON_SIZE = {
  S: 14,
  M: 18,
  L: 20,
  XL: 28,
  XXL: 32,
  LARGE: 64
}

export const GUTTER = {
  XXS: 2,
  XS: 5,
  S: 8,
  SM: 12,
  M: 16,
  L: 24,
  XL: 32,
  XXl: 48,
  XXXL: 64
}

export const BUTTON_DEFAULT_STYLE = {
  borderRadius: DEFAULT_RADIUS,
  transition: DEFAULT_TRANSITION,
  size: {
    font: Font.size.h6,
    height: LAYOUT_HEIGHT.XS,
    gutter: GUTTER.M
  },
  color: {
    text: Color.secondary,
    border: Color.secondary,
    background: Color.white
  }
}
