import {Miembrocard} from "../Miembros/Miembro_card";
import elvis from "../../assets/elvis.jpg";
import natalia from "../../assets/natalia.png";
import sergio from "../../assets/sergio.png";
import jack from "../../assets/jack.jpg";
import "./Equipo.css";

export function Equipo(){
    return (
    <div className="contenido-eq">
        <h1><strong>Miembros del Equipo</strong></h1>
        <div className="contenido-eq-list">
        <Miembrocard image={elvis} nombre="Elvis Morales Montero" tipo="" descripcion=""/>
        <Miembrocard image={natalia} nombre="Natalia Maury " tipo="" descripcion="" />
        <Miembrocard image={sergio} nombre="Sergio Nuñez Lazo" tipo="" descripcion=""/>
        <Miembrocard image={jack} nombre="Jack Cruz Mamani" tipo="" descripcion=""/>
        </div>
    </div>)
}