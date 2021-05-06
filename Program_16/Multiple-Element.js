document.querySelector("#button1").addEventListener("click",function(){

    var v= document.querySelector("#h1");
    v.innerHTML="Tomato";
    v.classList.remove("my_style2")
    v.classList.remove("my_style3")
    v.classList.add("my_style1");

});

document.querySelector("#button2").addEventListener("click",function(){

    var v= document.querySelector("#h1");
    v.innerHTML="Yellow";
    v.classList.remove("my_style1");
    v.classList.remove("my_style3")
    v.classList.add("my_style2");
    
 });

document.querySelector("#button3").addEventListener("click",function(){

    var v= document.querySelector("#h1");
    v.innerHTML="Violet";
    v.classList.remove("my_style1")
    v.classList.remove("my_style2")
    v.classList.add("my_style3");

    
 });  