import Logo from "../assets/logoFooter.png";
import '../sass/layout/footer.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="footer">
            <Link to="/" className="footer__logo">
                <img className="footer__logo--img" alt='Logo KUSA' src={Logo}></img>
            </Link>
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </nav>
    )
}
 
export default Header