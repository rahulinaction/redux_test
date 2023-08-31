module.exports = {
  preset: 'react-native',
  setupFiles: [
    "<rootDir>/jest-setup.js",
    "./node_modules/react-native-gesture-handler/jestSetup.js"
  ],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native|react-navigation |@fortawesome | @react-navigation )'
  ],
  transform: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};
