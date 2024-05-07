$(document).ready(function() {
var clickedCardId = $(this).attr('id');
 $("#hcard1").on("click", function() {
    console.log("clicking here")
    $("#vcard1").removeClass("card-hidden");
 });
});
/*
$(document).ready(function() {
    // Assuming you have a way to determine the total number of cards
    var totalCards = 2; // Example: You have 10 cards
    for (var i = 1; i <= totalCards; i++) {
        $("#hcard" + i).on("click", function() {
            console.log("clickng here on the card " + i);
            $("#vcard" + i).removeClass("card-hidden");
        });
    }
});*/