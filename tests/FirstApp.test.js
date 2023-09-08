import { render,screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";
describe("Pruebas en FirstApp", () => {
  const title = "Myriam";
  test("Debe hacer macth con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });
  test('Debe de mostrar el mensaje "Hola Myriam"', () => { 
    render(<FirstApp title={title} />)
    expect(screen.getByText('Soy '+title)).toBeTruthy()
   })
   test('Debe de mostrar el titulo en un h1', () => { 
    render(<FirstApp title={title} />)
     expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)
    })
});
