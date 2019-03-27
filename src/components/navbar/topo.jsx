import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBarTopo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cor: ""
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link text-white">TCC 2019 - Tensorflow x Pytorch </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <button className="btn btn-link nav-link dropdown-toggle text-white" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cadastro
                            </button>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="nav-item dropdown-item " to="/">Prontuário</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown text-white">
                            <button className="btn btn-link nav-link dropdown-toggle text-white" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Resultados
                            </button>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="nav-item dropdown-item" to="/">Graficos</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBarTopo;