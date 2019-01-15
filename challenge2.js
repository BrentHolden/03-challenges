numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbersEven = [];
numbersOdd = [];

numbers.forEach(operator => {

switch(true) {
    case operator %2 === 0:
        numbersEven.push(operator);
        break;
      default:
      numbersOdd.push(operator);

}})

console.log(numbersEven);
console.log(numbersOdd);