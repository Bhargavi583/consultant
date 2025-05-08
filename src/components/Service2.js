import React from 'react';
import '../styles/Service1.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const ITStaffingPage = () => {
  return (
    <div className="services-page">
      {/* Staffing Consulting Section */}
      <section className="consulting-section py-5 text-white text-center">
        <Container>
          <h1>IT Staffing & Consulting for Companies</h1>
          <p className="lead mt-3">
            We help businesses find top-tier IT talent across a wide range of roles including Software Development,
            Cloud Engineering, DevOps, Cybersecurity, and more.
          </p>
        </Container>
      </section>

      {/* Available Talent Pool */}
      <section className="job-openings py-5">
        <Container>
          <h2 className="text-center mb-4">Available IT Talent</h2>
          <Row className="g-4">
            {[
              { role: 'Full Stack Developer', skills: 'React, Node.js, MongoDB', location: 'Remote' },
              { role: 'Cloud Architect', skills: 'AWS, Azure, Terraform', location: 'Bangalore' },
              { role: 'Security Analyst', skills: 'SIEM, Pen Testing, ISO 27001', location: 'Hyderabad' },
            ].map((candidate, idx) => (
              <Col md={4} key={idx}>
                <Card className="job-card h-100">
                  <Card.Body>
                    <Card.Title>{candidate.role}</Card.Title>
                    <Card.Text>
                      Skills: <strong>{candidate.skills}</strong><br />
                      Location: {candidate.location}
                    </Card.Text>
                    <Button variant="primary" className="w-100">Request Profile</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Partner With Us */}
      <section className="walkin-section py-5 text-white text-center">
        <Container>
          <h2>Partner With Us for Staffing Solutions</h2>
          <p className="mt-3">
            Whether you need short-term contractors, permanent hires, or project-based teams,
            our IT staffing experts are ready to deliver tailored solutions for your business.
          </p>
          <Button variant="light" className="mt-3 px-4">Schedule a Consultation</Button>
        </Container>
      </section>
    </div>
  );
};

export default ITStaffingPage;
