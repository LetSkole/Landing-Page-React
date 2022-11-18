import "./Nav.css"

export function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <a href="#"> LetSkole</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Miembros</a>
        </li>
        <li>
          <a href="#">Testimonios</a>
        </li>
        <li>
          <a href="#">Contactanos</a>
        </li>
        <li>
          <a href="#">Redes Sociales</a>
        </li>
      </ul>
    </nav>
  );
}
