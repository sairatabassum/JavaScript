document.querySelector("button").addEventListener("click", func);

function func() {
    alert("You click this button");
}



document.addEventListener("mouseover", function () {

    var v = document.querySelector("#h1");
    v.classList.add("my_style");

});



document.addEventListener("mouseout", function () {

    var v = document.querySelector("#h1");
    v.classList.remove("my_style");

});

