const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedration = require('webpack/lib/container/ModuleFederationPlugin');

module.exports={
	mode:'development',
	devServer:{
		port:8082,
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:'./public/index.html'
		}),
		new ModuleFedration({
			name:'carts',
			filename:'remoteEntry.js',
			exposes:{
				'./cartIndex':'./src/bootstrap.js'
			},
			shared:['faker'],
		})
	]
}