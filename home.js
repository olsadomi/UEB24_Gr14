$(function(){
    $("#nav-holder").load("nav.html");
    $("#footer-placeholder").load("footer.html");
});

var exp_container = document.querySelector(".exp-photo-container");
var exp_photos = document.getElementsByClassName("exp-photo")

var next_button = document.getElementById("next")

next_button.addEventListener("click",function(){
    
    for(let i=0; i<exp_photos.length;i++){
        exp_photos[i].style.transform = "translateX(250px)"
    }

    setTimeout(function() {
       
        let lastPhoto = exp_photos[exp_photos.length-1];
        // exp_container.prepend(lastPhoto);  
        // lastPhoto.style.transform = "translateX(0)"; 
        
        var newPhoto = document.createElement("div");
        var pElement = lastPhoto.querySelector('p');
        newPhoto.classList.add("exp-photo")

        newPhoto.appendChild(pElement);
        exp_container.prepend(newPhoto);

        lastPhoto.style.transform = "translateX(0)"; 
         // Reset its position to the left
    }, 500);
})


