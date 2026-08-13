import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
// Logo
import YmLogo from "../../assets/ym-logo.png";
// Css
import "./SideNavigation.css";

const navItems = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
	{ name: "Services", path: "/services" },
	{ name: "Gallery", path: "/gallery" },
	{ name: "Contact", path: "/contact" },
];

const SideNavigation = () => {
	const location = useLocation();

	return (
		<motion.aside
			className="side-navigation"
			initial={{ x: "-120%", opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{
				duration: 0.85,
				ease: [0.76, 0, 0.24, 1],
			}}
		>
			<Link to="/" className="nav-logo-link">
				<img
					src={YmLogo}
					alt="YM Automation Logo"
					className="nav-logo-img"
				/>
			</Link>

			<div className="nav-timeline-container">
				{/* Nav Items List */}
				<ul className="nav-items-list">
					{navItems.map((item) => {
						const isActive =
							location.pathname === item.path ||
							(item.path === "/" && location.pathname === "");

						return (
							<li
								key={item.name}
								className={`nav-item ${isActive ? "active" : ""}`}
							>
								<div className="nav-dot" />
								<Link to={item.path} className="nav-link">
									{item.name}
								</Link>
							</li>
						);
					})}
				</ul>

				{/* Vertical Separator Line on the RIGHT side */}
				<div className="nav-timeline-line" />
			</div>
		</motion.aside>
	);
};

export default SideNavigation;
