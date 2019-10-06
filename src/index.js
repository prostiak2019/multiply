module.exports = function multiply(first, second) {

  return String (BigInt(first)*BigInt(second));
  //  здесь надо исползовать BigInt т.к. в тестах используются большие числа
  //  String преобразует из числа строку.
}

