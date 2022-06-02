import React, { Component } from "react";
import { Field, Form } from "react-final-form";
import { Link } from "react-router-dom";

export default class AddProducts extends Component {
  render() {
    const onSubmit = () => {};
    return (
      <div className="container-fluid">
        <div className="row m-0">
          <div className="col-lg-12">
            <h2 className="mb-3">Add Products</h2>
            <Form
              onSubmit={onSubmit}
              initialValues={{ employed: true, stooge: "larry" }}
              subscription={{ submitting: true, pristine: true }}
            >
              {({ handleSubmit, form, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        class="btn btn-danger dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Select Category
                      </button>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item ">
                          <label>
                            <Field
                              name="category"
                              component="input"
                              type="checkbox"
                              value="Clothing"
                              className="w-100"
                            />{" "}
                            Ketchup
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label>First Name</label>
                    <Field
                      name="firstName"
                      component="input"
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>

                  <div className="buttons mb-3">
                    <button type="submit" disabled={submitting || pristine}>
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
