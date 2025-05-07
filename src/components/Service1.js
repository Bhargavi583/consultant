import React from 'react';
import '../styles/Services1.css';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const ServicesPage = () => {
  return (
    <div className="services-page">
      {/* Consulting Section */}
      <section className="consulting-section py-5 text-white text-center">
        <Container>
          <h1>Job Consulting for IT Students</h1>
          <p className="lead mt-3">
            We help students find jobs across various IT domains including Web Development, Data Science,
            Cloud, DevOps, Cybersecurity, and more.
          </p>
        </Container>
      </section>

      {/* Job Openings */}
      <section className="job-openings py-5">
        <Container>
          <h2 className="text-center mb-4">Current Job Openings</h2>
          <Row className="g-4">
            {[
              { title: 'Frontend Developer', company: 'TechWave', location: 'Bangalore' },
              { title: 'DevOps Engineer', company: 'CloudCore', location: 'Hyderabad' },
              { title: 'Data Analyst', company: 'InfoBase', location: 'Chennai' },
            ].map((job, idx) => (
              <Col md={4} key={idx}>
                <Card className="job-card h-100">
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Text>
                      Company: <strong>{job.company}</strong><br />
                      Location: {job.location}
                    </Card.Text>
                    <Button variant="primary" className="w-100">Apply for Job</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Walk-In Interviews */}
      <section className="walkin-section py-5 text-white text-center">
        <Container>
          <h2>Upcoming Walk-In Interviews</h2>
          <p className="mt-3">
            Attend our walk-in drives to meet recruiters directly. Bring your resume and be interview-ready!
          </p>
          <ul className="walkin-list list-unstyled mt-4">
            <li><strong>10 May:</strong> Backend Developer - Mumbai</li>
            <li><strong>12 May:</strong> UI/UX Designer - Pune</li>
            <li><strong>15 May:</strong> QA Tester - Bangalore</li>
          </ul>
          <Button variant="light" className="mt-3 px-4">View All Walk-ins</Button>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;
