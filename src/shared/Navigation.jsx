import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(props) {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="#">Expo__</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/watch">Watches</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/ProductDetails">ProductDetails</Link>
                </li>
                
                </ul>
                <div className='alignAuthLinks'>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link active" to="/signIn">Sign In</Link>
                        </li>
                        <li className="nav-item ms-4">
                            <Link className="nav-link active" to="/signUp">Sign Up</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            </nav>
        </>
    );
}

export default Navigation;