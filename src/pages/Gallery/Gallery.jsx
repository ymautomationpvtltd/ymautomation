import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Icons
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Images
// Mechanical
import Autocalve from "../../assets/gallery/autoclave.jpeg";
import BMS from "../../assets/gallery/bms.jpeg";
import CogentFixture from "../../assets/gallery/cogent_fixture_2.jpeg";
import CogentFixture2 from "../../assets/gallery/cogent_fixture_2.jpeg";
import ControlPannel from "../../assets/gallery/control_pannel.jpeg";
import DistributionPanel from "../../assets/gallery/distribution_pannel.jpeg";
import EbDgPowerSelector from "../../assets/gallery/eb_and_dg_power_selector.jpeg";
import EbDgPowerSelector2 from "../../assets/gallery/eb_and_dg_power_selector_2.jpeg";
import McbTestbench from "../../assets/gallery/mcb_testbench.jpeg";
import McbTestbench2 from "../../assets/gallery/mcb_testbench_2.jpeg";
import McbTestbench3 from "../../assets/gallery/mcb_testbench_3.jpeg";
import McbTestbench4 from "../../assets/gallery/mcb_testbench_4.jpeg";
import PaperWindingMachine from "../../assets/gallery/paper_winding.jpeg";
import PowerSubstation from "../../assets/gallery/power_substation.jpeg";
import ControlPannel2 from "../../assets/gallery/control_pannel_2.jpeg";
import RetroFitting from "../../assets/gallery/retro_fitting.jpeg";
import UltrasonicSealingMachine from "../../assets/gallery/ultrasonic_sealing_machine.jpeg";
import RetroFitting2 from "../../assets/gallery/retro_fitting_2.jpeg";
// Software
import PcbTracability from "../../assets/gallery/pcb_tracability_opt.jpg";
import FlexTracabilty from "../../assets/gallery/flex_tracability_opt.jpg";
import AtherTestbench from "../../assets/gallery/ather_testbench_opt.jpg";
import RoboticWeldingMonitor from "../../assets/gallery/robotic_welding_monitor_opt.jpg";
import TeTracability from "../../assets/gallery/te_tracability_opt.jpg";
// YM Insights
import YmInsights from "../../assets/gallery/ym_insights.jpeg";

// Css
import "./Gallery.css";

/* =========================================================
   GALLERY DATA

   Add/remove images here.

   IMPORTANT:
   You do NOT need to specify:
   - rowSpan
   - colSpan
   - grid position
   - layout class

   The algorithm handles all of that automatically.
========================================================= */

const galleryImages = [
	{
		id: 1,
		title: "Autoclave",
		url: Autocalve,
		aspectRatio: 1.33,
	},
	{
		id: 2,
		title: "Battery Management System",
		url: BMS,
		aspectRatio: 1.33,
	},
	{
		id: 3,
		title: "Fixture",
		url: CogentFixture,
		aspectRatio: 1.33,
	},
	{
		id: 4,
		title: "Fixture",
		url: CogentFixture2,
		aspectRatio: 1.33,
	},
	{
		id: 5,
		title: "Control Panel",
		url: ControlPannel,
		aspectRatio: 0.85,
	},
	{
		id: 6,
		title: "Distribution Panel",
		url: DistributionPanel,
		aspectRatio: 0.85,
	},
	{
		id: 7,
		title: "EB And DG Power Selector",
		url: EbDgPowerSelector,
		aspectRatio: 1.33,
	},
	{
		id: 8,
		title: "EB And DG Power Selector",
		url: EbDgPowerSelector2,
		aspectRatio: 1.33,
	},
	{
		id: 9,
		title: "MCB Testbench",
		url: McbTestbench,
		aspectRatio: 1.33,
	},
	{
		id: 10,
		title: "MCB Testbench",
		url: McbTestbench2,
		aspectRatio: 1.33,
	},
	{
		id: 11,
		title: "MCB Testbench",
		url: McbTestbench3,
		aspectRatio: 1.33,
	},
	{
		id: 12,
		title: "MCB Testbench",
		url: McbTestbench4,
		aspectRatio: 1.33,
	},
	{
		id: 13,
		title: "Paper Winding Machine",
		url: PaperWindingMachine,
		aspectRatio: 1.33,
	},
	{
		id: 14,
		title: "Power Substation",
		url: PowerSubstation,
		aspectRatio: 1.33,
	},
	{
		id: 15,
		title: "Control Pannel",
		url: ControlPannel2,
		aspectRatio: 0.85,
	},
	{
		id: 16,
		title: "Retro Fitting",
		url: RetroFitting,
		aspectRatio: 1.33,
	},
	{
		id: 17,
		title: "Ultrasonic Sealing Machine",
		url: UltrasonicSealingMachine,
		aspectRatio: 1.33,
	},
	{
		id: 18,
		title: "Retro Fitting",
		url: RetroFitting2,
		aspectRatio: 1.33,
	},
	{
		id: 19,
		title: "Tracability Software",
		url: FlexTracabilty,
		aspectRatio: 1.77,
	},
	{
		id: 20,
		title: "Testbench Software",
		url: AtherTestbench,
		aspectRatio: 1.77,
	},
	{
		id: 21,
		title: "Robotic Welding Monitor",
		url: RoboticWeldingMonitor,
		aspectRatio: 1.77,
	},
	{
		id: 22,
		title: "Tracability Software",
		url: TeTracability,
		aspectRatio: 1.77,
	},
	{
		id: 23,
		title: "Tracability Software",
		url: PcbTracability,
		aspectRatio: 1.77,
	},
	{
		id: 24,
		title: "YM Insights",
		url: YmInsights,
		aspectRatio: 1.33,
	},
];

