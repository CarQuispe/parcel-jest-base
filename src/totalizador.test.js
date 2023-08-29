import Calcular from "./totalizador.js";

describe("Calcular precio neto", () => {
  //it("precio por cantidad:", () => {
    //expect(Calcular(20,2)).toEqual(40);
  //});

  it("precio total del impuesto según el precio neto y el porcentaje de CA:", () => {
    expect(Calcular(20,2,8.25)).toEqual(43.3);
  });

  it("precio total con el valor del impuesto según el precio neto y el porcentaje de TX", () => {
    expect(Calcular(20,3,6.25)).toEqual(63.75);
  });
  
  
});