import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class ProductDetails extends Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-secondary mb-5">
            <div className="d-flex flex-column align-items-center justify-content-center"style={{minHeight:"300px"}}>
                <h1 className="font-weight-semi-bold text-uppercase mb-3">Shop Detail</h1>
                <div className="d-inline-flex">
                    <p className="m-0 "><Link className="text-primary" to="/" style={{textDecoration:"none"}}>Home</Link></p>
                    <p className="m-0 px-2">-</p>
                    <p className="m-0">Shop Detail</p>
                </div>
            </div>
        </div>

        <div className="container-fluid py-5">
        <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
                <div id="carouselExampleControls" className="carousel slide carousel-dark " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="images/product-1.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="images/product-2.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="images/product-3.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="images/product-4.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="col-lg-7 pb-5">
                <h3 className="font-weight-semi-bold">Colorful Stylish Shirt</h3>
                <div className="d-flex mb-3">
                    <div className="text-primary mr-2">
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star"></small>
                        <small className="fas fa-star-half-alt"></small>
                        <small className="far fa-star"></small>
                    </div>
                    <small className="pt-1">(50 Reviews)</small>
                </div>
                <h3 className="fw-bold mb-4">$150.00</h3>
                <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.</p>
                <div className="d-flex mb-3 fs-5 "> 
                    <p className="text-dark fw-bold mb-0 mr-3 me-3">Sizes:</p>
                    <form style={{color:"gray"}}>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="size-1" name="size" />
                            <label className="form-check-label" for="size-1">XS</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="size-2" name="size" />
                            <label className="form-check-label" for="size-2">S</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="size-3" name="size" />
                            <label className="form-check-label" for="size-3">M</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="size-4" name="size" />
                            <label className="form-check-label" for="size-4">L</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="size-5" name="size" />
                            <label className="form-check-label" for="size-5">XL</label>
                        </div>
                    </form>
                </div>
                <div className="d-flex mb-4 fs-5">
                    <p className="text-dark fw-bold mb-0 mr-3 me-3">Colors:</p>
                    <form style={{color:"gray"}}>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ">
                            <input type="radio" className="form-check-input me-2" id="color-1" name="color" />
                            <label className="form-check-label" for="color-1">Black</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="color-2" name="color" />
                            <label className="form-check-label" for="color-2">White</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="color-3" name="color" />
                            <label className="form-check-label" for="color-3">Red</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="color-4" name="color" />
                            <label className="form-check-label" for="color-4">Blue</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline form-check-inline ms-1">
                            <input type="radio" className="form-check-input me-2" id="color-5" name="color" />
                            <label className="form-check-label" for="color-5">Green</label>
                        </div>
                    </form>
                </div>
                <div className="d-flex align-items-center mb-4 pt-2">
                    <div className="input-group quantity mr-3 border" style={{width:"130px"}}>
                        <div className="input-group-btn " >
                            <button className="btn btn-primary btn-minus rounded-0 border-0" style={{backgroundColor:"#c5837c"}}>
                            <i className="fa fa-minus "></i>
                            </button>
                        </div>
                        <input type="text" className="form-control bg-secondary text-center rounded-0 border-0" style={{backgroundColor:"white"}} value="1" />
                        <div className="input-group-btn">
                            <button className="btn btn-primary btn-plus rounded-0 border-0 outline-0" style={{backgroundColor:"#c5837c"}}>
                                <i className="fa fa-plus "></i>
                            </button>
                        </div>
                    </div>
                    <button className="btn btn-primary px-3 ms-2 border-0 rounded-0" style={{backgroundColor:"#c5837c"}}><i className="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                </div>
                <div className="d-flex pt-2">
                    <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
                    <div className="d-inline-flex">
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link className="text-dark px-2" to="">
                            <i className="fab fa-pinterest"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="row px-xl-5">
            <div className="col">
                <div className="nav nav-tabs justify-content-center border-secondary mb-4 " >
                <ul className="nav nav-tabs " id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active btn_custom_prim" id="home-tab" data-bs-toggle="tab" data-bs-target="#tab-pane-1" type="button" role="tab" aria-controls="home" aria-selected="true">Description</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link btn_custom_prim" id="profile-tab " data-bs-toggle="tab" data-bs-target="#tab-pane-2" type="button" role="tab" aria-controls="profile" aria-selected="false">Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link btn_custom_prim" id="contact-tab" data-bs-toggle="tab" data-bs-target="#tab-pane-3" type="button" role="tab" aria-controls="contact" aria-selected="false">Reviews(1)</button>
                    </li>
                </ul>
                </div>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3">Product Description</h4>
                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                    </div>
                    <div className="tab-pane fade" id="tab-pane-2">
                        <h4 className="mb-3">Additional Information</h4>
                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">
                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                    </li>
                                    <li className="list-group-item px-0">
                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                    </li>
                                    <li className="list-group-item px-0">
                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                    </li>
                                    <li className="list-group-item px-0">
                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                    </li>
                                  </ul> 
                            </div>
                            <div className="col-md-6">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item px-0">
                                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                                    </li>
                                    <li className="list-group-item px-0">
                                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                                    </li>
                                    <li className="list-group-item px-0">
                                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                                    </li>
                                    <li className="list-group-item px-0">
                                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                                    </li>
                                  </ul> 
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="tab-pane-3">
                        <div className="row">
                            <div className="col-md-6">
                                <h4 className="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                                <div className="media mb-4">
                                    <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width:"45px"}} />
                                    <div className="media-body">
                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                        <div className="text-primary mb-2">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <h4 className="mb-4">Leave a review</h4>
                                <small>Your email address will not be published. Required fields are marked *</small>
                                <div className="d-flex my-3">
                                    <p className="mb-0 mr-2">Your Rating * :</p>
                                    <div className="text-primary">
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                        <i className="far fa-star"></i>
                                    </div>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <label for="message">Your Review *</label>
                                        <textarea id="message" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label for="name">Your Name *</label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Your Email *</label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="submit" value="Leave Your Review" className="btn btn-primary px-3"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    )
  }
}
