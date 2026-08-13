import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// Icons
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookSquare,
	FaLinkedin,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
// Images
import YmLogo from "../../assets/ym-logo.png";
// Css
import "./Contact.css";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		service: "",
		message: "",
	});

	const [submitted, setSubmitted] = useState(false);

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	setSubmitted(true);
	// 	setTimeout(() => setSubmitted(false), 4000);
	// };

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		const subject = "New Website Inquiry - YM Automation";

		const body = `
			Name: ${formData.name}
			Phone: ${formData.phone}
			Email: ${formData.email}
			Service: ${formData.service}
			
			Message:
			${formData.message}
				`.trim();

		window.location.href =
			`mailto:ksprakhar2410.com` +
			`?subject=${encodeURIComponent(subject)}` +
			`&body=${encodeURIComponent(body)}`;

		setTimeout(() => setSubmitted(false), 4000);
	};

	return (
		<motion.div
			className="contact-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
		>
			<div className="contact-content-wrapper">
				{/* Main 2-Column Contact Grid */}
				<div className="contact-main-grid">
					{/* Left Column: Contact Info & Map */}
					<motion.div
						className="contact-left-col"
						initial={{ x: -60, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.1 }}
					>
						<h1 className="contact-page-title">
							<span className="contact-title-bar" />
							<span className="contact-title-main">
								Get In Touch
							</span>
						</h1>
						<p className="contact-subtitle-text">
							Have an industrial automation requirement or custom
							machine project? Connect with our engineering
							specialists in Coimbatore today.
						</p>

						<div className="contact-info-list">
							<div className="contact-info-item">
								<div className="info-icon-badge">
									<FaPhoneAlt />
								</div>
								<a
									href="tel:+919489023450"
									className="info-text-label"
									style={{
										textDecoration: "none",
										color: "inherit",
									}}
								>
									+91 94890 23450
								</a>
							</div>

							<div className="contact-info-item">
								<div className="info-icon-badge">
									<FaEnvelope />
								</div>
								<a
									href="mailto:ym@ymautomation.com"
									className="info-text-label"
									style={{
										textDecoration: "none",
										color: "inherit",
									}}
								>
									ym@ymautomation.com
								</a>
							</div>

							<div className="contact-info-item">
								<div className="info-icon-badge">
									<FaMapMarkerAlt />
								</div>
								<span className="info-text-label">
									No. 2/395, SF No. 240/2, Sengalipalayam,
									NGGO Colony Post, Idigarai Road, Coimbatore
									- 641022, Tamil Nadu, India
								</span>
							</div>
						</div>

						{/* Map Card Preview */}
						<div className="contact-map-card">
							<img
								src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
								alt="YM Automation Coimbatore Location Map"
								className="contact-map-img"
							/>
						</div>
					</motion.div>

					{/* Right Column: Let's Talk Form */}
					<motion.div
						className="contact-right-col"
						initial={{ x: 60, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.7, delay: 0.2 }}
					>
						<h2 className="form-heading">Let’s Talk</h2>

						<form
							onSubmit={handleSubmit}
							className="contact-form-box"
						>
							<input
								type="text"
								placeholder="Enter your name"
								required
								className="form-input-field"
								value={formData.name}
								onChange={(e) =>
									setFormData({
										...formData,
										name: e.target.value,
									})
								}
							/>

							<input
								type="tel"
								placeholder="+91 Phone Number"
								required
								className="form-input-field"
								value={formData.phone}
								onChange={(e) =>
									setFormData({
										...formData,
										phone: e.target.value,
									})
								}
							/>

							<input
								type="email"
								placeholder="Email address"
								required
								className="form-input-field"
								value={formData.email}
								onChange={(e) =>
									setFormData({
										...formData,
										email: e.target.value,
									})
								}
							/>

							<select
								className="form-select-field"
								value={formData.service}
								onChange={(e) =>
									setFormData({
										...formData,
										service: e.target.value,
									})
								}
							>
								<option value="">
									Select Service / Inquiry Type
								</option>

								<option value="Customized Software Solutions">
									Customized Software Solutions
								</option>

								<option value="Industrial Automation">
									Industrial Automation
								</option>

								<option value="Special Purpose Machine">
									Special Purpose Machine
								</option>

								<option value="Industrial IoT & Industry 4.0">
									Industrial IoT & Industry 4.0
								</option>

								<option value="CNC & SPM Machines Retrofit">
									CNC & SPM Machines Retrofit
								</option>

								<option value="Control Panel Automation">
									Control Panel Automation
								</option>

								<option value="Renewable Energy">
									Renewable Energy
								</option>

								<option value="Battery Management System">
									Battery Management System
								</option>

								<option value="Mechanical & Electrical Design">
									Mechanical & Electrical Design
								</option>

								<option value="PLC, HMI, VFD Development">
									PLC, HMI, VFD Development
								</option>

								<option value="Process Automation">
									Process Automation
								</option>

								<option value="Other">
									Other / General Inquiry
								</option>
							</select>

							<textarea
								placeholder="Briefly describe your automation project requirements...."
								rows="4"
								className="form-textarea-field"
								value={formData.message}
								onChange={(e) =>
									setFormData({
										...formData,
										message: e.target.value,
									})
								}
							/>

							<button type="submit" className="form-submit-btn">
								{submitted ?
									"Thank You! Message Sent Successfully"
								:	"Submit Inquiry"}
							</button>
						</form>
					</motion.div>
				</div>

				{/* Bottom Footer Card (Matching Image 1) */}
				<motion.div
					className="contact-footer-card"
					initial={{ y: 40, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.3 }}
				>
					<div className="footer-wave-bg" />

					{/* Left Brand */}
					<div className="footer-brand-block">
						<img
							src={YmLogo}
							alt="YM Automation Pvt Ltd Logo"
							className="footer-logo-img"
						/>
						<div>
							<h3 className="footer-company-name">
								YM Automation Pvt Ltd
							</h3>
							<p className="footer-tagline">
								The Mechatronics You Need
							</p>
						</div>
					</div>

					{/* Middle Quick Links */}
					<div className="footer-links-block">
						<h4 className="footer-links-title">Quick Links</h4>
						<div className="footer-links-row">
							<Link to="/" className="footer-nav-link">
								Home
							</Link>
							<Link to="/about" className="footer-nav-link">
								About
							</Link>
							<Link to="/services" className="footer-nav-link">
								Services
							</Link>
							<Link to="/gallery" className="footer-nav-link">
								Gallery
							</Link>
						</div>
					</div>

					{/* Right Social Badges */}
					<div className="footer-social-block">
						<h4 className="footer-social-title">Connect With Us</h4>
						<div className="footer-social-icons">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-social-badge"
								aria-label="Facebook"
							>
								<FaFacebookSquare />
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-social-badge"
								aria-label="Instagram"
							>
								<RiInstagramFill />
							</a>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="footer-social-badge"
								aria-label="LinkedIn"
							>
								<FaLinkedin />
							</a>
						</div>
					</div>
				</motion.div>

				{/* Copyright Line */}
				<p className="contact-copyright-line">
					Copyright © 2026 YM Automation Private Limited. All rights
					reserved.
				</p>
			</div>
		</motion.div>
	);
};

export default Contact;
