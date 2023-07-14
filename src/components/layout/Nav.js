
import { Link } from "react-router-dom";
import '../../styles/Nav.css'

const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/asociate">Asociate</Link></li>
                    <li> <Link to="/clases">Clases</Link></li>
                    <li> <Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;