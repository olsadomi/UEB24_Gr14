$(function(){
    $("#navbar-placeholder").load("nav.html");
    $("#footer-placeholder").load("footer.html");
});

function countchar() {
    const mesazhi = document.getElementById("mesazhi");
    const output = document.getElementById("charCount");
    output.textContent = mesazhi.value.length;
}