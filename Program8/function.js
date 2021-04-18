

function sum(x,y)
{

    var res=x+y;
    return res;

}

var x,y;

x=parseInt(prompt("Enter number1: "));
y=parseInt(prompt("Enter number2: "));

// Calling Function
var res=sum(x,y);

document.write(res);