let prompt = require('prompt-sync')();
let n= Number(prompt("enter a number "));
// process.stdout.write(a)
// process.stdout.write('hello');

for (let i =1  ; i <=n  ; i++){
    for(let j =i ; j<=n-i+1; j++){
process.stdout.write("* ")

    }
    console.log();
}

// for(let i = 1; i <=n ;i--  ){
//     let ascii = 65;
//     for (let j=1; j<=i; j--){
//         process.stdout.write(String.fromCharCode(ascii)+ " ");
//         ascii++;
//     }
//     console.log();
    
// }

