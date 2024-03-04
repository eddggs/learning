

const firstlist = [1, 2, 3, 14, 5, 20, 78, 11, 120, 22, 9, 18, 155, 168, 88, 69, 102, 1000231234];
const finallist = []
for (let i = 0; i < firstlist.length; i = i + 1){
        const numeros = firstlist[i];    
         if (numeros % 2 === 0){
                console.log(numeros); 
                
                finallist.push(numeros);
        }
         
}

console.log(finallist);








//console.log(i);
//console.log(num[i]);



//let i = 1;
//i = i + 1;
//i++;
//++i;
//i += 1;

//console.log(i)

//const num = 16; // dividir
// const b = num % 2;
// console.log (b);


// const c = [45, 32];
// c.push (3);// push mete cualquier cosa dentro
// c.push (100); // mete mas cosas