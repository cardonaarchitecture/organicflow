/**
 * This is the configuration file for ESLint, which is used to enforce coding standards and best practices.
 * 
 * @module eslint-config
 * @author YourName
 * @version 1.0.0
 */

/**
 * The main configuration object for ESLint.
 * 
 * @type {Object}
 * @property {boolean} root - Indicates that this configuration is the root configuration.
 * @property {Array.<string>} extends - An array of strings representing the configuration files to extend.
 * @property {Object} rules - An object containing custom rules for ESLint.
 */
module.exports = {
    root: true,
    extends: ["next", "next/core-web-vitals"],
    rules: {
      // Custom rules
    },
  };