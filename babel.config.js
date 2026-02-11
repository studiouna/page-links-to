module.exports = function(api) {
	api.cache(true);

	const presets = [
		'@babel/react',
		// '@babel/preset-typescript',
		[
			'@babel/preset-env',
			{
				"targets": "> 0.25%, not dead, ie >= 9",
			}
		],
	];

	const plugins = [
		'@babel/plugin-transform-class-properties',
		'@babel/plugin-transform-object-rest-spread',
	];

	return {
		presets,
		plugins,
	};
};
