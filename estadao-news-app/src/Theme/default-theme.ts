import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 !important;
    padding: 0 !important;
  }
`;

const DefaultTheme = {
  color: {
    background: "#141827",
    primary: {
      main: "#fffae3",
      contrastText: "#c1d9d0",
    },
    secundary: {
      main: "#736681",
      contrastText: "#62455b",
    },
  },

  border: {
    radius: "15px",
    style: "2px solid #736681",
  },

  font: {
    small: "0.5rem",
    default: "1rem",
    big: "2rem",
    bigger: "3rem",
  },
};

export default DefaultTheme;