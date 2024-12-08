import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Resume = () => {
  return (
    <section id="resume" className="py-5 my-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h2 className="section-heading text-uppercase">Resume</h2>
              <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
              </div>
              <p className="section-subheading text-muted"></p>
            </div>
            <div className="text-center">
              <Button variant="primary" href="/resume (3).pdf" target="_blank" rel="noopener noreferrer">Download Resume</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
