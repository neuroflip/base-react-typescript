/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^.+\\.(scss|css)$': '<rootDir>/src/tests/CSSStub.js',
    '^.+\\.html$': '<rootDir>/src/tests/HTMLStub.js'
  }
}
