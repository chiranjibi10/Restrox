import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioCard, NioFilterTab, NioIcon, NioMedia } from '../../components';

// section content 
import PreBuiltContent from '../../components/PageComponents/Landing/PreBuiltContent/PreBuiltContent';


function index() {

  return (
    <AppLayout variant={1} title="SaaS & App Landing" rootClass="layout-1">

      {/* Banner Section Start  */}
      <section className="nk-banner nk-banner-landing overflow-hidden">
        <div className="nk-mask shape"  ></div>
        <div className="nk-mask blur" ></div>
        <div className="nk-banner-wrap pb-0">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="pb-5 pb-lg-7 text-center">
                  <span className="label text-bg-primary fs-12 mb-2 mb-md-3">
                    React Template
                    <span className="badge badge-text--sm bg-red ms-1 mt-n3 position-absolute rounded-pill">
                      v1.0
                    </span>
                  </span>
                  <h1 className="text-capitalize display-6 mb-2">
                    Build better websites to turn your ideas into reality
                  </h1>
                  <p className="fs-18 m-0">
                    NioLand is React Landing Template which is packed with a great collection of 20+ flexible & creative landing page templates to promote your Software, App, SaaS, Startup or business projects.
                  </p>
                  <ul className="d-flex flex-wrap align-items-center justify-content-center gap-3 pt-5">
                    <li>
                      <div className="badge-feature border">
                        <img src="images/icon/bootstrap.png" alt="icon" />
                      </div>
                    </li>
                    <li>
                      <div className="badge-feature border">
                        <img src="images/icon/scss.png" alt="icon" />
                      </div>
                    </li>
                    <li>
                      <div className="badge-feature border">
                        <img src="images/icon/js.png" alt="icon" />
                      </div>
                    </li>
                    <li>
                      <div className="badge-feature border">
                        <img src="images/icon/react.png" alt="icon" />
                      </div>
                    </li>
                    <li>
                      <div className="badge-feature border">
                        <img src="images/icon/react-router.png" alt="icon" />
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="nk-frame text-center">
                  <img src="images/landing/banner-cover.png" alt="thumb-cover" className="nk-frame-base" />
                  <div className="nk-frame-children nk-frame-children-one">
                    <img src="images/landing/banner-cover-a.png" alt="thumb-cover" />
                  </div>
                  <div className="nk-frame-children nk-frame-children-two">
                    <img src="images/landing/banner-cover-b.png" alt="thumb-cover" />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* Banner Section End */}

      {/* Demos Section Start  */}
      <NioSection className="nk-section-demos pt-7" id="demo">
        <NioSection.Head className="pb-5" space={false} alignX="center">
          <h2> Modern <span className="text-primary">Home Demos</span></h2>
          <p className="fs-20"> 10+ modern, hand-made designs to get you going. Select your favorite and begin customizing it for your website. </p>
        </NioSection.Head>
        <NioSection.Content>
          <NioFilterTab />
        </NioSection.Content>
      </NioSection>
      {/* Demos Section End*/}

      {/* Pre-Built Section Start  */}
      <NioSection>
        <NioSection.Head alignX="center">
          <h2> Pre-Built <span className="text-primary">Pages</span></h2>
          <p className="fs-20"> Don’t go by our words, check out our well-crafted demos to experience the most variety of all pages and screens you need. </p>
        </NioSection.Head>
        <NioSection.Content className="nk-prebuilt-content">
          <PreBuiltContent />
        </NioSection.Content>
      </NioSection>
      {/* Pre-Built Section End  */}

      {/* Miscell Section Start  */}
      <NioSection className="nk-section-miscell">
        <NioSection.Content className="nk-miscell-content">
          <Row className="flex-row-reverse align-items-center">
            <Col lg={6}>
              <div className="overflow-hidden rounded-4 border mb-5 mb-lg-7 mb-xl-0">
                <img src="images/landing/section-cover-miscellaneous.jpg" alt="miscellaneous" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="mb-5">
                <h2>Miscellaneous <span className="text-primary">Pages</span></h2>
                <p className="fs-20">
                  In NioLand template included all the necessary pages that require in your project. Your can see demo those Pages listed below. </p>
              </div>
              <div className="nk-miscell-include">
                <h4 className="mb-4">Pages Included</h4>
                <ul>
                  <li>
                    <Link to="/404" target="_blank">
                      <NioIcon name="check-circle-fill" className="fs-20 text-primary me-1" />
                      <span className="fs-18"> 404 Error </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions" target="_blank">
                      <NioIcon name="check-circle-fill" className="fs-20 text-primary me-1" />
                      <span className="fs-18"> Terms & Conditions </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/login" target="_blank">
                      <NioIcon name="check-circle-fill" className="fs-20 text-primary me-1" />
                      <span className="fs-18"> Login </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/sign-up" target="_blank">
                      <NioIcon name="check-circle-fill" className="fs-20 text-primary me-1" />
                      <span className="fs-18"> Sign Up </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/forgot-password" target="_blank">
                      <NioIcon name="check-circle-fill" className="fs-20 text-primary me-1" />
                      <span className="fs-18"> Forgot Password </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/auth/reset-password" target="_blank">
                      <NioIcon name="check-circle-fill" className="fs-20 text-primary me-1" />
                      <span className="fs-18"> Reset Password </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Miscell Section End  */}

      {/* Features Section Start  */}
      <NioSection className="nk-section-features" id="features" masks={["blur-7 d-none d-lg-block"]}>
        <Row className="justify-content-center">
          <Col xl={7}>
            <div className="pb-5 pb-lg-7 text-center">
              <h2>Impressive <span className="text-primary">Features</span></h2>
              <p className="fs-20">Unique business need a unique landing page with unique styles. And that's where you need to give NioLand a try.</p>
            </div>
          </Col>
        </Row>
        <NioSection.Content className="nk-section-features-content">
          <Row className="gap g-4">
            <Col xs={12}>
              <div className="features-banner shadow-xl">
                <div className="features-banner-info">
                  <NioCard className="border-0 p-0">
                    <NioCard.Body className="d-flex flex-column">
                      <NioMedia rounded size="xl" variant="primary" icon="view-panel-fill" className="mb-3 mb-md-5 rotate-90" />
                      <h3>Responsive & User-Friendly</h3>
                      <p className="fs-20">
                        Responsive and user-friendly design is pivotal in modern web development, as it guarantees adaptability to diverse devices and fosters an intuitive, enjoyable user experience across the board.
                      </p>
                    </NioCard.Body>
                  </NioCard>
                </div>
                <div className="features-banner-cover">
                  <img src="images/landing/section-cover-frame.png" alt="cover-frame" />
                </div>
              </div>
            </Col>
            <Col className="col-md-6 col-xl-7">
              <NioCard className="border-0 h-100 card-overlay p-0 shadow-xl overflow-hidden">
                <NioCard.Body className="d-flex align-items-center">
                  <div className="d-flex flex-column">
                    <NioMedia rounded size="xl" variant="purple" icon="bootstrap" className="text-white mb-3 mb-md-5" />
                    <h3>Bootstrap 5.x</h3>
                    <p className="lead">
                      Bootstrap 5.x is a versatile front-end framework for building responsive, modern web applications with ease and efficiency.
                    </p>
                  </div>
                  <div className="d-none d-lg-block">
                    <img src="images/brands/h.png" alt="brand-bootstrap" className="shrink-0" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={5}>
              <NioCard className="border-0 h-100 p-0 shadow-xl">
                <NioCard.Body className="d-flex flex-column">
                  <NioMedia rounded size="xl" variant="danger text-white" icon="headphone-fill" className="text-white mb-3 mb-md-5" />
                  <h3>Premium Support</h3>
                  <p className="lead">We believe in happy customers can make your business happy as it's the number one job of our company.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4}>
              <NioCard className="border-0 h-100 p-0 shadow-xl">
                <NioCard.Body className="d-flex flex-column">
                  <NioMedia rounded size="lg" variant="primary" icon="headphone-fill" className=" text-white mb-3 mb-md-5" />
                  <h4>Quality & Clean Code</h4>
                  <p className="card-text">
                    Quality and clean code ensures efficient, error-free software development, performance, and overall user satisfaction.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4}>
              <NioCard className="border-0 h-100 p-0 shadow-xl">
                <NioCard.Body className="d-flex flex-column">
                  <NioMedia rounded size="lg" variant="primary" icon="layout-fill" className="text-white mb-3 mb-md-5" />
                  <h4>Pre-Built Screens</h4>
                  <p className="card-text">
                    Pre-built screens are ready-made interface templates for faster application development, saving time and effort in design.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4}>
              <NioCard className="border-0 h-100 p-0 shadow-xl">
                <NioCard.Body className="d-flex flex-column">
                  <NioMedia rounded size="lg" variant="primary" icon="layer-fill" className="text-white mb-3 mb-md-5" />
                  <h4>Limitless Components</h4>
                  <p className="card-text">
                    Limitless components offer an extensive selection of versatile building blocks, enabling limitless possibilities for creativity.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4}>
              <NioCard className="border-0 h-100 p-0 shadow-xl">
                <NioCard.Body className="d-flex flex-column">
                  <NioMedia rounded size="lg" variant="primary" icon="repeat-fill" className="mb-3 mb-md-5" />
                  <h4>Continuous Updates</h4>
                  <p className="card-text">
                    Continuous updates provide ongoing enhancements and improvements, ensuring your software or service remains up-to-date.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4}>
              <NioCard className="border-0 h-100 p-0 shadow-xl">
                <NioCard.Body className="d-flex flex-column">
                  <NioMedia rounded size="lg" variant="primary" icon="puzzle-fill" className="\text-white mb-3 mb-md-5" />
                  <h4>Easy Customizable</h4>
                  <p className="card-text">
                    Easy customizable features enable effortless personalization, allowing users to tailor the product to their specific preferences.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4}>
              <NioCard className="border-0 h-100 p-0 shadow-xl">
                <NioCard.Body className="d-flex flex-column">
                  <NioMedia rounded size="lg" variant="primary" icon="b-chrome" className="text-white mb-3 mb-md-5" />
                  <h4>Browser Compatibility</h4>
                  <p className="card-text">
                    Browser compatibility ensures seamless performance and functionality across various web browsers, ensuring a consistent.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/* Features Section End  */}

    </AppLayout >
  )
}

export default index;
