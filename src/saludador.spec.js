import saludar from "./saludador";

describe("Saludador", () => {
  it("Saluda correctamente", () => {
    expect(saludar("carmen")).toEqual("Hola carmen");
  });
});

  