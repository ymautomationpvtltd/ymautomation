import React from "react";
// Images
import Armour from "../../assets/customers/armour.png";
import Cogent from "../../assets/customers/cogent.png";
import Energy from "../../assets/customers/energy.png";
import Eurus from "../../assets/customers/eurus.png";
import IIITDM from "../../assets/customers/iiitdm.png";
import Medicare from "../../assets/customers/medicare.png";
import Salzer from "../../assets/customers/salzer.png";
// Css
import "./CustomerMarquee.css";

const customerLogos = [
	{ id: "armour", name: "Armour", src: Armour },
	{ id: "cogent", name: "Cogent Automation", src: Cogent },
	{ id: "energy", name: "Energy", src: Energy },
	{ id: "eurus", name: "Eurus", src: Eurus },
	{ id: "iiitdm", name: "IIITDM Kancheepuram", src: IIITDM },
	{ id: "medicare", name: "Medicare", src: Medicare },
	{ id: "salzer", name: "Salzer Electronics", src: Salzer },
];

const CustomerMarquee = () => {
	// Duplicate array 4 times for a seamless infinite loop
	const items = [
		...customerLogos,
		...customerLogos,
		...customerLogos,
		...customerLogos,
	];

	return (
		<div className="marquee-container">
			<div className="marquee-track">
				{items.map((logo, index) => (
					<div
						key={`${logo.id}-${index}`}
						className="customer-logo-item"
					>
						<img
							src={logo.src}
							alt={logo.name}
							className="customer-logo-svg"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CustomerMarquee;
