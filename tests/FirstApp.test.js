import { render } from "@testing-library/react";
import {FirstApp} from '../src/FirstApp'
describe("Pruebas en FirstApp", () => {
  test("Debe hacer macth con el snapshot", () => {
      const title = "Myriam"
      const {container,getByText}= render(<FirstApp title={title} />)
    //   expect(container).toMatchSnapshot();
    expect (getByText(title)).toBeTruthy();
    const h1 =container.querySelector('h1')
    console.log(h1.innerHTML)
    expect(h1.innerHTML).toBe(title)

  });
});
