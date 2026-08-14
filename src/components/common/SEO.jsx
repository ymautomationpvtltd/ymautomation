import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({
	title = "YM Automation Pvt Ltd | Special Purpose Machines, Robotics & Industrial IoT",
	description = "YM Automation Private Limited is an industrial automation company based in Coimbatore specializing in Special Purpose Machines (SPM), Robotic Engineering, PLC/SCADA Integration, Control Panels, and Industrial IoT smart factory solutions.",
	keywords = "YM Automation Pvt Ltd, Industrial Automation Coimbatore, Special Purpose Machines, SPM Machines India, Robotic Automation, PLC Programming, Control Panel Wiring, Industrial IoT, IIoT Smart Factory, Yogeshwaran Muralidharan",
	canonical = "https://ymautomation.com/",
	ogImage = "/assets/ym-logo.png",
	type = "website",
}) => {
	const location = useLocation();
	const currentUrl = `https://ymautomation.com/#${location.pathname}`;

	useEffect(() => {
		// Update Document Title
		document.title = title;

		// Helper function to set or update meta tag content
		const updateMetaTag = (selector, attrName, attrValue, content) => {
			let element = document.querySelector(`meta[${selector}="${attrName}"]`);
			if (!element) {
				element = document.createElement("meta");
				element.setAttribute(attrName === "name" ? "name" : "property", attrValue);
				document.head.appendChild(element);
			}
			element.setAttribute("content", content);
		};

		// Helper function to update link tags (e.g. canonical)
		const updateLinkTag = (rel, href) => {
			let element = document.querySelector(`link[rel="${rel}"]`);
			if (!element) {
				element = document.createElement("link");
				element.setAttribute("rel", rel);
				document.head.appendChild(element);
			}
			element.setAttribute("href", href);
		};

		// Primary Meta Tags
		updateMetaTag("name", "description", "description", description);
		updateMetaTag("name", "keywords", "keywords", keywords);
		updateMetaTag("name", "title", "title", title);

		// Open Graph / Facebook / LinkedIn
		updateMetaTag("property", "og:type", "og:type", type);
		updateMetaTag("property", "og:url", "og:url", currentUrl);
		updateMetaTag("property", "og:title", "og:title", title);
		updateMetaTag("property", "og:description", "og:description", description);
		updateMetaTag("property", "og:image", "og:image", ogImage);

		// Twitter Cards
		updateMetaTag("name", "twitter:card", "twitter:card", "summary_large_image");
		updateMetaTag("name", "twitter:url", "twitter:url", currentUrl);
		updateMetaTag("name", "twitter:title", "twitter:title", title);
		updateMetaTag("name", "twitter:description", "twitter:description", description);
		updateMetaTag("name", "twitter:image", "twitter:image", ogImage);

		// Canonical Link
		updateLinkTag("canonical", canonical);

		// Inject Dynamic Breadcrumb JSON-LD Schema
		const breadcrumbSchemaId = "dynamic-breadcrumb-jsonld";
		let scriptElement = document.getElementById(breadcrumbSchemaId);
		if (!scriptElement) {
			scriptElement = document.createElement("script");
			scriptElement.id = breadcrumbSchemaId;
			scriptElement.type = "application/ld+json";
			document.head.appendChild(scriptElement);
		}

		const routeNameMap = {
			"/": "Home",
			"/about": "About Us",
			"/services": "Services & Solutions",
			"/gallery": "Engineering Gallery",
			"/contact": "Contact Us",
		};

		const pageName = routeNameMap[location.pathname] || "YM Automation";
		const breadcrumbData = {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Home",
					"item": "https://ymautomation.com/"
				},
				...(location.pathname !== "/" ? [{
					"@type": "ListItem",
					"position": 2,
					"name": pageName,
					"item": currentUrl
				}] : [])
			]
		};

		scriptElement.textContent = JSON.stringify(breadcrumbData);
	}, [title, description, keywords, canonical, ogImage, type, location.pathname, currentUrl]);

	return null;
};

export default SEO;
