// String Concatenation
document.write("<br>Saira "+ "Tabassum<br>")

var num1=80
var num2=30

document.write("Num1= "+num1+" Num2= "+num2+"<br>")
console.log(typeof(num1))

// ConCat funtion
var nam1="Saira ";
var nam2="Tabassum";

var fullname=nam1.concat(nam2)
document.write(fullname+"<br>")


// String Length

var name="Saira Tabassum";
var len=name.length
document.write("Length of string= "+len+"<br>");

// Input from user

var name= prompt("Enter your name: ");
document.write("Input: "+name+"<br>");

// Index string

var name="Saira Tabassum";
document.write(name.charAt(1)+"<br>");


// UpperCase  & LowerCase

var name="Saira Tabassum";
document.write(name.toUpperCase()+"<br>");
document.write(name.toLowerCase()+"<br>");

// Slice function

var nam="Saira Tabassum";
var result=name.slice(0,5);
document.write(result);
