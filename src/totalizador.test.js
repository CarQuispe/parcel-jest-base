import Calcular from "./totalizador.js";

describe("Calcular precio neto", () => {
  it("precio por cantidad:", () => {
    expect(Calcular(20,2)).toEqual(40);
  });
  
});