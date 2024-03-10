
class Calculator {
  a = 0;
  b = 0;

//   constructor(a, b) {
//     if(a) this.a = a;
//     if(b) this.b = b;
//   }

  plus(a, b) {
    return a + b;
  }
  minus(a, b) {
    return a - b;
  }
}

const operation1 = new Calculator();
const operation2 = new Calculator();
const operation3 = new Calculator();
const operation4 = new Calculator();
const operation5 = new Calculator();

const operations = {
  operation1, operation2, operation3, operation4
}
operation1.plus(5,6);
operation2.minus();
operation3.plus();
operation4.minus();
console.log(operations);

operation5.minus();
console.log(operation5);

