import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./componentes/Nav/Nav";
import "./index.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Fragment className="main-card">
    <Navbar />
  </Fragment>
);
