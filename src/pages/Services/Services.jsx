import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
// Images
import BatteryManagementSystem from "../../assets/services/Battery_Management_System.png";
import CNC_SPM_Retrofit from "../../assets/services/CNC_&_SPM_Machines_Retrofit.png";
import ControlPanelAutomation from "../../assets/services/Control_Panel_Automation.png";
import CustomizedSoftwareSolutions from "../../assets/services/Customized_Software_Solutions.png";
import IndustrialAutomation from "../../assets/services/Industrial_Automation.png";
import IotSolutions from "../../assets/services/IOT_Solutions.png";
import MechanicalElectricalDesign from "../../assets/services/Mechanical_&_Electrical_Design.png";
import PlcHmiVfdDevelopment from "../../assets/services/PLC_HMI_VFD_Development.png";
import ProcessAutomation from "../../assets/services/Process_Automation.png";
import RenewableEnergy from "../../assets/services/Renewable_Energy.png";
import SpecialPurposeMachine from "../../assets/services/Special_Purpose_Machine.png";
// Css
import "./Services.css";

// const servicesData = [
// 	{
// 		id: 0,
// 		title: "Customized Software Solutions",
// 		image: CustomizedSoftwareSolutions,
// 		description:
// 			"Custom-designed Special Purpose Machines (SPM) engineered to solve complex assembly, machining, and quality inspection challenges, boosting manufacturing throughput and accuracy.",
// 	},
// 	{
// 		id: 1,
// 		title: "Industrial Automation",
// 		image: IndustrialAutomation,
// 		description:
// 			"Multi-axis robotic arm integration, gantry pick-and-place systems, automated material handling, and high-precision robotic assembly line engineering.",
// 	},
// 	{
// 		id: 2,
// 		title: "Special Purpose Machine",
// 		image: SpecialPurposeMachine,
// 		description:
// 			"Industrial IoT (IIoT) sensors, edge computing, real-time data acquisition, cloud analytics, OEE tracking, and smart factory predictive maintenance dashboards.",
// 	},
// 	{
// 		id: 3,
// 		title: "Industrial IoT & Industry 4.0",
// 		image: IotSolutions,
// 		description:
// 			"Expert PLC programming (Siemens, Allen-Bradley, Mitsubishi, Omron, Delta), HMI interface design, and SCADA process control systems built for maximum uptime.",
// 	},
// 	{
// 		id: 4,
// 		title: "CNC & SPM Machines Retrofit",
// 		image: CNC_SPM_Retrofit,
// 		description:
// 			"Custom electrical control panel design, drive panels (VFD/Servo), power distribution, panel wiring, testing, CNC retrofitting, and legacy machine upgrades.",
// 	},
// 	{
// 		id: 5,
// 		title: "Control Panel Automation",
// 		image: ControlPanelAutomation,
// 		description:
// 			"Custom electrical control panel design, drive panels (VFD/Servo), power distribution, panel wiring, testing, CNC retrofitting, and legacy machine upgrades.",
// 	},
// 	{
// 		id: 6,
// 		title: "Renewable Energy",
// 		image: RenewableEnergy,
// 		description:
// 			"Custom electrical control panel design, drive panels (VFD/Servo), power distribution, panel wiring, testing, CNC retrofitting, and legacy machine upgrades.",
// 	},
// 	{
// 		id: 7,
// 		title: "Battery Management System",
// 		image: BatteryManagementSystem,
// 		description:
// 			"Custom electrical control panel design, drive panels (VFD/Servo), power distribution, panel wiring, testing, CNC retrofitting, and legacy machine upgrades.",
// 	},
// 	{
// 		id: 8,
// 		title: "Mechanical & Electrical Design",
// 		image: MechanicalElectricalDesign,
// 		description:
// 			"Custom electrical control panel design, drive panels (VFD/Servo), power distribution, panel wiring, testing, CNC retrofitting, and legacy machine upgrades.",
// 	},
// 	{
// 		id: 9,
// 		title: "PLC, HMI, VFD Development",
// 		image: PlcHmiVfdDevelopment,
// 		description:
// 			"Custom electrical control panel design, drive panels (VFD/Servo), power distribution, panel wiring, testing, CNC retrofitting, and legacy machine upgrades.",
// 	},
// 	{
// 		id: 10,
// 		title: "Process Automation",
// 		image: ProcessAutomation,
// 		description:
// 			"Custom electrical control panel design, drive panels (VFD/Servo), power distribution, panel wiring, testing, CNC retrofitting, and legacy machine upgrades.",
// 	},
// ];

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

	useEffect(() => {
		const timer = setTimeout(() => {
			setActiveId((currentId) => {
				return (currentId + 1) % servicesData.length;
			});
		}, 5 * 1000);

		return () => clearTimeout(timer);
	}, [activeId]);

	const activeIndex = servicesData.findIndex(
		(service) => service.id === activeId,
	);

	// const getPositionClass = (index) => {
	// 	const diff = index - activeIndex;
	// 	if (diff === 0) return "pos-center";
	// 	if (diff === -1 || diff === 4) return "pos-left-1";
	// 	if (diff === -2 || diff === 3) return "pos-left-2";
	// 	if (diff === 1 || diff === -4) return "pos-right-1";
	// 	if (diff === 2 || diff === -3) return "pos-right-2";
	// 	return "pos-right-2";
	// };

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
				<div className="services-carousel-stage">
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
				</div>

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
					<div className="pagination-dots-container">
						{servicesData.map((_, idx) => (
							<div
								key={idx}
								className={`pagination-dot ${
									idx === activeIndex ? "active" : ""
								}`}
								onClick={() => goToService(item.id)}
							/>
						))}
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default Services;
