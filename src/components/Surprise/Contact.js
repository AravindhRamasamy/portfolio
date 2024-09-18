import React, { useState } from "react";
import { Row, Form, Button, Modal} from "react-bootstrap";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleClose = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        setModalTitle("Success!");
        setModalMessage("Your message has been sent successfully.");
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" });
      }, (error) => {
        setModalTitle("Error");
        setModalMessage("Failed to send the message. Please try again.");
        setShowModal(true);
      });
  };

  return (
    <>
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Get in <strong className="purple">Touch</strong>
      </h1>
      <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "500px" }}>
        <Form.Group controlId="formName" style={{ paddingBottom: "10px" }}>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" style={{ paddingBottom: "10px" }}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group controlId="formMessage" style={{ paddingBottom: "10px" }}>
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Row>

    <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{modalTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>{modalMessage}</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  </>
  );
}

export default ContactForm;
