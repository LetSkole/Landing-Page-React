import "./miembrocard.css";
export function Miembrocard(props){
    return (<div className="contenido-mi">
        <img src={props.image} width={192} height={192} alt={props.nombre}></img>
        <p>{props.nombre}</p>
        <p><strong>{props.tipo}</strong></p>
        <p>{props.descripcion}</p>
    </div>)
}