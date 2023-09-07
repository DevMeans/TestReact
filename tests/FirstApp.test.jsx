import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en FirstApp", () => {
  test("Debe hacer macth con el snapshot", () => {

      render(<FirstApp />)

  });
});
