const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals = [...config.externals, { canvas: 'canvas' }];
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  },

  env: {
    GROQ_API_KEY: process.env.GROQ_API_KEY,
  },
};
module.exports = nextConfig;