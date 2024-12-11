$(document).ready(function(){
    $(".filter-item").click(function(){
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("3000");
        } else{
            $(".post-box")
                .not("." + value)
                .hide("3000"); 
            $(".post-box")
                .filter("." + value)
                .show("3000");
        }   
    });

    //Active filterin
    $(".filter-item").click(function(){
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    })
})