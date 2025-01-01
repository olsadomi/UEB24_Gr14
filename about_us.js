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



$(document).ready(function () {
    $(".faq-answer").hide();

    $(".faq-btn-open").click(function () {
        $(this).closest(".faq-item").find(".faq-answer").show(500);
        $(this).hide(); 
    });

    $(".faq-btn-close").click(function () {
        $(this).closest(".faq-item").find(".faq-answer").hide(500);
        $(this).closest(".faq-item").find(".faq-btn-open").show();
    });
});