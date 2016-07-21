var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
	config.set({
		//browser to run test in
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		//files to be executed - test files
		files:['app/tests/**/*.test.jsx'],//globbing pattern
		preprocessors:{
			'app/tests/**/*.test.jsx': ['webpack','sourcemap']
		},
		reporters: ['mocha'],
		//tests time out
		client:{
			mocha:{
				timeout:'5000'
			}
		},
		webpack: webpackConfig,
		webpackServer:{
			noInfo:true
		}
	});
};