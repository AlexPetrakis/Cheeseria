import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Header } from "./components";
import { Cheese, Home } from "./pages";
import { GlobalStyle, Theme } from "./styles";

const Layout = styled.div`
  min-height: 100vh;
  background: url("/cheese-wallpaper.jpg") no-repeat center center fixed;
  background-size: cover;
`;

const App = () => (
  <Theme>
    <Router>
      <Layout>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cheese" element={<Cheese />}>
            <Route path="/cheese/:id" element={<Cheese />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  </Theme>
);

export default App;
