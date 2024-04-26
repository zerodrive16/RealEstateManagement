// JavaScript code goes here
$(document).ready(function() {
    $('.select2').select2();

    $('#searchButton').on('click', function() {
        if($('#location').val() || $('#Property-type').val() || $('#Buy/Rent').val() || $('#Rooms').val() || $('#Budget').val()) {
            $('.card').hide();

            var selectedLocation = $('#location').val();

            $('.' + selectedLocation.toLowerCase()).show();
        }
    });
});