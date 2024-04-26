import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'node',
  // set explicitly in npm scripts
  collectCoverage: false,
  coverageDirectory: './coverage',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  rootDir: './',
  testMatch: ['<rootDir>/test/**/*.test.ts'],
  clearMocks: true,
  reporters: ['default'],
  transform: { '^.+\\.(t|j)sx?$': '@swc/jest' },
  maxWorkers: '50%',
  passWithNoTests: true,
}

export default config
