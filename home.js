$(function(){
    $("#navbar-placeholder").load("nav.html");
    $("#footer-placeholder").load("footer.html");
});

var airport_container = document.querySelector(".airport");
var city_container = document.querySelector(".city");
var btnAirport= document.querySelector("#plane");
var btnCity= document.querySelector("#city");

btnAirport.addEventListener("click", function(){
    console.log("OK");
    city_container.classList.remove("active");
    airport_container.classList.add("active")
    btnAirport.classList.add("active")
    btnCity.classList.remove("active")
})

btnCity.addEventListener("click", function(){
    console.log("OK");
    city_container.classList.add("active");
    airport_container.classList.remove("active")
    btnCity.classList.add("active")
    btnAirport.classList.remove("active")
})

function getCurrentDate(){
    return Date.getcurrentDate;
}