/* =========================================================
   RESPONSIVE COLUMN COUNT
========================================================= */

const getColumnCount = (width) => {
	if (width >= 1600) return 5;
	if (width >= 1300) return 4;
	if (width >= 900) return 3;
	if (width >= 600) return 2;

	return 1;
};

/* =========================================================
   DETERMINISTIC RANDOM VALUE
========================================================= */

const seededValue = (id, salt = 0) => {
	const x = Math.sin((id + 1) * 9999 + salt * 7919) * 10000;
	return x - Math.floor(x);
};

/* =========================================================
   IMAGE ORIENTATION
========================================================= */

const getImageOrientation = (aspectRatio) => {
	if (aspectRatio >= 1.65) {
		return "panoramic";
	}

	if (aspectRatio >= 1.15) {
		return "landscape";
	}

	if (aspectRatio >= 0.85) {
		return "square";
	}

	return "portrait";
};

/* =========================================================
   GET PREFERRED SPANS
========================================================= */

const getPreferredSpans = (aspectRatio, columns, imageId) => {
	if (columns === 1) {
		return [
			{
				colSpan: 1,
				rowSpan: 1,
			},
		];
	}

	const orientation = getImageOrientation(aspectRatio);
	const variation = seededValue(imageId, 3);

	if (columns === 2) {
		if (orientation === "panoramic") {
			return [
				{ colSpan: 2, rowSpan: 1 },
				{ colSpan: 2, rowSpan: 2 },
				{ colSpan: 1, rowSpan: 1 },
			];
		}

		if (orientation === "landscape") {
			return [
				{ colSpan: 2, rowSpan: 1 },
				{ colSpan: 1, rowSpan: 1 },
				{ colSpan: 1, rowSpan: 2 },
			];
		}

		if (orientation === "portrait") {
			return [
				{ colSpan: 1, rowSpan: 2 },
				{ colSpan: 1, rowSpan: 1 },
				{ colSpan: 2, rowSpan: 2 },
			];
		}

		return variation > 0.5 ?
				[
					{ colSpan: 2, rowSpan: 2 },
					{ colSpan: 1, rowSpan: 1 },
				]
			:	[
					{ colSpan: 1, rowSpan: 1 },
					{ colSpan: 2, rowSpan: 1 },
				];
	}

	if (orientation === "panoramic") {
		return [
			{ colSpan: Math.min(3, columns), rowSpan: 1 },
			{ colSpan: 2, rowSpan: 1 },
			{ colSpan: 2, rowSpan: 2 },
			{ colSpan: 1, rowSpan: 1 },
		];
	}

	if (orientation === "landscape") {
		return [
			{ colSpan: 2, rowSpan: 1 },
			{ colSpan: 2, rowSpan: 2 },
			{ colSpan: 1, rowSpan: 1 },
			{ colSpan: 1, rowSpan: 2 },
		];
	}

	if (orientation === "portrait") {
		return [
			{ colSpan: 1, rowSpan: 2 },
			{ colSpan: 1, rowSpan: 1 },
			{ colSpan: 2, rowSpan: 2 },
			{ colSpan: 2, rowSpan: 1 },
		];
	}

	return [
		{ colSpan: 1, rowSpan: 1 },
		{ colSpan: 2, rowSpan: 1 },
		{ colSpan: 1, rowSpan: 2 },
		{ colSpan: 2, rowSpan: 2 },
	];
};

