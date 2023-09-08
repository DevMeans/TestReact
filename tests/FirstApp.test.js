import { render } from "@testing-library/react";
import {FirstApp} from '../src/FirstApp'
describe("Pruebas en FirstApp", () => {
  test("Debe hacer macth con el snapshot", () => {
      const title = "Myriam"
      const {container}= render(<FirstApp title={title} />)
       expect(container).toMatchSnapshot();

  });
});
