import Logo from "../assets/logo.png";
import '../sass/layout/header.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="header">
            <Link to="/" className="header__logo">
                <img className="header__logo--img" alt='Logo KUSA' src={Logo}></img>
            </Link>
            <ul className="header__nav">
                <li className="header__nav--item"><Link to="/" className="header__nav--home">Accueil</Link></li>
                <li className="header__nav--item"><Link to="/about" className="header__nav--about">A propos</Link></li>
            </ul>
        </nav>
    )
}
 
export default Header