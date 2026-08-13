import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import "./Gallery.css";

const galleryImages = [
	{
		id: 1,
		title: "High-Speed SPM Automated Assembly Line",
		url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
	},
	{
		id: 2,
		title: "Automated Electrical Control Panel & Drive Wiring",
		url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 3,
		title: "PLC Programming & SCADA Plant Automation",
		url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
	},
	{
		id: 4,
		title: "Industrial IoT Smart Factory Sensor Network",
		url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
	},
	{
		id: 5,
		title: "Robotic Arm Pick & Place Packaging Cell",
		url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
	},
	{
		id: 6,
		title: "Custom Precision Mechanical Component Tooling",
		url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 7,
		title: "Turnkey Industrial Automation & CNC Retrofitting",
		url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
	},
];

const Gallery = () => {
	const [selectedImg, setSelectedImg] = useState(null);

	return (
		<motion.div
			className="gallery-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
		>
			<div className="gallery-content-container">
				{/* Header Block */}
				<motion.div
					className="gallery-header-block"
					initial={{ y: -30, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.7, delay: 0.1 }}
				>
					<h1 className="gallery-page-title">
						<span className="gallery-title-bar" />
						<span className="gallery-title-main">
							Engineering Project Gallery
						</span>
					</h1>
					<p className="gallery-subtitle">
						A visual showcase of our Special Purpose Machines (SPM),
						robotic integration cells, control panels, and Industry
						4.0 smart factory deployments.
					</p>
				</motion.div>

				{/* 7-Card Grid */}
				<div className="gallery-grid-layout">
					{galleryImages.map((img) => (
						<motion.div
							key={img.id}
							className="gallery-card"
							onClick={() => setSelectedImg(img)}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							<img
								src={img.url}
								alt={img.title}
								className="gallery-card-img"
							/>
						</motion.div>
					))}
				</div>
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedImg && (
					<motion.div
						className="gallery-lightbox-backdrop"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImg(null)}
					>
						<motion.div
							className="lightbox-content-box"
							initial={{ scale: 0.85, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.85, opacity: 0 }}
							onClick={(e) => e.stopPropagation()}
						>
							<img
								src={selectedImg.url}
								alt={selectedImg.title}
								className="lightbox-img"
							/>
							<button
								className="lightbox-close-btn"
								onClick={() => setSelectedImg(null)}
								aria-label="Close"
							>
								<FaTimes />
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Gallery;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaTimes } from "react-icons/fa";

// import "./Gallery.css";

// const galleryImages = [
//   {
//     id: 1,
//     title: "High-Speed SPM Automated Assembly Line",
//     className: "card-wide-top",
//     url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 2,
//     title: "Automated Electrical Control Panel & Drive Wiring",
//     className: "card-tall-right",
//     url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 3,
//     title: "PLC Programming & SCADA Plant Automation",
//     className: "card-normal",
//     url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     id: 4,
//     title: "Industrial IoT Smart Factory Sensor Network",
//     className: "card-normal",
//     url: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     id: 5,
//     title: "Robotic Arm Pick & Place Packaging Cell",
//     className: "card-normal",
//     url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
//   },
//   {
//     id: 6,
//     title: "Custom Precision Mechanical Component Tooling",
//     className: "card-span-2",
//     url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: 7,
//     title: "Turnkey Industrial Automation & CNC Retrofitting",
//     className: "card-span-2",
//     url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
//   },
// ];

// const Gallery = () => {
//   const [selectedImg, setSelectedImg] = useState(null);

//   return (
//     <motion.div
//       className="gallery-page"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
//     >
//       <div className="gallery-content-container">
//         {/* Header Block */}
//         <motion.div
//           className="gallery-header-block"
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.1 }}
//         >
//           <h1 className="gallery-page-title">
//             <span className="gallery-title-bar" />
//             <span className="gallery-title-main">Engineering Project Gallery</span>
//           </h1>
//           <p className="gallery-subtitle">
//             A visual showcase of our Special Purpose Machines (SPM), robotic integration cells, control panels, and Industry 4.0 smart factory deployments.
//           </p>
//         </motion.div>

//         {/* 7-Card Grid */}
//         <div className="gallery-grid-layout">
//           {galleryImages.map((img) => (
//             <motion.div
//               key={img.id}
//               className={`gallery-card ${img.className}`}
//               onClick={() => setSelectedImg(img)}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <img
//                 src={img.url}
//                 alt={img.title}
//                 className="gallery-card-img"
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {selectedImg && (
//           <motion.div
//             className="gallery-lightbox-backdrop"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImg(null)}
//           >
//             <motion.div
//               className="lightbox-content-box"
//               initial={{ scale: 0.85, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.85, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={selectedImg.url}
//                 alt={selectedImg.title}
//                 className="lightbox-img"
//               />
//               <button
//                 className="lightbox-close-btn"
//                 onClick={() => setSelectedImg(null)}
//                 aria-label="Close"
//               >
//                 <FaTimes />
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// };

// export default Gallery;
