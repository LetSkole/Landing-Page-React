import logo from "./assets/LOGO-LETSKOLE.png";
import "./main.css";
export function Main() {
  return (
    <div className="contenido">
      <div className="informacion">
        <h1>
          <strong>LetSkole</strong>
        </h1>
        <p>
          Let Skole es una aplicación que busca ayudar a padres en la enseñanza
          y educación <br />
          de los niños. Nuestro foco de atención es motivar, reforzar e
          incentivar los estudios <br />
          del niño mediante un sistema de minijuegos adaptados a sus clases con
          <br />
          recompensas al completar los objetivos.
        </p>
      </div>
      <img src={logo} alt="Logo LetSkole" className="Logo" width={192} height={192}></img>
    </div>
  );
}
