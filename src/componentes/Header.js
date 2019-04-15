import React from 'react';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">

        <div className="container">
            <a className="navbar-brand text-light font-weight-bold">ASPIRA</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegacion" aria-controls="navegacion" aria-expanded="false" aria-laberl="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navegacion">
                <ul className="nabvar-nav ml-auto text-right">
                    <li className="nav-item active">
                        <a className="btn btn-success">Nuevo Cliente</a>
                    </li>
                </ul>
            </div>
        </div>

    </nav>

);

export default Header;