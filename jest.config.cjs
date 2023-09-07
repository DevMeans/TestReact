module.exports = {
  // Otras opciones de configuración de Jest...
  //TODO:JSON
  setupFiles: ["./jest.setup.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
};
