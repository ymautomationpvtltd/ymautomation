import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
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
	const [isOpen, setIsOpen] = useState(false);

	// Close menu on route change
	useEffect(() => {
		setIsOpen(false);
	}, [location.pathname]);

	// Prevent background scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<>
			{/* =========================================
			   DESKTOP SIDEBAR (Visible > 1024px)
			========================================= */}
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

					<div className="nav-timeline-line" />
				</div>
			</motion.aside>

			{/* =========================================
			   MOBILE TOP BAR & HAMBURGER (Visible <= 1024px)
			========================================= */}
			<div className="mobile-header-bar">
				<Link to="/" className="mobile-logo-link">
					<img
						src={YmLogo}
						alt="YM Automation Logo"
						className="mobile-logo-img"
					/>
					<span className="mobile-brand-name">YM Automation</span>
				</Link>

				<button
					className="mobile-hamburger-btn"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle navigation menu"
				>
					{isOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* =========================================
			   MOBILE DRAWER OVERLAY
			========================================= */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="mobile-nav-overlay"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={() => setIsOpen(false)}
					>
						<motion.div
							className="mobile-nav-drawer"
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{
								duration: 0.35,
								ease: [0.22, 1, 0.36, 1],
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="mobile-drawer-header">
								<div className="drawer-brand-info">
									<img
										src={YmLogo}
										alt="YM Logo"
										className="drawer-logo"
									/>
									<div>
										<h3 className="drawer-title">
											YM Automation
										</h3>
										<p className="drawer-subtitle">
											Pvt Ltd
										</p>
									</div>
								</div>
								<button
									className="mobile-drawer-close"
									onClick={() => setIsOpen(false)}
									aria-label="Close menu"
								>
									<FaTimes />
								</button>
							</div>

							<nav className="mobile-drawer-nav">
								{navItems.map((item) => {
									const isActive =
										location.pathname === item.path ||
										(item.path === "/" &&
											location.pathname === "");

									return (
										<Link
											key={item.name}
											to={item.path}
											className={`mobile-nav-item ${isActive ? "active" : ""}`}
											onClick={() => setIsOpen(false)}
										>
											<span className="mobile-nav-dot" />
											<span className="mobile-nav-text">
												{item.name}
											</span>
										</Link>
									);
								})}
							</nav>

							<div className="mobile-drawer-footer">
								<a
									href="tel:+919489023450"
									className="mobile-phone-btn"
								>
									<FaPhoneAlt />
									<span>+91 94890 23450</span>
								</a>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default SideNavigation;
