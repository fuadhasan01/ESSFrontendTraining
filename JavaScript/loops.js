//Loops

//For loop
for(let i=0; i<5; i++){
    console.log("For loop iteration: " + i);
}


//While loop
let j = 0;
while(j<5){
    console.log("While loop iteration: " + j);
    j++;
}

//Do-While loop
let k = 0;
do{
    console.log("Do-While loop iteration: " + k);
    k++;
}while(k<5);

//For...of loop
let arr = [10, 20, 30, 40, 50];
for(let value of arr){
    console.log("For...of loop value: " + value); 
}

//For...in loop
let obj = {name: "Alice", age: 25, city: "New York"};
for(let key in obj){
    console.log(key + ": " + obj[key]);
}

//Break and Continue
for(let m=0; m<10; m++){
    if(m === 5){
        console.log("Breaking the loop at m = " + m);
        break; // Exit the loop when m is 5
    }
    if(m % 2 === 0){
        console.log("Continuing at even m = " + m);
        continue; // Skip even numbers
    }
    console.log("Loop m value: " + m);
}

//Nested loops
for(let x=1; x<=3; x++){
    for(let y=1; y<=2; y++){
        console.log(`Nested loop x: ${x}, y: ${y}`);
    }
}

//Labeled loops
outerLoop: for(let p=1; p<=3; p++){
    for(let q=1; q<=3; q++){
        if(p === 2 && q === 2){
            console.log("Breaking out of outer loop at p = " + p + ", q = " + q);
            break outerLoop; // Breaks out of the outer loop
        }
        console.log(`Labeled loop p: ${p}, q: ${q}`);
    }
}

//Infinite loop example (commented out to prevent actual infinite loop)
// while(true){
//     console.log("This is an infinite loop");
// }


