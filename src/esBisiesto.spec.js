import esBisiesto from "./esBisiesto";

describe("Es Bisiesto", () => {
  it("El 4 deberia considerarse como anio bisiesto", () => {
   
   expect(esBisiesto(4)).toEqual(true);
    
  });
});

describe("No es  Bisiesto", () => {
  it("El 5  deberia considerarse como anio bisiesto", () => {
      expect(esBisiesto(5)).toEqual(false);
    
  });

describe("El año 2000 es bisiesto", () => {
    expect(esBisiesto(2000)).toBe(true);
});

describe("El año 1900 no es bisiesto", () => {
  expect(esBisiesto(1900)).toBe(false);
});
});