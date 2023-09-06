import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas de imp-exp", () => {
  test("getHeroeById debe retornar  heroe por id", () => {
    const id = 1;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });
  test("getHeroeById debe retornar undefined", () => {
    const id = 100;
    const hero = getHeroeById(id);
    console.log(hero);
    expect(hero).toBeFalsy();
    // expect(hero).toBe(undefined)
  });
  test("Retornar los heroes por DC", () => {
    const casa = "DC";
    const heroes = getHeroesByOwner(casa);
    expect(heroes.length).toBe(3);
    expect(heroes).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);
     expect(heroes).toEqual(heroes.filter((heroe)=>heroe.owner==casa))
  });
});
