import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  collectCoverageFrom: ['lib/**/*.{js,ts}'],
  testRegex: './lib/.*\\.(test|spec)\\.(js|ts)$',
};

export default config;
