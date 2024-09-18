import React, { useState } from 'react';
import './Contact.css'; // Add necessary styling
import Swal from 'sweetalert2';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

      // Mocking an API call - Replace with your actual API endpoint
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Success alert
          Swal.fire({
            icon: 'success',
            title: 'Message Sent',
            text: 'Your message has been sent successfully!',
          });

          // Reset form data
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        } else {
          // Error alert
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'There was an error sending your message. Please try again later.',
          });
        }
      } catch (error) {
        console.error('Error:', error);

        // Network or other error
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'An error occurred. Please try again later.',
        });
      }
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Enter subject"
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message"
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
