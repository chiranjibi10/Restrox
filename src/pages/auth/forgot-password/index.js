import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Col, Form, Row } from 'react-bootstrap';


// layouts 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';

// components 
import { NioButton, NioField, NioToaster, NioBrand, NioCard } from '../../../components';

export default function ForgotPassword() {

  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    'mode': 'onBlur',
    defaultValues: {
      email: '',
    }
  });


  const onSubmit = (data) => {
    console.log(data)

    // success message appear
    setShowSuccess(true)

    // clear field 
    reset()

    // reset isSubmited state after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // redirect to another page 
    navigate('/auth/reset-password')
  };



  return (
    <AuthLayout title="Forgot Password" rootClass="layout-1">
      {
        showSuccess && (
          <NioToaster
            variant="success"
            title="Success"
            message='Your Password sent it to your email'

          />
        )
      }

      <NioCard className="nk-form-card card card-gutter-md nk-auth-form-card mx-md-9 mx-xl-auto" >
        <NioCard.Body>
          <div className="nk-form-card-head text-center pb-5">
            <div className="form-logo mb-1 pb-1">
              <NioBrand />
            </div>
            <h3 className="title mb-2">Password Forgotten?</h3>
            <p className="text">Shouldn't Be Here <Link to="/auth/login" className="btn-link text-primary">Login</Link>.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className="gy-4">
              <Col xs={12}>
                <NioField label="Email" htmlFor="email">
                  <NioField.Input type="email" id="email" placeholder="Enter your email" errors={errors.email} {...register("email", {
                    required: "field is required",
                    pattern: {
                      value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      message: "invalid email address"
                    }
                  })} />
                </NioField>
              </Col>
              <Col xs={12}>
                <div className="form-group">
                  <NioButton className="btn-primary btn-block" label="Send Reset Link" />
                </div>
              </Col>
            </Row>
          </Form>
        </NioCard.Body>
      </NioCard>
    </AuthLayout>
  )
}
