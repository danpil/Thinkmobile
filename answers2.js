// 1
var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  alert(foo);
}
bar(); // 10

//2.  В ф-ии bar есть обьявление переменной foo, а в ф-иях яваскрипт при интерпретировании происходит «поднятие» переменных. // То код в интерпретаторе будет такого вида:

var foo = 1;
function bar() {
  var foo;
  if (!foo) {
    foo = 10;
  }
  alert(foo);
}
bar();

// А ф-ия ищет сначала переменную в своей области видимости, и она находит foo, которая в данный момент undefained, в блоке if ей переопределяется значение на 10.

//3
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a); // 1

// В ф-ии кроме переменных происходит всплытие и ф-ий, которые обьявляются внутри ф-ии. В данном примере в облясти видимости ф-ии b будет определено имя a, и a будет определено внутри ф-ии, переопределения в не ф-ии не будет.

// 4.
var a = 1;
function b() {
  a = 10;
  return;
}
b();
console.log(a);

//6.
var arr = ['буде сонце,', 'буде небо,', 'буде мама,', 'буду я.'];

arr.forEach(function(e) {
  console.log('Нехай завжди '.concat(e));
});

// 7.
var row = 10;
var stars;
var str = '';
var number;
for(var y = 1; y <= 10; y++) {
  if(y <= 5) {
    switch (y) {
      case 1:
        stars = 9;
        number = 9;
        break;
      case 2:
        number = number -1;
        stars = stars + (number);
        break;
      default:
        number = number - 2;
        stars = stars + (number);
      }
    for(var x = 1; x <= stars; x++) {
      str = str + '*';
    }
    console.log(str);
    str = '';
  } else {
    switch (y) {
      case 6:
        number = 0;
        break;
      case 10:
        number = number -1;
        stars = stars - (number);
        break;
      default:
        number = number + 2;
        stars = stars - (number);
      }
    for(var x = 1; x <= stars; x++) {
      str = str + '*';
    }
    console.log(str);
    str = '';
  }
}

// 8.
function timer(seconds) {
  var d1 = new Date(),
      d2 = new Date(d1),
      check = true;
  console.log(d1);
  d2.setSeconds(d1.getSeconds() + seconds);
  while (d1 < d2) {
    d1 = new Date();
  }
  console.log('!!!!!!!!');
  return;
}
timer(10);
