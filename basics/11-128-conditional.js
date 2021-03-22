alert("Welcome to Conditional Statement Webpage")
var age = prompt("Enter your age: ")
if(age<0)
{
    alert("hey!! age can't be negative! LOL")
    console.log("hey!! age can't be negative! LOL")
}
if(age==21)
{
    alert("Happy 21st Birthday")
    console.log("Happy 21st Birthday")
}
if(age%2==1) 
{
    alert("Your age is odd")
    console.log("Your age is odd")
}
if(age%Math.sqrt(age)==0)
{
    alert("yeah! perfect square!")
    console.log("yeah! perfect square!")
}