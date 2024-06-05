/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            },
            {
                protocol: 'https',
                hostname: 'img.redro.pl',
            },
        ],},
};

export default nextConfig;
