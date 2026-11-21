import React, { useState } from 'react';
import './css/contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your API call or EmailJS logic here
        alert(`Thank you ${formData.name}, we will get back to you shortly!`);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };

    return (
        <div className="contact-container">
            {/* PAGE HEADER */}
            <section className="contact-hero">
                <h1 className="contact-title">Get In Touch</h1>
                <p className="contact-subtitle">
                    We'd love to hear from you. Visit our showroom or send us a message.
                </p>
            </section>

            {/* MAIN CONTENT: INFO + FORM */}
            <section className="contact-content">
                {/* LEFT: CONTACT INFO */}
                <div className="contact-info">
                    <h2>Contact Information</h2>
                    <p className="info-desc">
                        Have a question about our collection, custom orders, or gold rates?
                        Reach out to our team today.
                    </p>

                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <div>
                            <h4>Our Showroom</h4>
                            <p>123 Gold Plaza, Main Boulevard,<br />Lahore, Pakistan</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">📞</span>
                        <div>
                            <h4>Call Us</h4>
                            <p>+92 300 1234567<br />+92 42 35789000</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">✉️</span>
                        <div>
                            <h4>Email Us</h4>
                            <p>info@asadmukhtar.com<br />sales@asadmukhtar.com</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="info-icon">🕒</span>
                        <div>
                            <h4>Working Hours</h4>
                            <p>Mon - Sat: 10:00 AM - 9:00 PM<br />Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT: CONTACT FORM */}
                <div className="contact-form-wrapper">
                    <h2>Send Us a Message</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+92 300 0000000"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a topic</option>
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Custom Order">Custom Order</option>
                                    <option value="Gold Rates">Gold Rates</option>
                                    <option value="Buyback">Buyback / Exchange</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </section>

            {/* MAP PLACEHOLDER */}
            <section className="map-section">
                <div className="map-placeholder">
                    <span>📍 Google Map Location Placeholder</span>
                </div>
            </section>
        </div>
    );
}