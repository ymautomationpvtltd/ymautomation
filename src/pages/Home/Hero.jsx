import React from "react";
import { motion } from "framer-motion";

import TopHeader from "../../components/header/TopHeader";
import HomeMain from "../../components/home/HomeMain";

import "./Hero.css";

const Hero = () => {
	return (
		<motion.div
			className="hero-page"
			initial="initial"
			animate="animate"
			exit="exit"
		>
			{/* =====================================
          TOP HEADER
          Exclusive to Home page - Enters from TOP
      ===================================== */}
			<TopHeader />

			{/* =====================================
          AUTOMATION WORD BLOCK
          Enters from RIGHT
      ===================================== */}
			<motion.div
				className="automation-block"
				initial={{ x: "120%", opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ x: "120%", opacity: 0 }}
				transition={{
					duration: 0.85,
					delay: 0.15,
					ease: [0.76, 0, 0.24, 1],
				}}
			>
				<span>YM AUTOMATION</span>
			</motion.div>

			{/* =====================================
          MAIN CONTENT
          Enters from BOTTOM & Tilts on exit
      ===================================== */}
			<HomeMain />
		</motion.div>
	);
};

export default Hero;
