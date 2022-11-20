import {Miembrocard} from "../Miembros/Miembro_card";
import elvis from "../../assets/elvis.jpg";
import natalia from "../../assets/natalia.png";
import sergio from "../../assets/sergio.png";
import jack from "../../assets/jack.jpg";
import "./Equipo.css";

function Equipo(){
    return (
    <div className="contenido-eq">
        <h1><strong>Miembros del Equipo</strong></h1>
        <div className="row contenido-eq-list">
        <div className="col-3"><Miembrocard  image={elvis} nombre="Elvis Morales Montero" tipo="" descripcion=""/></div>
        <div className="col-3"><Miembrocard className="col-3" image={natalia} nombre="Natalia Maury " tipo="" descripcion="" /></div>
        <div className="col-3"><Miembrocard className="col-3" image={sergio} nombre="Sergio Nuñez Lazo" tipo="" descripcion=""/></div>
        <div className="col-3"><Miembrocard className="col-3" image={jack} nombre="Jack Cruz Mamani" tipo="" descripcion=""/></div>
        </div>
    </div>)
}

export default Equipo;