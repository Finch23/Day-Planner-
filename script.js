$(document).ready(function() {
    var dt = new Date();
    document.getElementById('date').innerHTML = dt.toLocaleDateString();


    //event handlers for the save buttons
    //grab user text and add to local storage
    $('.saveBtn').on('click', function() {
        event.preventDefault();
        var input = ($(this).prev().children('.form-control').val());
        localStorage.setItem(input);
    });

    //set item







    
});