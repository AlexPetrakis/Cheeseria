import { render, RenderOptions } from "@testing-library/react";
import React, { FC, ReactElement } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Theme } from "../styles";

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => (
  <Theme>
    <Router>{children}</Router>
  </Theme>
);

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react";
export { customRender as render };
