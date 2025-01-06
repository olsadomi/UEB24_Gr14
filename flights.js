        ``

$(document).ready(function () {
    // Handle click event for the "view details" button
    $(".view-details-btn").on("click", function (e) {
        e.preventDefault();

        // Fetch flight details from the data attribute
        var flightDetails = $(this).closest("a").data("details");

        if (!flightDetails) {
            console.error("No flight details found. Ensure your <a> tag has the 'data-details' attribute.");
            return;
        }

        // Update the popup content with line breaks in all relevant fields
        $("#popup-title").text(flightDetails.title || "Flight Details");

        // Replace \n with <br> in details and other fields
        $("#popup-details").html(flightDetails.details ? flightDetails.details.replace(/\n/g, "<br>") : "No additional details available.");
        $("#popup-scheduledArrival").html(flightDetails.scheduledArrival ? flightDetails.scheduledArrival.replace(/\n/g, "<br>") : "No additional details available.");
        $("#popup-countryFrom").html(flightDetails.countryFrom ? flightDetails.countryFrom.replace(/\n/g, "<br>") : "No additional details available.");
        $("#popup-countryDestination").html(flightDetails.countryDestination ? flightDetails.countryDestination.replace(/\n/g, "<br>") : "No additional details available.");

        // Show the popup
        $("#flight-popup, #popup-overlay").fadeIn();
    });

    // Close the popup when clicking the close button
    $(".close").on("click", function () {
        $("#flight-popup, #popup-overlay").fadeOut();
    });

    // Close the popup when clicking outside of it
    $(window).on("click", function (event) {
        if ($(event.target).is("#popup-overlay")) {
            $("#flight-popup, #popup-overlay").fadeOut();
        }
    });
});

// Scroll event to change navbar color
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.nav-container');
    const scrollThreshold = 100; // Adjust this value to control when the color changes
    if (window.scrollY > scrollThreshold) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});
