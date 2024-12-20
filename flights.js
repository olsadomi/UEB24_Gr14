

$(document).ready(function() {
    
    $(".view-details-btn").on("click", function(e) {
        e.preventDefault();  
         
        var flightDetails = $(this).closest('a').data('details');   
       
        $('#popup-title').text(flightDetails.title);
        $('#popup-details').text(flightDetails.details);

        
        $('#flight-popup').fadeIn();
    });

    
    $(".close").on("click", function() {
        $('#flight-popup').fadeOut();
    });

     
    $(window).on("click", function(event) {
        if ($(event.target).is("#flight-popup")) {
            $('#flight-popup').fadeOut();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const viewDetailsButton = document.getElementById('viewDetailsBtn');

    if (viewDetailsButton) {
        viewDetailsButton.addEventListener('click', function (event) {
            event.preventDefault();  // Prevents the default behavior of the <a> tag (if you want to do something custom)

            // Your custom code here
            console.log('Button clicked!');

            // If you want to follow the link after custom code execution
            window.location.href = 'flights/arrivals/flight001'; // Redirect manually if needed
        });
    }
});
