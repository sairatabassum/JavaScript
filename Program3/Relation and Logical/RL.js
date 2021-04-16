// <, >,  >=, <=, ==, ===, !=, !==
// &&,  ||,  !

var num1=parseInt(10);
var num2=parseInt(20);

document.write(num1<num2,"<br>");

document.write(num1>num2,"<br>");

document.write(num1<=num2,"<br>");

document.write(num1>=num2,"<br>");

document.write(num1==num2,"<br>");

document.write(num1!=num2,"<br>");

document.write(50==50,"<br>");

// Check value & Data type
document.write(50==="50","<br>")
document.write(50!=="50","<br>")

// Only value check
document.write(50=="50","<br>");
document.write(50!="50","<br>");

// Logical Operator

var x,y,z,k;

x=10,y=20,z=5,k=30;

document.write(x<y&&z<k,'<br>');
document.write(x<y || z>k ,'<br>');

