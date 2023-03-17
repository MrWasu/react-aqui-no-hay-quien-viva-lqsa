
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {

    const { user, logout } = useContext(AuthContext) // apuntes

    const navigate = useNavigate();

    const onLogout = () => {

        logout();

        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-info bg-warning">

            <Link
                className="navbar-brand mx-5"
                to="/"
            >
                Series-App
            </Link>

            <div className="navbar-collapse col-5">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link mx-3 ${isActive ? 'active' : ''}`}
                        to="/lqsa"
                    >
                        La que se avecina
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link nav-item mx-3 ${isActive ? 'active' : ''}`}
                        to="/aqnhqv"
                    >
                        Aqui no hay quien viva
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-link nav-item vertical-align-middle mx-3 italic  ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Busqueda
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end ">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        {user?.name}
                    </span>
                    { user?.name ? ( // apuntes no se puede usar if dentro de jsx
                        <button
                            className="nav-item nav-link btn"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    ) : null }
                </ul>
            </div>

        </nav>
    )
}