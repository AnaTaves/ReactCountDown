import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./CountDown";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
