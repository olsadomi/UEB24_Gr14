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

        // Update the popup content
        $("#popup-title").text(flightDetails.title || "Flight Details");
        $("#popup-details").text(flightDetails.details || "No additional details available.");

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

