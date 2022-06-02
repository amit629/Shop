import axios from 'axios';
import React, { Component } from 'react'
import {Form,Field} from 'react-final-form';
import { connect } from 'react-redux';
import { fetchCategories } from '../action/index';
class AddCategory extends Component {
  constructor(props){
    super(props)
    this.state={
      check:0
    }
  }
  onSubmit=(values)=>{
    axios.post("http://localhost:5000/categories",values);
    this.setState((prev)=>({
      check:prev.check+1
    }))
    
  }
  componentDidMount(){
    this.props.fetchCategories();
  }
  
  componentDidUpdate(prevProps,prevState)
  {
    console.log(prevState," ",prevProps," ",this.state.check," ",this.props.categories)
    
    if(prevState.check!==this.state.check ){
      this.setState({check:0})
      this.props.fetchCategories();
    }
  }
  render() {
    return (
      <>
        <div className='container-fluid'>
          <div className="row m-0">
            <div className="col-lg-6 ">
            <h2 className="mb-3">Add Category</h2>
            <Form
              onSubmit={this.onSubmit}
              initialValues={{ categoryName:"" }}
              subscription={{ submitting: true, pristine: true }}
            >
              {({ handleSubmit, form, submitting, pristine }) => (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>First Name</label>
                    <Field
                      name="categoryName"
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
            <div className="col-lg-6">
                <h2>
                  All Category
                </h2>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Category Name</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.categories.map((cat)=>{
                        return (
                          <tr key={cat.id}>
                            <td>{cat.categoryName}</td>
                            <td>
                              <button className="btn btn-info">Edit</button>
                              &nbsp;
                              <button className='btn btn-danger' >Delete</button>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            </div>
          </div>
        </div>
          
      </>
    )
  }
}
const mapStateToProps=(state,ownProps)=>{
  return{
    categories:state.allCategories
  }
}
export default connect(mapStateToProps,{fetchCategories})(AddCategory)
