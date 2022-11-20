import "./Nav.css"
import hamburguer from "../../assets/hamburguer.jpg"
import Main from "../Main/Main";
import Nosotros from "../Nosotros/Nosotros";
import Equipo from "../Equipo/Equipo";
import Testimonios from "../Testimonios/Testimonios";
import Footer from "../Footer/Footer";
import CallToAction from "../CallToAction/CallToAction";
function Navbar() {
  return (
    <><nav className="nav">
      <ul className="nav-list">
        <li>
          <a href="#main"> LetSkole</a>
        </li>
        <li>
          <a href="#nosotros">Nosotros</a>
        </li>
        <li>
          <a href="#equipo">Miembros</a>
        </li>
        <li>
          <a href="#testimonios">Testimonios</a>
        </li>
        <li>
          <a href="#calltoaction">Contactanos</a>
        </li>
        <li>
          <a href="#footer">Redes Sociales</a>
        </li>
      </ul>
      <img id="hamburguer" src={hamburguer} />
    </nav><section id="main"><Main /></section><section id="nosotros"> <Nosotros /></section><section id="equipo"><Equipo /></section><section id="testimonios"><Testimonios /></section><section id="calltoaction"><CallToAction /></section><section id="footer"><Footer /></section></>
  );
}

export default Navbar;