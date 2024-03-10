// const foo = ['asdf', '']
// type TAllowedUserName = 'ed' | 'me' | 'yw';

// type TUser = {
//   name: TAllowedUserName;
//   age: number;
//   address?: string;
//   gender: string;
//   cart: TCart[] 
// }

// type TCart = {
//   itemId: string;
//   name: string;
//   price: number;
//   currency: string;
//   quantity: number;
//   picture: string;
// }

// const user: TUser = {
//   name: 'yw',
//   age: 12,
//   // address: '24 the holly',
//   gender: 'male',
//   cart: [
//     {
//       itemId:'a-123',
//       name: 'toothbrush',
//       price: 12.5,
//       currency: 'euro',
//       quantity: 3,
//       picture: 'https://example-link'
//     },
//     {
//       itemId:'a-234',
//       name: 'shoe',
//       price: 32.5,
//       currency: 'euro',
//       quantity: 1,
//       picture: 'https://example-link'
//     },

//   ],
// };
// user.name = 'me'
// console.log(user);

const logicMap = {
  plus: (a, b) => a + b, 
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if(b === 0) console.log('error')
    else return a / b;
  },
};

console.log(logicMap['plus'](1,2));

function calculator(operation, a, b) {
  return logicMap[operation](a, b);
}

const result = calculator('divide', 2, 0);
console.log(result);

const personObj = {
  name: 'yinghan',
  age: 1,
  walk: () => {
    console.log('walk');
  },
  grow: function() {
    this.age = this.age + 1;
    console.log('growing');
  }
};

console.log(personObj.age);
personObj.grow();
console.log(personObj.age);


class Car {
  color = 'black';
  lightBrightness = 1;
  speed = 0;

  constructor(color, lightBrightness, speed) {
    if(color) this.color = color;
    if(lightBrightness) this.lightBrightness = lightBrightness;
    if(speed) this.speed = speed;
  }

  turnUpBrightness() {
    if(this.lightBrightness >= 10) return;
    this.lightBrightness++;
  }
  turnDownBrightness() {
    if(this.lightBrightness === 0) return;
    this.lightBrightness--;
  }
}

const car = new Car('red', 4, 0);
const car2 = new Car('yellow', 5, 2);
const car3 = new Car(null, null, 6);


const cars = {
  car, car2, car3
}
car.turnUpBrightness();
console.log(cars);