$(document).ready(function() {
    var dt = new Date();
    document.getElementById('date').innerHTML = dt.toLocaleDateString();

    refresh();


    $('.saveBtn').on('click', function() {
        event.preventDefault();
        var input = ($(this).prev().children('.form-control').val());
        var id = ($(this).prev().children('.form-control').attr('id'));
        localStorage.setItem('input' + id, input);

    });




    function refresh() {
        var currentTime = dt.getHours();
        for(var i = 9; i < 18; i++) {
            var times = 'input' + i;
            $('#'+i).val(localStorage.getItem(times));
            if(currentTime === i) {
                $('#'+i).css('background-color', 'green');
                $('#'+i).css('color', 'white');
            } else if(currentTime < i) {
                $('#'+i).css('background-color', 'red');
                $('#'+i).css('color', 'white');
            } else {
                $('#'+i).css('background-color', 'blue');
                $('#'+i).css('color', 'white');
            }
        }
    }





    
});