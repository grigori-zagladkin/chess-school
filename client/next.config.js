/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	reactStrictMode: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.APP_URL,
		API_ENV: process.env.API_ENV,
		STAGE: process.env.STAGE,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:1500/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:1500/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
