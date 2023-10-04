/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	
	theme: {
		colors: {
			// ### Primary

			blue: "hsl(223, 87%, 63%)",

			// ### Secondary

			paleBlue: "hsl(223, 100%, 88%)",
			lightRed: "hsl(354, 100%, 66%)",

			// ### Neutral

			gray: "hsl(0, 0%, 59%)",
			veryDarkBlue: "hsl(209, 33%, 12%)",
			green: "#4BB543",
		},
		extend: {
		
            fontFamily:{
                libreFranklin: "'Libre Franklin', sans-serif",
            }
		},

	},
	plugins: [],
};
