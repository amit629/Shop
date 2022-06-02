import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductComp extends Component {
    hoverImg=()=>{

    }
    deHoverImg=()=>{

    }
    render() {
        return (
            <>
                <div className="sz-card-mt col-lg-2 col-md-2 col-sm-2 pb-1 border mt-3 ms-3" onMouseEnter={this.hoverImg} onMouseLeave={this.deHoverImg}>
                        <div className="card product-item border-0 mb-4">
                            <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img className="img-fluid w-100" src="images/product-1.jpg" alt=""/>
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                                <div className="d-flex justify-content-center">
                                    <h6>$123.00</h6><h6 className="text-muted ml-2"><del>$123.00</del></h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border w-100 position-absolute top-100">
                                <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-eye text-primary mr-1"></i>View Detail</Link>
                                <Link to="" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default ProductComp;