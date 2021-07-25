module.exports = {
  roots: ["<rootDir>/src/"],
  testMatch: ["**/?(*.)+(spec|test).js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
