module.exports = {
  collectCoverageFrom: [
    'src/web/app/**/*.ts',
    'src/web/environments/**/*.ts',
    'src/web/services/**/*.ts',
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['lcov', 'text-summary'],
};
