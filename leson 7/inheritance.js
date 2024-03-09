// class Animal {

//     isAlive = true;
//     numberOfLegs = 4;
//     name = '';
//     age = 0;

//     move(){

//     }
//     eat(){
//         console.log('eat')
//     }
//     grow() {
//         this.age = this.age + 1;
        
//     }
//     die() {
        
//         this.isAlive = false;

//     }
    

// }

// class Cat extends Animal{
//     name = 'cat'

//     eat(){
//         console.log('cat eat')
//     }

//     meow(){
//         console.log('sleepy cat')
//     }
// }

// class Dog extends Animal{

//     bark(){
//         console.log('dog bark')
//     }
// }

// class Pitbull extends Dog {

//     bite(){
//         console.log('pitbull bites')
//     }
// }

// const cat = new Cat();
//     console.log(cat);
//     console.log(eat);

// const dog = new Dog();
//     console.log(dog);

class LoginForm {
    username = '';
    password = '';
    confirmPassword = '';
    errorMessage = [];
    isAllInputCorrect = null;

    submit(){
        //send hhtps request to a server
        // this.username and this.password
    }
    validateInput(){
        if (this.password !== this.confirmPassword){
            this.errorMessage.push('Passwords not matching') 
            this.isAllInputCorrect = false;
        }
        else if(username.lenght >= 16){
            this.errorMessage.push('username length too big')
            this.isAllInputCorrect = false;
        }
        
            
    
    }
}