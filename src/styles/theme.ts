import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#00BFFF'
    },
    secondary: {
      700: '#FFFAFA'
    },
    red:{
      700: '#FF0000'
    },
    blue: {
      700: '#0000FF',
      500: '#87CEFA',
      300: '#00FFFF',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});