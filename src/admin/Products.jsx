import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Products extends Component {
  render() {
    return (
      <>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                    <Link to="/admin/products/addProducts">Add Product</Link>
                  </div>
                  <div className="col-lg-6">
                    <Link to="/viewproducts">View Products</Link>
                  </div>
              </div>
          </div>
      </>
    )
  }
}
