import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./css/signIN.css";
export default class SignIn extends Component {
  render() {
    return (
      <>
       <div className="container-fluid">
            <div className="row h-75 ">
                    <div className="col-lg-6 mrginDiv">
                        <div class="offset-1">
                        <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{color:"#709085"}}></i>
                        <span class="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 ">

                            <form className="ExpandForm colorClass">

                                <h3 class="fw-normal mb-3 pb-3" style={{letterSpacing:"1px" }}>Log in</h3>
                                <div className="row">
                                        <div class="form-outline mb-4">
                                            <input type="email" id="form2Example18" class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example18">Email address</label>
                                        </div>

                                        <div class="form-outline mb-4">
                                            <input type="password" id="form2Example28" class="form-control form-control-lg" />
                                            <label class="form-label" for="form2Example28">Password</label>
                                        </div>

                                        <div class="pt-1 mb-4">
                                            <button class="btn btn-info btn-lg btn-block" type="button">Login</button>
                                        </div>

                                        <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
                                        <p>Don't have an account? <a href="#!" class="link-info">Register here</a></p>
                                    </div>
                            </form>

                        </div>
                        </div>
                <div className="col-lg-6 imageColoumn mrginDiv  ">

                </div>
           </div>
       </div>
      </>
    );
  }
}
