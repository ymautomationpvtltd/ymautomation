import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import "./TopHeader.css";

let iconSize = 25;

const TopHeader = () => {
	return (
		<motion.header
			className="top-header"
			initial={{ y: "-120%", opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			exit={{ y: "-120%", opacity: 0 }}
			transition={{
				duration: 0.85,
				delay: 0.1,
				ease: [0.76, 0, 0.24, 1],
			}}
		>
			<div className="social-icons-group">
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon-btn"
					aria-label="Facebook"
				>
					<FaFacebookSquare size={iconSize} />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon-btn"
					aria-label="Instagram"
				>
					<RiInstagramFill size={iconSize} />
				</a>
				<a
					href="https://linkedin.com"
					target="_blank"
					rel="noopener noreferrer"
					className="social-icon-btn"
					aria-label="LinkedIn"
				>
					<FaLinkedin size={iconSize} />
				</a>
			</div>

			<Link to="/contact" className="contact-us-pill-btn">
				Contact Us
			</Link>
		</motion.header>
	);
};

export default TopHeader;
