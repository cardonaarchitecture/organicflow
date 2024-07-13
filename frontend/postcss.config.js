/**
 * This is the configuration file for PostCSS plugins.
 * PostCSS is a tool for transforming styles with JavaScript.
 * 
 * @module postcss.config
 * @see {@link https://postcss.org/}
 * @see {@link https://tailwindcss.com/docs/installation#using-post-css-7-with-tailwind-css-v2-0}
 * @see {@link https://github.com/tailwindlabs/tailwindcss}
 * @see {@link https://github.com/postcss/autoprefixer}
 */

module.exports = {
  /**
   * The plugins configuration object.
   * 
   * @property {Object} plugins - The plugins configuration object.
   * @property {Object} plugins.tailwindcss - The Tailwind CSS plugin configuration.
   * @property {Object} plugins.autoprefixer - The Autoprefixer plugin configuration.
   */
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}