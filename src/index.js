import React from "react";
import ReactDOM from "react-dom/client";
import {Navbar} from "./componentes/Nav/Nav";
import {Main} from "./componentes/Main/Main";
import {Nosotros} from "./componentes/Nosotros/Nosotros";
import {Equipo} from "./componentes/Equipo/Equipo";
import {Testimonios} from "./componentes/Testimonios/Testimonios";
import Footer from "./componentes/Footer/Footer";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <>
    <Navbar />
    <Main/>
    <Nosotros/>
    <Equipo/>
    <Testimonios/>
    <Footer />
  </>
);
