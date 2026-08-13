import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	base: "/",
	resolve: {
		alias: {
			"@": "/src",
		},
	},
	server: {
		port: 3000,
		// host: "192.168.0.78",
	},
	build: {
		sourcemap: false,
	},
});
