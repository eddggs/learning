function calculator(operation, a ,b){
    let result;
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('a and b must be numbers!')
        
    }
    else{

        if (operation === '+') {
            result = suma(a, b);
        }
        else if(operation === '-') {
            result = resta(a, b);
        }
        else if(operation === '*') {
            result = multi(a, b);
        }
        else if(operation === '/') {
            result = div(a, b);
        }
        else {
            console.log('invalid', 'eres', 'tonto');
        }
        function suma(a, b){
            return a + b;
        }
        function resta(a, b){
            return a - b;
        }
        function multi(a, b){
            return a * b;
        }
        function div(a, b){
            return a / b;
        }
        console.log(result);
    }
        
}
calculator('-', 2, 897);
calculator('*', '6', '4');
calculator('test', 7, 9);