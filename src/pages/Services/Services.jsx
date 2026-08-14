import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SEO from "../../components/common/SEO";
// Images
import BatteryManagementSystem from "../../assets/services/Battery_Management_System_clean.jpg";
import CNC_SPM_Retrofit from "../../assets/services/CNC_&_SPM_Machines_Retrofit_clean.jpg";
import ControlPanelAutomation from "../../assets/services/Control_Panel_Automation_clean.jpg";
import CustomizedSoftwareSolutions from "../../assets/services/Customized_Software_Solutions_clean.jpg";
import IndustrialAutomation from "../../assets/services/Industrial_Automation_clean.jpg";
import IotSolutions from "../../assets/services/IOT_Solutions_clean.jpg";
import MechanicalElectricalDesign from "../../assets/services/Mechanical_&_Electrical_Design_clean.jpg";
import PlcHmiVfdDevelopment from "../../assets/services/PLC_HMI_VFD_Development_clean.jpg";
import ProcessAutomation from "../../assets/services/Process_Automation_clean.jpg";
import RenewableEnergy from "../../assets/services/Renewable_Energy_clean.jpg";
import SpecialPurposeMachine from "../../assets/services/Special_Purpose_Machine_clean.jpg";

// Css
import "./Services.css";

const servicesData = [
	{
		id: 0,
		title: "Customized Software Solutions",
		image: CustomizedSoftwareSolutions,
		description:
			"Purpose-built software that connects your operations, data, and automation into one intelligent system for better visibility and faster decisions.",
	},
	{
		id: 1,
		title: "Industrial Automation",
		image: IndustrialAutomation,
		description:
			"End-to-end automation solutions that reduce manual effort, improve production efficiency, and deliver consistent, reliable performance.",
	},
	{
		id: 2,
		title: "Special Purpose Machine",
		image: SpecialPurposeMachine,
		description:
			"Application-specific machines engineered to automate complex processes, increase production speed, and achieve higher precision and repeatability.",
	},
	{
		id: 3,
		title: "Industrial IoT & Industry 4.0",
		image: IotSolutions,
		description:
			"Connected industrial systems that turn machine data into real-time insights for smarter monitoring, improved OEE, and predictive maintenance.",
	},
	{
		id: 4,
		title: "CNC & SPM Machines Retrofit",
		image: CNC_SPM_Retrofit,
		description:
			"Modernize existing machines with upgraded controls and automation to extend machine life, improve accuracy, and enhance production performance.",
	},
	{
		id: 5,
		title: "Control Panel Automation",
		image: ControlPanelAutomation,
		description:
			"Reliable control panels engineered for safe, efficient machine operation with optimized power distribution, control, and automation.",
	},
	{
		id: 6,
		title: "Renewable Energy",
		image: RenewableEnergy,
		description:
			"Smart automation and monitoring solutions that improve the efficiency, reliability, and performance of renewable energy systems.",
	},
	{
		id: 7,
		title: "Battery Management System",
		image: BatteryManagementSystem,
		description:
			"Intelligent battery monitoring and control systems designed to improve battery safety, performance, reliability, and operating life.",
	},
	{
		id: 8,
		title: "Mechanical & Electrical Design",
		image: MechanicalElectricalDesign,
		description:
			"Integrated mechanical and electrical engineering that transforms concepts into precise, manufacturable, and automation-ready solutions.",
	},
	{
		id: 9,
		title: "PLC, HMI, VFD Development",
		image: PlcHmiVfdDevelopment,
		description:
			"Robust control solutions that automate machines and processes while delivering intuitive operation, precise control, and dependable performance.",
	},
	{
		id: 10,
		title: "Process Automation",
		image: ProcessAutomation,
		description:
			"Intelligent process control that minimizes manual intervention, improves consistency, and maximizes productivity across industrial operations.",
	},
];

