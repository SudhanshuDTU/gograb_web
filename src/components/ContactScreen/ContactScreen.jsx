import React, { useState } from "react";
import { Databases, ID } from "appwrite";
import { client } from "../../appwriteConfig.js";
import "./ContactScreen.css"; // Import your CSS file
import contactImage from "../../assets/contact.png";

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const documentId = ID.unique();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return <Alert>Fill All the Fields to Send Message</Alert>;
    }

    try {
      const databases = new Databases(client);

      // Send data to Appwrite
      await databases.createDocument(
        "6825c8ab0021b2ec8969", // Replace with your database ID
        "6825e32c00283b8b6f68", // Replace with your collection ID
        documentId,
        formData
      );

      // Show success message
      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-screen">
      <div className="contact-hero-section">
        {" "}
        {/* Added a new div for the top section */}
        <div className="contact-header">
          <h1>
            Get in <span className="highlight-text">Touch</span>{" "}
            <span>with Go-Grab</span>
          </h1>
          <p>
            We're here to help you with everything from product inquiries to
            partnership opportunities.
          </p>
          <p>
            Whether you're a campus admin, office manager, or a curious
            customer, our support team is just a message away.
          </p>
        </div>
        <div className="contact-image-container">
          <img src={contactImage} alt="Contact" className="contact-image" />
        </div>
      </div>

      <div className="contact-form-section">
        {" "}
        {/* Added a new div for the form section */}
        {isSubmitted ? (
          <div className="success-message">
            <p>We have got your message, Thanks!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Leave us a message</h2>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Contact No.</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Your Message"
                required
              />
            </div>

            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactScreen;
