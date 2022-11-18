import React from "react";
import ReactDOM from "react-dom/client";
import {Navbar} from "./Nav";
import {Main} from "./Main";
import {Nosotros} from "./Nosotros";
import {Equipo} from "./Equipo";
import {Testimonios} from "./Testimonios";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Navbar />
    <Main/>
    <Nosotros/>
    <Equipo/>
    <Testimonios/>
  </>
);
