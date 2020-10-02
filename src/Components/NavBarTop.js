import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';

const NavBarTop = () => {    

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark ">
                <div className="nom">
                    <Link className="navbar-brand homepage" to="/">KASSAMALI Asif</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    
                    <div className="form-inline">
                        <ul className="navbar-nav mr-auto droite">
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Projets
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/projects/react" >React</Link>
                                    <Link className="dropdown-item" to="/projects/nodejs">Node.js</Link>
                                    <Link className="dropdown-item" to="/projects/mern">MERN Stack</Link>
                                    <Link className="dropdown-item" to="/projects/others">Autres Technos</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to='/a-propos' className="nav-link" href="#section-3">A Propos</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section-4">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBarTop;