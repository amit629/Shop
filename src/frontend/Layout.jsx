import React from 'react';
import { Outlet,Link } from 'react-router-dom';
import Navigation from '../shared/Navigation';
import Footer from './Footer'
function Layout(props) {
    return (
        <>
            <Navigation/>
            {/* <div className='row '>
                <div className='col-lg-2'>
                    <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark " style={{width: "100%",height:"91vh",margin:0,position:'relative'}}>
                        <Link to="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"></svg>
                        <span class="fs-4">Sidebar</span>
                        </Link>
                        <hr/>
                        <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <Link to="#" class="nav-link active" aria-current="page">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link to="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Orders
                            </Link>
                        </li>
                        <li>
                            <Link to="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Products
                            </Link>
                        </li>
                        <li>
                            <Link to="#" class="nav-link text-white">
                            <svg class="bi me-2" width="16" height="16"></svg>
                            Customers
                            </Link>
                        </li>
                        </ul>
                        <hr/>
                        <div class="dropdown">
                        <Link to="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
                            <strong>mdo</strong>
                        </Link>
                        <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><Link class="dropdown-item" to="#">New project...</Link></li>
                            <li><Link class="dropdown-item" to="#">Settings</Link></li>
                            <li><Link class="dropdown-item" to="#">Profile</Link></li>
                            <li><hr className='dropdown-divider'/></li>
                            <li><Link class="dropdown-item" to="#">Sign out</Link></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-10' style={{position:'absolute',left:"15.45vw",backgroundColor:'red'}}>
                    <Outlet/>
                </div>
            </div>
             */}
             
                 <Outlet/>

                 <Footer/>
             
        </>
    );
}

export default Layout;