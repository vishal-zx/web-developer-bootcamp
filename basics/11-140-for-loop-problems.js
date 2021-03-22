// Part1 
console.log("\nPrint all numbers from -10 to 19!\n")
for(var i=-10;i<=19;i++){
    console.log(i)
}


console.log("\nPrint all even numbers from 10 to 40!\n")
// Part2
for (var i = 10; i <= 40; i++){
    if(i%2==0){
        console.log(i)
    }
    i++;
}


console.log("\nPrint all odd numbers from 300 to 333!\n")
// Part3
for (var i = 300; i <= 333; i++){
    if (i%2==1){
        console.log(i)
    }
    i++;
}


console.log("\nPrint all numbers divisable by 5 and 3 from 5 to 50!\n")
// Part4
for (var i = 5; i <= 50; i++){
    if(i%5==0 && i%3==0){
        console.log(i)
    }
    i++;
}

console.log("\nThanks!\n")
