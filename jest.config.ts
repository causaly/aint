import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  testRegex: './lib/.*\\.(test|spec)?\\.(ts|ts)$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
};

export default config;
