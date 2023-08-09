/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
module.exports = {
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: 'jsdom',

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],

  // A map from regular expressions to paths to transformers
  transform: { '^.+\\.ts?$': 'ts-jest' },

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'ts'],

  // The glob patterns Jest uses to detect test files
  testMatch: ['<rootDir>/__tests__/**/*.[jt]s?(x)'],
}
