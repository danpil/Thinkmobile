function mathExample(operation, num1, num2) {
  var result;
  if(!mathExample.cashPlus) {
    mathExample.cashPlus = 0;
  }
  if(!mathExample.cashDivision) {
    mathExample.cashDivision = 0;
  }
  if(!mathExample.cashMinis) {
    mathExample.cashMinis = 0;
  }
  if(!mathExample.cashMultiplication) {
    mathExample.cashMultiplication = 0;
  }
  if(num2 === undefined) {
    num2 = num1;
    switch (operation) {
      case '+':
        num1 = mathExample.cashPlus
        break;
      case '-':
        num1 = mathExample.cashMinis
        break;
      case '/':
        num1 = mathExample.cashDivision
        break;
      case '*':
        num1 = mathExample.cashMultiplication
        break;
    }
  }
  switch (operation) {
    case '+':
      result = num1 + num2;
      mathExample.cashPlus = result;
      break;
    case '-':
      result = num1 - num2;
      mathExample.cashMinis = result;
      break;
    case '/':
      result = num1 / num2;
      mathExample.cashDivision = result;
      break;
    case '*':
      result = num1 * num2;
      mathExample.cashMultiplication = result;
      break;
  }
  return result;
}
