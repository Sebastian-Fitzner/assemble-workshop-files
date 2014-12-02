module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: '<%= paths.src %>/data/**/*.{json,yml}',
		helpers: '<%= paths.src %>/templates/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templates/layouts/',
		layout: false, 
		partials: [
		'<%= paths.src %>/templates/partials/**/*.hbs',
		'<%= paths.src %>/templates/layouts/tpl-default.hbs'
		],
		collections: [
		'section'
		]
	},
	pages: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templates/pages/',
			dest: '<%= paths.dev %>/',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
		}]
	},
	docs: {
		options: {
			assets: '../'
		},
		files: [{
			cwd: '<%= paths.src %>/templates/docs/',
			dest: '<%= paths.dev %>/docs',
			expand: true,
			flatten: false,
			src: ['**/*.hbs']
		}]
	}
};