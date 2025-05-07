import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../styles/PopupForm.css';

const PopupForm = () => {
  const [show, setShow] = useState(false);

  // Show on load and every 2 minutes
  useEffect(() => {
    setShow(true); // Show initially
    const interval = setInterval(() => {
      setShow(true);
    }, 120000); // 2 minutes

    return () => clearInterval(interval); // Cleanup
  }, []);

  const handleClose = () => setShow(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setShow(false);
  };

  return (
    <Modal show={show} onHide={handleClose} centered backdrop="static">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="popup-form-container"
      >
        <Modal.Header closeButton>
          <Modal.Title>Get Started</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="form-styled">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number" required />
            </Form.Group>

            <Form.Group controlId="formSelect" className="mb-4">
              <Form.Label>I'm here to:</Form.Label>
              <Form.Select required>
                <option value="">Select an option</option>
                <option value="job">Find a Job</option>
                <option value="hire">Hire a Talent</option>
              </Form.Select>
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </motion.div>
    </Modal>
  );
};

export default PopupForm;
