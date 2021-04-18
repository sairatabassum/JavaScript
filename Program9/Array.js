
// Array declaration
var num= new Array(5);

var lang=["C","C++","Python","Java"];

// Array initialization

lang.push("Ruby");

num[0]=1;

num[1]=2;

num[2]=3;

num[3]=4;

num[4]=5;

// Array print
document.write(num,'<br>');
document.write(lang,'<br>')

for(var i=0;i<num.length;i++){

    document.write(num[i],'<br>');
}


// Remove element

lang.pop();
document.write('<br>',lang);

// Two Array Concat

var fruit=["Orange","Mango"];
var snacks=["Fry","Ktchup"];

var x=fruit.concat(snacks);

document.write('<br>',x);



