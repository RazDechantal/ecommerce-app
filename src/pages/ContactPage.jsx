import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_5z9i8i9', // Replace with your EmailJS service ID
      'template_ojfo70a', // Replace with your EmailJS template ID
      formData,
      'D6aH5ZFMZU25UCvdA' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setShowConfirmation(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
      });
    }).catch((err) => {
      console.error('FAILED...', err);
    });
  };

  return (
    <Container className="contact-container">
      <h1 className="contact-title">Contact  us</h1>
      <p className="contact-subtitle">
        Please contact us via our form or our contact details. We always try to respond within 24 hours.
      </p>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formPhone">
              <Form.Label>Telephone number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Telephone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formEmail">
          <Form.Label>E-Mail</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-Mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="danger" type="submit" className="submit-button">
          Skicka
        </Button>
      </Form>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Your message was sent successfully!</p>
          <Button onClick={() => setShowConfirmation(false)}>OK</Button>
        </div>
      )}
    </Container>
  );
};

export default ContactPage;
