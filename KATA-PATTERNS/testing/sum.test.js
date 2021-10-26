const sum = require('./sum');

test('1 + 2 to be equal to 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
})

test('0 - 5 to be equal to -5', () => {
  const result = sum(0, -5);
  expect(result).toBe(-5);
})

test('[] + NaN to be equal to NaN', () => {
  const result = sum([], NaN);
  expect(result).toBe("NaN");
})


/**
 * Resumen de TDD:
 * 
 * NO ES HACER PRIMERO TESTS,
 * es hacer primero un proceso de análisis, y creación
 * de un documento de diseño que te permite
 * identificar QUÉ TESTS DEBES ESCRIBIR o mejor dicho
 * QUÉ ESCENARIOS DEBES TOMAR EN CUENTA ANTES DE ESCRIBIR TU CÓDIGO
 */

test('se agrega una persona al tablero');

test('se borra una persona del tablero');

test('se manda una invitacion al tablero');

test('se acepta una invitacion que ya expiro para unirse');