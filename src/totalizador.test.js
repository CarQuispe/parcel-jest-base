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
  
  it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de AL", () => {
    expect(Calcular(20,3,4)).toEqual(62.4);
  });
  it("Mostrar el precio total del impuesto según el precio neto y el porcentaje de NV", () => {
    expect(Calcular(20,3,8)).toEqual(64.8);
  });
  it("Mostrar el precio total con el valor del impuesto según el precio neto y el porcentaje de UT", () => {
    expect(Calcular(20,3,6.65)).toEqual(63.99);
  });
  it("Con descuento >1000:", () => {
    expect(Calcular(500, 2, 6.65)).toEqual(1034.51); 
  });

  it("Con descuento >3000:", () => {
    expect(Calcular(1000, 3, 6.65)).toEqual(3039.53) 
  });
   
  it("Con descuento 7000:", () => {
    expect(Calcular(1000, 7, 6.65)).toEqual(7465.5);
  });

});