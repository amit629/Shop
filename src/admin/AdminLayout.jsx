import React, { Component } from "react";
import { Link ,Outlet } from "react-router-dom";
import NavComp from "./subComp/NavComp";
import SideBarComp from "./subComp/SideBarComp";

class AdminLayout extends Component {
  render() {
    return (
      <>
        <NavComp/>
        
        <div className="container-fluid p-0">
            <div className="row g-0">
                <div className="col-2">
                    <SideBarComp/>
                </div>
                <div className="col-10">
                    <Outlet/>
                </div>
            </div>
        </div>
                
      </>
    );
  }
}

export default AdminLayout;
