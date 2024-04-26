// JavaScript code goes here
$(document).ready(function() {
    $('.select2').select2();

    $('#searchButton').on('click', function() {
        var selectedLocation = $('#location').val();
        $('.card').hide();
        $('.' + selectedLocation.toLowerCase()).show();
    });
});