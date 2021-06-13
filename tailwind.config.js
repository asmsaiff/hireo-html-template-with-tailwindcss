module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
      backgroundImage: {
        'gradient-home-page-header': "linear-gradient(to right, #ffffff 40%, rgba(0, 0, 0, 0))",
      },
    },
	},

	variants: {
		extend: {display: ['group-hover']},
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