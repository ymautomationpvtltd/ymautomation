import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Icons
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
// Images
import RoboArm from "../../assets/robot-arm.png";
// CSS
import "./HomeMain.css";

const HomeMain = () => {
	return (
		<div className="home-main-container">
			<div className="home-content-wrapper">
				{/* Left Column: Hero Text & Call to Action */}
				<motion.div
					className="hero-text-block"
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ y: 50, opacity: 0 }}
					transition={{
						duration: 0.5,
						delay: 0.2,
						ease: [0.76, 0, 0.24, 1],
					}}
				>
					<h1 className="hero-title">
						Transforming Manufacturing with Intelligent Automation
					</h1>

					<p className="hero-description">
						YM Automation Private Limited delivers cutting-edge
						Special Purpose Machines (SPM), robotic assembly
						solutions, advanced PLC/SCADA control panels, and
						Industrial IoT smart factory integration to maximize
						industrial throughput and precision.
					</p>

					<Link to="/services" className="hero-cta-btn">
						<span>Explore Our Solutions</span>
						<FaArrowRight />
					</Link>

					{/* Phone Number Bar */}
					<div className="hero-phone-block">
						<span className="phone-yellow-bar" />
						<a
							href="tel:+919489023450"
							className="phone-number-text"
							style={{ textDecoration: "none", color: "inherit" }}
						>
							+91 94890 23450
						</a>
					</div>
				</motion.div>

				{/* Right Column: Robot Arm Graphic with Floor Shadow */}
				<motion.div
					className="hero-robot-wrapper"
					initial={{ y: 100, opacity: 0, scale: 0.95 }}
					animate={{ y: 0, opacity: 1, scale: 1 }}
					exit={{
						rotate: -20,
						opacity: 0,
						transition: { duration: 0.6 },
					}}
					transition={{
						duration: 0.9,
						delay: 0.3,
						ease: [0.76, 0, 0.24, 1],
					}}
				>
					<img
						src={RoboArm}
						alt="YM Automation Industrial Robot Arm Engineering"
						className="hero-robot-img"
					/>
					<div className="hero-robot-shadow" />
				</motion.div>
			</div>
		</div>
	);
};

export default HomeMain;
