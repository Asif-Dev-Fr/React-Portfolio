import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';

const NavBarTop = () => {

    useEffect(() => {
        const changeBackground = () => {
            const bodyElt = document.querySelector("body");
            bodyElt.style.backgroundColor = '#FFFFFF';
        }
        changeBackground()
    }, []);
    

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
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Projets
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/projects/#react" >React</Link>
                                    <a className="dropdown-item" href="#nodejs">Node.js</a>
                                    <a className="dropdown-item" href="#mern">MERN Stack</a>
                                    <a className="dropdown-item" href="#others">Autres Technos</a>
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