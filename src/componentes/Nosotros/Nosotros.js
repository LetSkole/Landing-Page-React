import dscompany from "../../assets/DScompany.jpeg";
import "./Nosotros.css";

function Nosotros() {
  return (
    <div className="row contenido-ns">
      <img src={dscompany} className="Logo-ns col-4 col-md-2" alt="DsCompany-img" width={192} height={192}></img>
      <div className="nosotros col-8 col-md-10">
        <h1>
          <strong>Sobre Nosotros...</strong>
        </h1>
        <p>
          {" "}
          Somos una compañia que busca ayudar a los niños a reforzar lo
          aprendido en clase de forma interactica y diversa
        </p>
        <h3>
          <strong>Misión:</strong>
        </h3>
        <p>
          Nuestra misión es reforzar las clases escolares de nivel primaria con
          videos <br />y juegos educativos para mejorar la motivación del
          estudiante hacia el aprendizaje.
        </p>
        <h3>
          <strong>Visión:</strong>
        </h3>
        <p>
          Nuestra visión es ser la empresa N°1 de reforzamiento académico en los{" "}
          <br />
          estudiantes de primaria a nivel nacional, y en un futuro, a nivel
          internacional.
        </p>
      </div>
    </div>
  );
}

export default Nosotros;