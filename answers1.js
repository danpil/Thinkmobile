//  1
var varString = "12323";
var varNumber = 2;
var varObject = {
  a: 'test'
};
var varArray = [1, 2, 3];
var varFunction = function() {
  return 0;
};

console.log(varString, typeof varString);
console.log(varNumber, typeof varNumber);
console.log(varObject, typeof varObject);
console.log(varArray, typeof varArray);
console.log(varFunction, typeof varFunction);

// 2
varString = "123";
varNumber = 23;
varString = +varString;
varNumber = varNumber.toString();

console.log(typeof varString);
console.log(typeof varNumber);

// 3
varString = '123';
varNumber = 123;

console.log(+varString === varNumber);
console.log(varString === varNumber.toString());

// 4
varNumber = 12312336;
var codeNumber = varNumber.toString(36);
console.log(codeNumber);
var decodeNumber = parseInt(codeNumber, 36);
console.log(decodeNumber);
