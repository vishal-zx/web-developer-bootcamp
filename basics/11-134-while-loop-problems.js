var i=0;


// Part1 
console.log("\nPrint all numbers from -10 to 19!\n")
i=-10
while(i<=19){
    console.log(i)
    i++;
}


console.log("\nPrint all even numbers from 10 to 40!\n")
// Part2
i=10
while(i<=40){
    if(i%2==0){
        console.log(i)
    }
    i++;
}


console.log("\nPrint all odd numbers from 300 to 333!\n")
// Part3
i=300
while(i<=333){
    if (i%2==1){
        console.log(i)
    }
    i++;
}


console.log("\nPrint all numbers divisable by 5 and 3 from 5 to 50!\n")
// Part4
i=5
while(i<=50){
    if(i%5==0 && i%3==0){
        console.log(i)
    }
    i++;
}

console.log("\nThanks!\n")
