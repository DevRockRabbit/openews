const calculadora = require("../models/calculadora.js");

test("somar 2+2", () => {
  var resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(40);
});
