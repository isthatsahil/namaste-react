import React from "react";
import ReactDOM from "react-dom/client";

const headerEl = React.createElement("h1", {}, "Namaste React");
const paragraphEl = React.createElement("p", {}, "Hello World");
const container = React.createElement(
  "div",
  {
    id: "container",
    style: { background: "green", color: "#fff" },
  },
  [headerEl, paragraphEl]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
