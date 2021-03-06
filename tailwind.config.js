module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js}"],
	theme: {
		extend: {
			colors: {
				"d-yellow": "#F0A500",
				"gray-lv-1": "#F0F0F0",
				black: "#222222",
			},
			fontFamily: {
				nunito: ["nunito", "sans-serif"],
			},
			fontSize: {
				h1: "48px",
				h2: "36px",
				p: "24px",
				"p-sm": "18px",
				"p-xs": "14px",
			},
		},
	},
	plugins: [],
};
