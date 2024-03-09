const user = {
    name:'eduard',
    age: 28,
    address: '24 the Holly',
    gender: 'male',
    cart: [
        {
            itemId:'a-123',
            name:'tootbrush',
            price: 12.5,
            currency: 'euro',
            quantity: 3,
            picture: 'https://example-link'
        },
        {
            itemId:'a-234',
            name:'shoe',
            price: 35,
            currency: 'euro',
            quantity: 2,
            picture: 'https://example-link'
        },
    ]
};
    console.log(user.cart[1].price);

const logicMap = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) =>{
        if (b === 0) console.log('error')
        else return a / b;
    } 

}
console.log(logicMap.plus(5,6))
console.log(logicMap['plus'](5,6))

function calculator (operation, a, b){
 return logicMap[operation](a,b);

}

const result = calculator('plus', 5, 30)
console.log(result)

const personObj = {
    name: 'edd',
    age: 28,
    walk: () => {
        console.log('walk');
    },
    grow: function() {
        this.age = this.age + 1; 
        console.log('growing')
    }

};
console.log(personObj.age)
personObj.grow();
console.log(personObj.age);
personObj.grow();
console.log(personObj.age);
personObj.grow();
console.log(personObj.age);


// Create a calculator class. Inside class you can have meters/functions. Plus and minus functions. create a new instance of that calculator. call plus and minus functions in that instance (hint:car.turnupbrightness)

// show inheritance. class can inherit from another class
// class car, and then all brand inherit from that.