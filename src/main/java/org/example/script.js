$(document).ready(function() {
    // select 2 activation
    $('.select2').select2();

    // hide the cards when filter active
    $('#searchButton').on('click', function() {
        if($('#location').val() || $('#Property-type').val() || $('#Buy-Rent').val() || $('#Rooms').val() || $('#Budget').val()) {
            let selLocation = $('#location').val();
            let regexPattern = new RegExp(selLocation, 'gi');

            $('.card').each(function() {
                let cardFindTitle = $(this).find('.card-subtitle').text();

                if(regexPattern.test(cardFindTitle)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            })
        }
    });
});