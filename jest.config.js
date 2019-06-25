module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  verbose: true,
  bail: true,
  cacheDirectory: 'node_modules/.cache/jest-cache',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/story.{ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10,
    },
  },
  preset: 'ts-jest/presets/js-with-babel',
  moduleDirectories: ['node_modules', 'app', '.'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
      '<rootDir>/internals/testing/jest/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/testing/jest/mocks/image.js',
  },
  setupFilesAfterEnv: ['<rootDir>/internals/jest/setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};
