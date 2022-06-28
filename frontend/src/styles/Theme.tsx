import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#ffffff",
    persianGreen: "#06B49A",
    lightBlue: "#AFDBD2",
    onyx: "#36313D",
    lightGrey: "#888888",
    transparentWhite: "#ffffffa6",
    darkOrange: "#f57e0c",
    black: "#000000",
  },
  fonts: ["sans-serif"],
};

type Props = {
  children: React.ReactNode;
};
const Theme = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
