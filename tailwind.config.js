module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
      backgroundImage: {
        'home-page-header': "url(/assets/images/home-background.jpg)",
        'gradient-home-page-header': "linear-gradient(to right, #ffffff 40%, rgba(0, 0, 0, 0))",
      },
    },
	},

	variants: {
		extend: {},
	},

	plugins: [
		function ({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "100%",
					"@screen sm": {
						maxWidth: "640px",
					},
					"@screen md": {
						maxWidth: "768px",
					},
					"@screen lg": {
						maxWidth: "1080px",
					},
					"@screen xl": {
						maxWidth: "1200px",
					},
				},
			});
		},
	],
};