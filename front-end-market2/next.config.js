/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL,
		APP_URL: process.env.APP_URL
	},
	images: {
		domains: [
			'loremflickr.com',
			'www.aptronixindia.com',
			'cloudflare-ipfs.com',
			'avatars.githubusercontent.com'
		]
	},
	remotePatterns: [
		{
			protocol: 'https',
			hostname: '**'
		}
	]
}

module.exports = nextConfig
