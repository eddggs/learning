

// function bottleOpener(bottleType) {

//     if (bottleType === 'beer bottle' || bottleType === 'wine bottle'){

//         console.log('open bottle' + ' ' + bottleType);
//     }
        

//     else {
//         console.log('invalid bottle type');

//     }
    
// }

// bottleOpener('beer bottle');
// bottleOpener('can');
// bottleOpener(4);
// bottleOpener('burger');

// siempre pensar input y output
// 


// function bottleOpener(bottleType) {

//     if (const bottleTypes = [`beer`, `wine`])
//     const hasValidTypes = bottleTypes.includes ('beer');
        // console.log(hasValidTypes)

//     else
    

    
// }

// bottleOpener('beer bottle');
// bottleOpener('can');
// bottleOpener(4);
// bottleOpener('burger');

// ? significa if
// : significa else


function icecreammachine(flavor, size, topping){
    console.log('icea cream' + ' ' + flavor + ' ' + size + ' ' + topping)

}

icecreammachine('chocolate', 'big', 'cookie crumbs')

function add(a, b) {
    const sum = (a + b);
    return sum;

}

const sum = add (1, 3);
console.log(sum)

function vendingmachine(productType, productName) {
    if(productType === "drink"){
        getdrink(productName);
    }
    else if(productType === "chocolate"){
        getchocolate(productName)
    }
    else{
        console.log('invalid product type')
    }


}

function getdrink (name ){

    console.log ('drink' + ' ' + name)
}

function getchocolate (name){

    console.log ('chocolate' + ' '+ name)
}

vendingmachine('drink', 'cola')
vendingmachine('chocolate', 'hazelnut')

const user = {

    age:10
    name:'edd'
    job: 'pro'
}