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

  test("El año 2000 es bisiesto", () => {
    expect(esBisiesto(2000)).toBe(true);
  });
});