import React, { Component } from "react";
import { Link,NavLink } from "react-router-dom";
export default class NavComp extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        
          <NavLink activeClassName="active" className="navbar-brand" to="#">
            Expand at md
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink activeClassName="active" className="nav-link active" to="/admin">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link active" to="/admin/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link active" to="/admin/user">
                  User
                </NavLink>
              </li>
            </ul>
            <form className="ms-auto" style={{marginRight:"10px"}} role="search">
              <input
                className="form-control"
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          
          </div>
        </nav>
      </>
    );
  }
}
