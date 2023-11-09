import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#fff",
    white01: "#ffffff88",
    black: "#000",
    black01: "#000000ee",
    black02: "#00000055",
    black03: "#00000088",
    black04: "#00000099",
    background: "#212121",
    gray01: "#151515",
    gray02: "#676767",
    orange01: "#ff9966",
    orange02: "#ffbb66",
    orange03: "#ff8866",
    red01: "#ff2233",
    green01: "#008000",
    input: {
      gradient: {
        start: "rgb(56, 56, 56)",
        middle: "rgb(36, 36, 36)",
        end: "rgb(41, 41, 41)",
      },
      green01: "#00f260",
      green02: "#64f38c",
      blue01: "#0575e6",
      gray01: "#999"
    },
  },
};

export const ProviderStyle = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
