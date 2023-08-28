import Calcular from "./totalizador.js";

describe("Calcular Total", () => {
  it("Esta bien CA:", () => {
    expect(Calcular(20,3,8.25)).toEqual(64.95);
  });
  
});