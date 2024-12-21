$(function () {
    $("#navbar-placeholder").load("nav.html");
    $("#footer-placeholder").load("footer.html");
});


function popupFn() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popupDialog").style.display = "block";
}

function closeFn() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popupDialog").style.display = "none";
}

document.getElementById("overlay").addEventListener("click", function (e) {
    if (e.target === this) {
        closeFn();
    }
});