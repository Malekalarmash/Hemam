/** @type {import('next').NextConfig} */
const nextConfig = {
    // import images as a component
    webpack(config, options) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })
        return config
      }
};

export default nextConfig;