/* =========================================================
   CHECK WHETHER A SPAN FITS
========================================================= */

const canPlace = (occupancy, row, column, rowSpan, colSpan, columns) => {
	if (column + colSpan > columns) {
		return false;
	}

	for (let r = row; r < row + rowSpan; r++) {
		for (let c = column; c < column + colSpan; c++) {
			if (occupancy[r]?.[c]) {
				return false;
			}
		}
	}

	return true;
};

/* =========================================================
   MARK CELLS AS OCCUPIED
========================================================= */

const occupy = (occupancy, row, column, rowSpan, colSpan) => {
	for (let r = row; r < row + rowSpan; r++) {
		if (!occupancy[r]) {
			occupancy[r] = [];
		}

		for (let c = column; c < column + colSpan; c++) {
			occupancy[r][c] = true;
		}
	}
};

/* =========================================================
   FIND BEST POSITION
========================================================= */

const findPosition = (occupancy, columns, spans) => {
	for (let row = 0; row < 1000; row++) {
		for (let column = 0; column < columns; column++) {
			for (const span of spans) {
				if (
					canPlace(
						occupancy,
						row,
						column,
						span.rowSpan,
						span.colSpan,
						columns,
					)
				) {
					return {
						row,
						column,
						...span,
					};
				}
			}
		}
	}

	return {
		row: 0,
		column: 0,
		rowSpan: 1,
		colSpan: 1,
	};
};

/* =========================================================
   ALIGN BOTTOM ROW OF MOSAIC
========================================================= */

const expandBottomRows = (items) => {
	if (!items.length) return items;

	const maxBottomRow = Math.max(
		...items.map((item) => item.row + item.rowSpan),
	);

	return items.map((item) => {
		const itemBottom = item.row + item.rowSpan;
		if (itemBottom >= maxBottomRow) return item;

		const hasBelow = items.some(
			(other) =>
				other.id !== item.id &&
				other.row >= itemBottom &&
				other.column < item.column + item.colSpan &&
				other.column + other.colSpan > item.column,
		);

		if (!hasBelow) {
			return {
				...item,
				rowSpan: item.rowSpan + (maxBottomRow - itemBottom),
			};
		}

		return item;
	});
};

/* =========================================================
   GENERATE MOSAIC
========================================================= */

const generateMosaic = (images, columns) => {
	const occupancy = [];

	const positioned = images.map((image) => {
		const spans = getPreferredSpans(image.aspectRatio, columns, image.id);
		const rotation = Math.floor(seededValue(image.id, 7) * spans.length);

		const rotatedSpans = [
			...spans.slice(rotation),
			...spans.slice(0, rotation),
		];

		const position = findPosition(occupancy, columns, rotatedSpans);

		occupy(
			occupancy,
			position.row,
			position.column,
			position.rowSpan,
			position.colSpan,
		);

		return {
			...image,
			...position,
		};
	});

	return expandBottomRows(positioned);
};

/* =========================================================
   Image randomiser
========================================================= */
const shuffleArray = (array) => {
	const shuffled = [...array];

	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}

	return shuffled;
};

/* =========================================================
   GALLERY COMPONENT
========================================================= */

