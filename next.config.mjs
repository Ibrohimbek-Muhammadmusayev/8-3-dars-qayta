/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.openmoviedb.com',
          },
          {
            protocol: 'https',
            hostname: 'cdni.comss.net',
          },
        ],
        
      },
};

export default nextConfig;
