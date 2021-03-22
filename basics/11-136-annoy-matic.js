//method 1
// var ishere = prompt("Are we there yet hooman?")
// while (ishere !== "yeah" && ishere !== "yes") {
//     ishere = prompt("Ohh, so are we there yet hooman :-| ?")
// }
// alert("Yay, we finally made it hooman!")

//method 2
var ishere = prompt("Are we there yet hooman?")
while (!ishere.includes("yeah") && !ishere.includes("yes")) {
    ishere = prompt("Ohh, so are we there yet hooman :-| ?")
}
alert("Yay, we finally made it hooman!") 