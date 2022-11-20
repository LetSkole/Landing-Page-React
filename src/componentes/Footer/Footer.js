/* Images */
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";

import "../grid.css";
import "./Footer.css";

function Footer() {
  return (
    <div className="row back-blue">
      <h2 className="subtitle">Redes Sociales</h2>
      <p className="col-12 col-md-2 brand text-center">Letskole</p>
      <p className="col-md-5 text-center">
          ¡No olvides seguirnos en nuestras redes sociales! <br/>
          Mira nuestras publicaciones, actualizaciones o 
          déjanos comentarios en los siguientes medios
      </p>
      <ul className="col-md-5 row no-list redes">
        <li className="col-3">
          <div class="card-redes text-center">
          <a href="#">
            <img className="redes-img text-center" src={facebook} alt="Facebook logo"/>
            <p className="text-center">Facebook</p>
          </a>
          </div>
        </li>
        <li className="col-3">
          <div class="card-redes text-center">
          <a href="#">
            <img className="redes-img" src={instagram} alt="Instagram logo"/>
            <p className="text-center">Instagram</p>
          </a>
          </div>
        </li>
        <li className="col-3">
          <div class="card-redes text-center">
          <a href="#">
            <img className="redes-img" src={twitter} alt="Twitter logo" />
            <p className="text-center">Twitter</p>
          </a>
          </div>
        </li>
        <li className="col-3">
          <div class="card-redes text-center">
          <a href="#">
            <img className="redes-img" src={youtube} alt="Youtube logo" />
            <p className="text-center">Youtube</p>
          </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Footer;