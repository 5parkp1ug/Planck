import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';
import { Formik } from "formik";
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../store/user'


const Login = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  if (user) {
    return (
        <Redirect to={'/dashboard'} />
    )
  }
  return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="card text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values, {setSubmitting, resetForm}) => {
                      // When button submits form and form is in the process of submitting, submit button is disabled
                      setSubmitting(true);

                        setTimeout(() => {
                            dispatch(login(values.username, values.password));
                            resetForm();
                            setSubmitting(false);
                        }, 500);
                    }}
                    validator={() => ({})}
                >
                  {({values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting}) => (
                      <Form className="pt-3" onSubmit={handleSubmit}>
                        <Form.Group className="d-flex search-field" controlId={"formUsername"}>
                          <Form.Control name="username" type="text" placeholder={"username"} value={values.username} onChange={handleChange} onBlur={handleBlur} size="lg" className="h-auto" />
                        </Form.Group>
                        <Form.Group className="d-flex search-field" controlId={"formPassword"}>
                          <Form.Control name="password" type="password" placeholder={"password"} value={values.password} onChange={handleChange} onBlur={handleBlur} size="lg" className="h-auto" />
                        </Form.Group>
                        <div className="mt-3">
                          <Button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" type="submit" disabled={isSubmitting}>SIGN IN</Button>
                        </div>
                        <div className="my-2 d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <label className="form-check-label text-muted">
                              <input type="checkbox" className="form-check-input"/>
                              <i className="input-helper"></i>
                              Keep me signed in
                            </label>
                          </div>
                          <a href="!#" onClick={event => event.preventDefault()} className="auth-link text-muted">Forgot password?</a>
                        </div>
                        {/*<div className="mb-2">*/}
                        {/*  <button type="button" className="btn btn-block btn-facebook auth-form-btn">*/}
                        {/*    <i className="mdi mdi-facebook mr-2"></i>Connect using facebook*/}
                        {/*  </button>*/}
                        {/*</div>*/}
                        <div className="text-center mt-4 font-weight-light">
                          Don't have an account? <Link to="/register" className="text-primary">Create</Link>
                        </div>
                      </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login;
