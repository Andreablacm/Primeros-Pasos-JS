function sayHello(name, age) {
  console.log('Hola' + name + ', tienes' + age + 'años.');
}
sayHello('Andrea', 24);

function calculateSquareArea(side) {
  console.log(side * side);
}
calculateSquareArea(5);

function calculateTriangleArea(b, h) {
  console.log((b * h) / 2);
}
calculateTriangleArea(5, 2);

function calculateCircleArea(radius) {
  console.log(3.14 * radius * radius);
}
calculateCircleArea(7);

function celsiusToFahrenheit(celsius) {
  console.log(celsius * 1.8 + 32);
}
celsiusToFahrenheit(25);

function fahrenheitToCelsius(farenheit) {
  console.log((farenheit - 32) / 1.8);
}
fahrenheitToCelsius(77);

function totalPrice(price) {
  console.log((price * 21) / 100 + price);
}
totalPrice(5);

function writeMessage(name, material, size, note) {
  console.log(name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + '. ' + note);
}

writeMessage('Andrea', 'zapatos', 38, 'Gracias por su compra.');

function calculateAverage(numA, numB, numC) {
  const average = (numA + numB + numC) / 3;
  return average;
}

const average = calculateAverage(5, 9, 7);
console.log(average);

function calculateDiscount(price, discount) {
  const totalpr = price - (price * discount) / 100;
  return totalpr;
}

const totalpr = calculateDiscount(200, 10);
console.log(totalpr);

function stringWords(wordA, wordB) {
  const word = wordA + '-' + wordB;
  return word;
}
const word = stringWords('Blázquez', 'Mondéjar');
console.log(word);

function calculateMeters(km) {
  const meters = km * 100;
  return meters;
}
const meters = calculateMeters(10);
console.log(meters);

function calculateSec(h) {
  const sec = h * 3600;
  return sec;
}
const sec = calculateSec(5);
console.log(sec);
