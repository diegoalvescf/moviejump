module.exports = {
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components",
  ],
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/main/**/*",
    "!<rootDir>/src/**/index.ts",
    "!**/*.d.ts",
  ],
  preset: "jest-expo",
  testPathIgnorePatterns: ["/node_modules", "/ios", "android"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)(\\?inline)?$":
      "jest-transform-stub",
  },
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
};