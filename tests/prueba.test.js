function sum(a, b) {
    return a + b;
  }
  
  test("La función sum debe sumar correctamente dos números", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  const { nextFact, saveFact } = require("./api");


  