/**
 * Jest configuration for testing Next.js applications.
 * @module jest.config
 */

module.exports = {
    /**
     * The test environment used for testing.
     * @type {string}
     */
    testEnvironment: 'jsdom',

    /**
     * Setup files to run before each test.
     * @type {string[]}
     */
    setupFilesAfterEnv: ['<rootDir>/tests/jest.setup.js'],

    /**
     * A map from regular expressions to module names that allow to stub out resources, like images or styles.
     * @type {Object.<string, string>}
     */
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },

    /**
     * An array of regexp patterns that are used to ignore tests.
     * @type {string[]}
     */
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],

    /**
     * A map from regular expressions to transformers.
     * @type {Object.<string, string[]>}
     */
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
  };