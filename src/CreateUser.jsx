import React from 'react';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import FormStateFromRedux from './FormStateFromRedux';
import FormStateToRedux from './FormStateToRedux';
import { getFormState, updateFormState } from './action/index';
import { FormSpy } from 'react-final-form'
import axios from 'axios';
function CreateUser(props) {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = async values => {
    axios.post('http://localhost:5001/user',values)
  }
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={{ employed: true, stooge: 'larry' }}
        subscription={{ submitting: true, pristine: true }}
      >
        {({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            {/* <FormStateToRedux form="example" /> */}
            <div>
              <label>Username</label>
              <Field
                name="userName"
                component="input"
                type="text"
                placeholder="User Name"
              />
            </div>
            <div>
              <label>Email</label>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="email"
              />
            </div>
            <div>
              <label>Password</label>
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="Password"
              />
            </div>
            <div className="buttons">
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
           
            {/* <FormStateFromRedux form="example" /> */}
            <FormSpy onChange={state => updateFormState(form, state)} />
          </form>
        )}
      </Form>
      
    </div>
  );
}

export default connect((state, ownProps) => ({
  state: getFormState(state, ownProps.form)
}),{updateFormState}) (CreateUser);