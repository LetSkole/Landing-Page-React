import { Miembrocard } from "../Miembros/Miembro_card";
import sonia from "../../assets/sonia_paredes.png";
import hector from "../../assets/hector_salazar.webp";
import raul from "../../assets/raul_rodriguez.jpg";
import lara from "../../assets/lara_lozano.jpg";
import carlos from "../../assets/carlos_valladares.jpeg";
import "./Testimonios.css";

function Testimonios() {
  return (
    <div className="contenido-te">
      <h1>
        <strong>Testimonios</strong>
      </h1>
      <div className="row contenido-te-list">
        <div className="col-6 col-md-2">
        <Miembrocard
          image={sonia}
          nombre="Sonia Paredes"
          tipo="Madre"
          descripcion=" Mi hija logró dominar
                    geografía con los
                    juegos y está más
                    motivada para
                    estudiar"
        />
        </div>
        <div className="col-6 col-md-2">
        <Miembrocard
          image={hector}
          nombre="Hector Salazar"
          tipo="Padre"
          descripcion="Mi hijo esta más
          motivado para repasar
          los temas del colegio y
          sus notas han
          mejorado por ello"
          />
        </div>
        <div className="col-6 col-md-2">
        <Miembrocard
          image={raul}
          nombre="Raul Rodriguez"
          tipo="Hijo"
          descripcion="Logré aprender
                    geometria con los
                    juegos y aprobé mi
                    examen"
        />
        </div>
        <div className="col-6 col-md-2">
        <Miembrocard
          image={lara}
          nombre="Lara Lozano"
          tipo="Hija"
          descripcion="Me gusta utilizar los
                    juegos para repasar para
                    exámenes importantes
                    porque me motivan a
                    estudiar"
        />
        </div>
        <div className="col-6 col-md-2">
        <Miembrocard
          image={carlos}
          nombre="Carlos Valladarez"
          tipo="Hijo"
          descripcion="Cuando hay temas
                    que no entiendo en el
                    colegio, utilizo los
                    juegos para repasar"
        />
        </div>
        <div className="col-md-2 col-6">
        </div>
      </div>
    </div>
  );
}

export default Testimonios;