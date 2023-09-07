module.exports = {
  // Otras opciones de configuración de Jest...
  // TODO: JSON
  setupFiles: ["./jest.setup.js"],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',/*aca tiene que ser js para archivos jsx o jsx para estos*/
  },
  testEnvironment: "jest-environment-jsdom",
};