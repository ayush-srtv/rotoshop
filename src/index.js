import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import RouteConfig from "./router";
import theme from "./utils/theme/";
import "./styles.css";

const App = () => (
  <ThemeProvider theme={theme}>
    <RouteConfig />
  </ThemeProvider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