const Gallery = () => {
	const [selectedImg, setSelectedImg] = useState(null);
	const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);
	const [galleryOrder] = useState(() => shuffleArray(galleryImages));

	/* =====================================================
       WINDOW RESIZE
    ===================================================== */

	useEffect(() => {
		let resizeTimer;

		const handleResize = () => {
			clearTimeout(resizeTimer);

			resizeTimer = setTimeout(() => {
				setWindowWidth(window.innerWidth);
			}, 150);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			clearTimeout(resizeTimer);
		};
	}, []);

	/* =====================================================
       DETERMINE COLUMN COUNT
    ===================================================== */

	const columns = useMemo(() => getColumnCount(windowWidth), [windowWidth]);

	/* =====================================================
       GENERATE MOSAIC
    ===================================================== */

	const mosaicImages = useMemo(() => {
		return generateMosaic(galleryOrder, columns);
	}, [galleryOrder, columns]);

	/* =====================================================
       PRE-COMPUTE MAX BOTTOM ROW
    ===================================================== */

	const maxBottomRow = useMemo(() => {
		if (!mosaicImages || !mosaicImages.length) return 0;
		return Math.max(...mosaicImages.map((item) => item.row + item.rowSpan));
	}, [mosaicImages]);

	/* =====================================================
       LIGHTBOX NAVIGATION
    ===================================================== */

	const handlePrev = (e) => {
		if (e) e.stopPropagation();
		if (!selectedImg || !mosaicImages.length) return;

		const currentIndex = mosaicImages.findIndex(
			(img) => img.id === selectedImg.id,
		);
		const prevIndex =
			(currentIndex - 1 + mosaicImages.length) % mosaicImages.length;
		setSelectedImg(mosaicImages[prevIndex]);
	};

	const handleNext = (e) => {
		if (e) e.stopPropagation();
		if (!selectedImg || !mosaicImages.length) return;

		const currentIndex = mosaicImages.findIndex(
			(img) => img.id === selectedImg.id,
		);
		const nextIndex = (currentIndex + 1) % mosaicImages.length;
		setSelectedImg(mosaicImages[nextIndex]);
	};

	useEffect(() => {
		if (!selectedImg) return;

		const handleKeyDown = (e) => {
			if (e.key === "ArrowLeft") {
				handlePrev();
			} else if (e.key === "ArrowRight") {
				handleNext();
			} else if (e.key === "Escape") {
				setSelectedImg(null);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedImg, mosaicImages]);

	/* =====================================================
       RENDER
    ===================================================== */

	return (
		<motion.div
			className="gallery-page"
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
			}}
			transition={{
				duration: 0.6,
				ease: [0.76, 0, 0.24, 1],
			}}
		>
			<div className="gallery-content-container">
				{/* =====================================
                    HEADER
                ===================================== */}

				<motion.div
					className="gallery-header-block"
					initial={{
						y: -30,
						opacity: 0,
					}}
					animate={{
						y: 0,
						opacity: 1,
					}}
					transition={{
						duration: 0.7,
						delay: 0.1,
					}}
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

				{/* =====================================
                    DYNAMIC MOSAIC
                ===================================== */}

				<div
					className="gallery-grid-layout"
					style={{
						"--gallery-columns": columns,
					}}
				>
					{mosaicImages.map((img, index) => {
						const isBottom = img.row + img.rowSpan === maxBottomRow;
						return (
							<motion.div
								key={img.id}
								className={`gallery-card ${isBottom ? "gallery-card-bottom" : ""}`}
								style={{
									gridColumn: `${img.column + 1} / span ${img.colSpan}`,
									gridRow: `${img.row + 1} / span ${img.rowSpan}`,
								}}
								onClick={() => setSelectedImg(img)}
								initial={{
									opacity: 0,
									scale: 0.94,
								}}
								animate={{
									opacity: 1,
									scale: 1,
								}}
								transition={{
									duration: 0.4,
									delay: Math.min(index * 0.03, 0.3),
									ease: [0.22, 1, 0.36, 1],
								}}
								whileHover={{
									scale: 1.025,
									zIndex: 20,
								}}
								whileTap={{
									scale: 0.98,
								}}
							>
								<img
									src={img.url}
									alt={img.title}
									className="gallery-card-img"
									loading="lazy"
									decoding="async"
								/>

								<div className="gallery-card-overlay">
									<span>{img.title}</span>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>

			{/* =========================================
                LIGHTBOX
            ========================================= */}

			<AnimatePresence>
				{selectedImg && (
					<motion.div
						className="gallery-lightbox-backdrop"
						initial={{
							opacity: 0,
						}}
						animate={{
							opacity: 1,
						}}
						exit={{
							opacity: 0,
						}}
						onClick={() => setSelectedImg(null)}
					>
						<motion.div
							className="lightbox-content-box"
							initial={{
								scale: 0.85,
								opacity: 0,
							}}
							animate={{
								scale: 1,
								opacity: 1,
							}}
							exit={{
								scale: 0.85,
								opacity: 0,
							}}
							transition={{
								duration: 0.35,
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className="lightbox-nav-btn lightbox-prev-btn"
								onClick={handlePrev}
								aria-label="Previous image"
							>
								<FaChevronLeft />
							</button>

							<img
								key={selectedImg.id}
								src={selectedImg.url}
								alt={selectedImg.title}
								className="lightbox-img"
							/>

							<button
								className="lightbox-nav-btn lightbox-next-btn"
								onClick={handleNext}
								aria-label="Next image"
							>
								<FaChevronRight />
							</button>

							<button
								className="lightbox-close-btn"
								onClick={() => setSelectedImg(null)}
								aria-label="Close"
							>
								<FaTimes />
							</button>

							<div className="lightbox-title">
								{selectedImg.title}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default Gallery;
