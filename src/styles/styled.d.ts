import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    
      title: string,
    
      colors: {
        white: string;
        primary: string,
        secondary: string,
    
        background: string,
        text: string,
        pink: string;
        green_300: string;
        green_400: string;
        green_500: string;
        green_600: string;
        red: string;
        gray: string;
        gray_500: string;
        gray_900: string;

        yellow: string;
        button: string;
      },
    
    
  }
}