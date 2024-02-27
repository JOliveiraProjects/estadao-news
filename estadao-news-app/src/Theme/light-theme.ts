import { DefaultTheme } from "styled-components";
import Theme from "./default-theme";

const LightTheme: DefaultTheme = {
    color: {
      background: Theme.color.primary.contrastText,
      primary: {
        main: Theme.color.background,
        contrastText: Theme.color.primary.main,
      },
      secundary: {
        main: Theme.color.secundary.contrastText,
        contrastText: Theme.color.secundary.main,
      },
    },
  
    border: {
      radius: "15px",
      style: "2px solid " + Theme.color.secundary.contrastText,
    },
  
    font: Theme.font,
  };

export default LightTheme;