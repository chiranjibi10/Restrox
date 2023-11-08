import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

// layout 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';

// components
import { NioBrand, NioButton, NioCard } from '../../../components';
import NioField from '../../../components/NioField/NioField';


export default function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formErrors, setFormErrors] = useState([]); // State to store the errors

  useEffect(() => {

    // Convert the errors object to an array of objects
    const fieldErrors = Object.entries(errors).map(([field, error]) => ({
      field,
      message: error.message,
    }));

    setFormErrors(fieldErrors); // Store the errors in the state

  }, [errors]); // Run this effect whenever the 'errors' object changes


  function onSubmit(data) {

    console.log(data);

    // Filter out valid fields from formErrors array
    const filteredErrors = formErrors.filter(error => errors[error.field]);
    setFormErrors(filteredErrors);
    // Handle form submission logic here if needed
  }


  console.log(formErrors)

  return (
    <AuthLayout title="Login" rootClass="layout-1">
      <NioCard className="nk-form-card rounded-3 card-gutter-md nk-auth-form-card mx-md-9 mx-xl-auto" >
        <NioCard.Body className="p-5">
          <div className="nk-form-card-head text-center pb-5">
            <div className="form-logo mb-3">
              <NioBrand
                logo="s1"
                variant="dark"
                imageRoot="../images/"
              />
            </div>
            <h3 className="title mb-2">Login to your account</h3>
            <p className="text">Not a member yet? <Link to="/auth/sign-up" className="btn-link text-primary">Sign Up</Link>.</p>
          </div>
          <FormProvider>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="gy-4">
                <Col xs={12}>
                  <NioField htmlFor="email" label="Email">
                    <NioField.Input
                      id="email"
                      type="email"
                      htmlFor="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid Email Address"
                        }
                      })}
                    />
                  </NioField>
                </Col>
                <Col xs={12}>
                  <NioField htmlFor="password" label="Password">
                    <NioField.Input
                      id="password"
                      type="password"
                      {...register("password", {
                        required: "Password Is Required"
                      })}
                      icon="eye-fill after text-primary"
                      placeholder="Enter your password"
                    />
                  </NioField>
                </Col>
                <Col xs={12}>
                  <div className="d-flex flex-wrap align-items-center  justify-content-between text-center">
                    <NioField.Check id="check1" {...register("check1")}>
                      Remember Me
                    </NioField.Check>
                    <a href="/auth/forgot-password" className="d-inline-block fs-16">Forgot Password?</a>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="form-group">
                    <NioButton
                      href="/"
                      label="Login to Your Account"
                      className="btn-block btn-primary" />
                  </div>
                </Col>
              </Row>
            </form>
          </FormProvider>
          <div className="pt-4 text-center">
            <div className="small overline-title-sep">
              <span className="bg-white px-2 text-uppercase text-base">or login with</span>
            </div>
          </div>
          <div className="pt-4">
            <NioButton
              href="#"
              label="Login With Google"
              img="../images/icon/a.png"
              className="border border-lighter text-nowrap text-dark w-100"
            />
          </div>
        </NioCard.Body>
      </NioCard>
    </AuthLayout >
  )
}
