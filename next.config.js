/**
 * @type {import('next').NextConfig}
 * This is the configuration object for Next.js.
 * It allows you to customize various aspects of the build process and runtime behavior.
 */
const nextConfig = {
  /**
   * Enables React's strict mode.
   * In strict mode, React will help you find potential bugs by enforcing stricter rules.
   */
  reactStrictMode: true,

  /**
   * Customizes the webpack configuration.
   * This function allows you to modify the webpack configuration before it is used by Next.js.
   * @param {import('webpack').Configuration} config - The default webpack configuration.
   * @returns {import('webpack').Configuration} - The modified webpack configuration.
   */
  webpack: (config) => {
    // Add 'canvas' to the list of externals to prevent bundling it with Next.js.
    // This is required for using Three.js, which relies on the 'canvas' module.
    config.externals = [...config.externals, { canvas: 'canvas' }];

    // Return the modified webpack configuration.
    return config;
  },

  /**
   * Defines environment variables that will be available at runtime.
   * These variables can be accessed using the `process.env` object.
   */
  env: {
    /**
     * The API key for accessing the GROQ API.
     * This environment variable can be accessed using `process.env.GROQ_API_KEY`.
     */
    GROQ_API_KEY: process.env.GROQ_API_KEY,
  },
};

// Export the Next.js configuration object.
module.exports = nextConfig;