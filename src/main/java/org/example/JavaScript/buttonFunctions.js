$(document).ready(function() {
    // select 2 activation
    $('.select2').select2();

    // hide the cards when filter active
    $('#searchButton').on('click', function() {
        // filter for location
        if($('#location').val() || $('#propertyType').val() || $('#tenureType').val() || $('#rooms').val() || $('#budget').val()) {

            // get values
            let selectLocation = $('#location').val();
            let selectPropertyType = $('#propertyType').val();
            let selectBuyRent = $('#tenureType').val();
            let selectRooms = $('#rooms').val();

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
                    $('.select2').val(null).trigger('change');
                } else {
                    $(this).hide();
                    $('.select2').val(null).trigger('change');
                }
            })
        }
    });
    $('#resetButton').on('click', function() {
        $('.card').show();
        $('.select2').val(null).trigger('change');
    });
});