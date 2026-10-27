/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['lib/**/*.{js,ts}'],
  testRegex: './lib/.*\\.(test|spec)\\.(js|ts)$',
};
