import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class SideBarComp extends Component {
  render() {
    return (
      <>
          <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark " style={{height:"calc(100vh - 56px)"}}>
            
                        <NavLink activeClassName="active" to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"></svg>
                        <span className="fs-4">Sidebar</span>
                        </NavLink>
                        <hr/>
                        <ul className="nav nav-pills flex-column mb-auto">
                        <li>
                            <NavLink activeClassName="active" to="/admin/dashboard" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/products" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/addCategory" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Add Category
                            </NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to="/admin/user" className="nav-link text-white">
                            <svg className="bi me-2" width="16" height="16"></svg>
                            Customers
                            </NavLink>
                        </li>
                        </ul>
                        <hr/>
                        <div className="dropdown">
                        <NavLink activeClassName="active" to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                            <strong>mdo</strong>
                        </NavLink>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><NavLink activeClassName="active" className="dropdown-item" to="#">New project...</NavLink></li>
                            <li><NavLink activeClassName="active" className="dropdown-item" to="#">Settings</NavLink></li>
                            <li><NavLink activeClassName="active" className="dropdown-item" to="#">Profile</NavLink></li>
                            <li><hr className='dropdown-divider'/></li>
                            <li><NavLink activeClassName="active" className="dropdown-item" to="#">Sign out</NavLink></li>
                        </ul>
                        </div>
                    </div>
                    
      </>
    )
  }
}
