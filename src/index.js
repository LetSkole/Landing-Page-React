import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./componentes/Nav/Nav";
import Main from "./componentes/Main/Main";
import Nosotros from "./componentes/Nosotros/Nosotros";
import Equipo from "./componentes/Equipo/Equipo";
import Testimonios from "./componentes/Testimonios/Testimonios";
import Footer from "./componentes/Footer/Footer";
import "./index.css";
import CallToAction from "./componentes/CallToAction/CallToAction";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Fragment className="main-card">
    <Navbar />
    <Main/>
    <Nosotros/>
    <Equipo/>
    <Testimonios/>
    <CallToAction />
    <Footer />
  </Fragment>
);
