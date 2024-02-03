module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  coverageReporters: ['cobertura', 'text-summary', 'html'],
  // collectCoverageFrom: ['src/**/!(__tests__)/*.{ts,js}'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10,
    },
  },
};
