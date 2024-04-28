// JavaScript code goes here
$(document).ready(function() {
    // select 2 activation
    $('.select2').select2();

    // hide the cards when filter active
    $('#searchButton').on('click', function() {
        // filter for location
        if($('#location').val() || $('#Property-type').val() || $('#Buy-Rent').val() || $('#Rooms').val() || $('#Budget').val()) {

            // get values
            let selectLocation = $('#location').val();
            let selectPropertyType = $('#Property-type').val();
            let selectBuyRent = $('#Buy-Rent').val();
            let selectRooms = $('#Rooms').val();

            // create the regex pattern
            let regexLocation = new RegExp(selectLocation, 'gi');
            let regexPropertyType = new RegExp(selectPropertyType, 'gi');
            let regexBuyRent = new RegExp(selectBuyRent, 'gi');
            let regexRooms = new RegExp(selectRooms, 'gi');

            $('.card').each(function() {
                let cardFindLocation = $(this).find('.card-subtitle').text();
                let cardFindPropertyType = $(this).find('.card-subtitle').text();
                let cardFindBuyRent = $(this).find('.card-subtitle').text();
                let cardFindRooms = $(this).find('.card-text').text();

                if((regexLocation.test(cardFindLocation)) || (regexPropertyType.test(cardFindPropertyType)) || (regexBuyRent.test(cardFindBuyRent)) || (regexRooms.test(cardFindRooms))) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            })
        }
    });

    $('#budgetRange').on('input', function() {
        $('#selectedBudget').text($(this).val());
    });
});

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