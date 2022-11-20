import React from 'react'
import "./CallToAction.css";

function CallToAction() {
  return (
    <div className="contenido-ti">
      <h1 id="contactanos">
        <strong>Contáctanos</strong>
      </h1>
      <div class="input-text">
        <label for="email" className="label-call">Correo electrónico:</label>
        <input id="email" type="text"></input>
      </div>
      <div class="input-text">
        <label for="name" className="label-call">Nombres y apellidos:</label>
        <input id="name" type="text"></input>
      </div>
      <div class="input-text comment-box">
        <label for="comment" className="label-call">Comentario:</label>
        <textarea id="comment" class="text-area" cols={30} rows={15}></textarea>
      </div>

      <div class="btn-box">
        <button id="Enviar">Enviar</button>
        <button id="Cancelar">Cancelar</button>
      </div>

    </div>
  )
}

export default CallToAction;