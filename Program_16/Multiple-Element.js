

for(var i=0;i<3;i++){

    document.querySelectorAll(".Button")[i].addEventListener("click",function(){

        var text= this.innerHTML;
        var v= document.querySelector("h1");
        v.innerHTML= text+ " is clicked";
        v.classList.remove("Tomato");
        v.classList.remove("Yellow");
        v.classList.remove("Violet");
        v.classList.add(text);
       
    });
    
    
}