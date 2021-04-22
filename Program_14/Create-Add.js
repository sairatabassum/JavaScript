
// Create html element

var heading3= document.createElement("h1");
var text= document.createTextNode("Everyone");
heading3.appendChild(text);


// Add  Down
var Div= document.getElementById("heading-div");
Div.appendChild(heading3);


// Add  Upper
var heading0= document.createElement("h1");
var text0= document.createTextNode("Upper Head");
heading0.appendChild(text0);

Div.appendChild(heading0);

// Select the tag that you want to insert  a node before a reference(select tag) node

var heading1=document.getElementsByTagName('h1')[1];
Div.insertBefore(heading0,heading1);

