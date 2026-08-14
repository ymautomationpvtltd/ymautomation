import React from "react";
import { motion } from "framer-motion";
// Icons
import { FaLightbulb, FaHandshake, FaUserCheck } from "react-icons/fa";
// Images
import MdPicture from "../../assets/yogeshwaran.png";
// Components
import CustomerMarquee from "./CustomerMarquee";
// Css
import "./About.css";

const About = () => {
	return (
		<motion.div
			className="about-page"
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{/* ====================================================
          1. SLANTING GRAY BACKGROUND STRIP WITH MD PHOTO & SLANTED TEXT
          In-transition: Slides TOP -> BOTTOM
          Out-transition: Slides back to TOP
      ==================================================== */}
			<motion.div
				className="about-slant-wrapper"
				initial={{ y: "-120%", opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: "-120%", opacity: 0 }}
				transition={{
					duration: 0.9,
					delay: 0.1,
					ease: [0.76, 0, 0.24, 1],
				}}
			>
				<div className="about-slant-bg">
					{/* Slanted "Managing Director" Outlined Text starting above MD's left shoulder */}
					<div className="slant-md-text">Managing Director</div>

					{/* MD Portrait Photo inside the slanted gray area */}
					<div className="director-portrait-container">
						<img
							src={MdPicture}
							alt="Managing Director Yogeshwaran Muralidharan - YM Automation"
							className="director-portrait-img"
						/>
					</div>
				</div>
			</motion.div>

			{/* ====================================================
          2. LEFT SECTION: About, Why Choose Us, Our Customer
          In-transition: Slides from LEFT
          Out-transition: Exits to LEFT
      ==================================================== */}
			<motion.div
				className="about-left-section"
				initial={{ x: "-120%", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: "-120%", opacity: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.2,
					ease: [0.76, 0, 0.24, 1],
				}}
			>
				{/* About Block */}
				<div className="about-block">
					<h2 className="about-block-title">
						<span className="about-title-bar" />
						<span className="about-title-highlight">About</span> YM
						Automation
					</h2>
					<p className="about-text-content">
						YM Automation Private Limited is a premier industrial
						automation enterprise based in Coimbatore, Tamil Nadu.
						We specialize in custom Special Purpose Machines (SPM),
						mechatronics design, PLC/SCADA control panel automation,
						and Industrial IoT (IIoT) integration that optimize
						manufacturing efficiency and production quality.
					</p>
				</div>

				{/* Why Choose Us Block */}
				<div className="about-block">
					<h2 className="about-block-title">
						<span className="about-title-bar" />
						<span className="about-title-highlight">Why</span>{" "}
						Choose Us
					</h2>
					<p className="about-text-content">
						Our multidisciplinary team delivers complete project
						lifecycles—from precision 3D CAD mechanical design and
						automated control logic development to seamless site
						commissioning and 24/7 technical support, built strictly
						to ISO quality benchmarks.
					</p>

					{/* 3 Values / Feature Badges */}
					<div className="why-choose-icons-grid">
						<div className="feature-icon-card">
							<div className="feature-icon-badge">
								<FaLightbulb />
							</div>
							<span className="feature-icon-label">
								Innovation
							</span>
						</div>

						<div className="feature-icon-card">
							<div className="feature-icon-badge">
								<FaHandshake />
							</div>
							<span className="feature-icon-label">
								Commitment
							</span>
						</div>

						<div className="feature-icon-card">
							<div className="feature-icon-badge">
								<FaUserCheck />
							</div>
							<span className="feature-icon-label">
								Satisfaction
							</span>
						</div>
					</div>
				</div>

				{/* Our Customer Marquee Block */}
				<div className="about-block">
					<h2 className="about-block-title">
						<span className="about-title-bar" />
						<span className="about-title-highlight">Our</span>{" "}
						Customers
					</h2>

					<CustomerMarquee />
				</div>
			</motion.div>

			{/* ====================================================
          3. RIGHT SECTION: Yogeshwaran Muralidharan Bio
          In-transition: Slides from RIGHT
          Out-transition: Exits to RIGHT
      ==================================================== */}
			<motion.div
				className="about-right-section"
				initial={{ x: "120%", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: "120%", opacity: 0 }}
				transition={{
					duration: 0.85,
					delay: 0.25,
					ease: [0.76, 0, 0.24, 1],
				}}
			>
				<div className="director-info-box">
					<h2 className="director-name">
						Yogeshwaran
						<span className="director-name-highlight">
							Muralidharan
						</span>
					</h2>
					<p className="director-bio">
						Co-founder & Managing Director of YM Automation Private
						Limited. A graduate with a Professional Accounting
						degree, he directs the financial operations, corporate
						strategy, and commercial regulatory activities of the
						company.
					</p>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default About;
