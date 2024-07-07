/**
 * Tailwind CSS configuration file.
 * 
 * @typedef {import('tailwindcss').Config} TailwindConfig
 * 
 * @type {TailwindConfig}
 */
module.exports = {
    /**
     * An array of glob patterns indicating where Tailwind should look for class names.
     * 
     * @type {string[]}
     */
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],

    /**
     * Customize the default theme and add new custom styles.
     * 
     * @type {{ extend: Record<string, any> }}
     */
    theme: {
      extend: {},
    },

    /**
     * An array of Tailwind CSS plugins to be used.
     * 
     * @type {import('tailwindcss/plugin').Plugin[]}
     */
    plugins: [],
  }
  