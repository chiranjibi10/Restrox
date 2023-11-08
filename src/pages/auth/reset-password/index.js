import React from 'react'
import { Col, Form, Row } from 'react-bootstrap';

// layout 
import AuthLayout from '../../../layouts/AuthLayout/AuthLayout';

// components 
import { Link } from 'react-router-dom';
import { NioCard, NioBrand, NioField, NioButton } from '../../../components';

export default function ResetPassword() {

  return (
    <AuthLayout title="Reset Password" rootClass="layout-1">
      <NioCard className="nk-form-card card-gutter-md nk-auth-form-card mx-md-9 mx-xl-auto" >
        <NioCard.Body>
          <div className="nk-form-card-head text-center pb-5">
            <div className="form-logo mb-2">
              <NioBrand logo="s1" variant="dark" />
            </div>
            <h3 className="title mb-2">Reset Password</h3>
            <p className="text">Shouldn't Be Here? <Link to="/auth/login" className="btn-link text-primary">Login</Link>.</p>
          </div>
          <Form onSubmit={e => e.preventDefault()}>
            <Row className="gy-4">
              <Col xs={12}>
                <NioField htmlFor="password" label="Password">
                  <NioField.Input
                    id="password"
                    type="password"
                    icon="eye-fill after text-primary"
                    placeholder="At Least 8 Characters"
                  />
                </NioField>
              </Col>
              <Col xs={12}>
                <NioField htmlFor="cpassword" label="Confirm Password">
                  <NioField.Input
                    id="cpassword"
                    type="password"
                    icon="eye-fill after text-primary"
                    placeholder="Password Must Match"
                  />
                </NioField>
              </Col>
              <Col xs={12}>
                <div className="form-group">
                  <NioButton
                    href="/auth/login"
                    label="Reset Password"
                    className="btn-block btn-primary"
                  />
                </div>
              </Col>
            </Row>
          </Form>
        </NioCard.Body>
      </NioCard>
    </AuthLayout >
  )
}