const Services = () => {
	// const [activeIndex, setActiveIndex] = useState(2);
	const [activeId, setActiveId] = useState(2);
	const [isStacked, setIsStacked] = useState(true);
	const [isPaused, setIsPaused] = useState(false);
	const [resumeKey, setResumeKey] = useState(0);

	const handleMouseEnter = () => setIsPaused(true);
	const handleMouseLeave = () => {
		setIsPaused(false);
		setResumeKey((prev) => prev + 1);
	};

	useEffect(() => {
		const spreadTimer = setTimeout(() => {
			setIsStacked(false);
		}, 450);

		return () => clearTimeout(spreadTimer);
	}, []);

	useEffect(() => {
		if (isPaused) return;

		const timer = setTimeout(() => {
			setActiveId((currentId) => {
				return (currentId + 1) % servicesData.length;
			});
		}, 5 * 1000);

		return () => clearTimeout(timer);
	}, [activeId, isPaused]);

	const activeIndex = servicesData.findIndex(
		(service) => service.id === activeId,
	);

	const getPositionClass = (index) => {
		const total = servicesData.length;

		let diff = index - activeIndex;

		// Circular distance
		if (diff > total / 2) {
			diff -= total;
		}

		if (diff < -total / 2) {
			diff += total;
		}

		switch (diff) {
			case 0:
				return "pos-center";

			case -1:
				return "pos-left-1";

			case -2:
				return "pos-left-2";

			case 1:
				return "pos-right-1";

			case 2:
				return "pos-right-2";

			default:
				return "hidden";
		}
	};

	const goToService = (id) => {
		setActiveId(id);
	};

	return (
		<motion.div
			className="services-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
		>
			<SEO
				title="Our Services | Special Purpose Machines, Control Panels & IIoT Solutions"
				description="Explore YM Automation services: Custom Special Purpose Machines (SPM), Industrial IoT & Industry 4.0, PLC/HMI/VFD Development, CNC SPM Retrofitting, Control Panel Automation, and Battery Management Systems."
				keywords="Special Purpose Machine Services, Industrial Automation Services Coimbatore, PLC HMI VFD Programming, IIoT Solutions India, Control Panel Automation, CNC Retrofit, Process Automation"
				canonical="https://ymautomation.com/#/services"
			/>
			<div className="services-content-container">
				{/* Header Block */}
				<motion.div
					className="services-header-block"
					initial={{ y: -30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.7,
						delay: 0.1,
						ease: [0.76, 0, 0.24, 1],
					}}
				>
					<h1 className="services-page-title">
						<span className="services-title-bar" />
						<span className="services-title-main">
							Our Engineering Services
						</span>
					</h1>
					<p className="services-subtitle">
						Turnkey mechatronics, custom Special Purpose Machinery,
						automated control panel engineering, and smart Industry
						4.0 IoT integration.
					</p>
				</motion.div>

				{/* 3D 5-Card Carousel */}
				<motion.div
					className={`services-carousel-stage ${isStacked ? "initial-stack" : ""}`}
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.7,
						delay: 0.2,
						ease: [0.76, 0, 0.24, 1],
					}}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					{servicesData.map((item, index) => {
						const posClass = getPositionClass(index);
						return (
							<div
								key={item.id}
								className={`service-card-item ${posClass}`}
								onClick={() => goToService(item.id)}
							>
								<img
									src={item.image}
									alt={item.title}
									className="service-card-img"
								/>
							</div>
						);
					})}
				</motion.div>

				{/* Dynamic Detail Text & Pagination Dots */}
				<motion.div
					key={activeIndex}
					className="service-detail-block"
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.4 }}
				>
					<h2 className="active-card-title">
						{servicesData[activeIndex].title}
					</h2>
					<p className="active-card-description">
						{servicesData[activeIndex].description}
					</p>

					{/* Pagination Indicators */}
					<div
						className="pagination-dots-container"
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
					>
						{servicesData.map((service, idx) => (
							<div
								key={idx}
								className={`pagination-dot ${
									idx === activeIndex ? "active" : ""
								}`}
								onClick={() => goToService(service.id)}
							>
								{idx === activeIndex && (
									<span
										key={`${activeId}-${resumeKey}`}
										className="pagination-progress-fill"
										style={{
											animationPlayState: isPaused
												? "paused"
												: "running",
										}}
									/>
								)}
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Services;
