$(document).ready(function() {
    var dt = new Date();
    document.getElementById('date').innerHTML = dt.toLocaleDateString();

    refresh();


    $('.saveBtn').on('click', function() {
        event.preventDefault();
        var input = ($(this).prev('.form-control').val());
        var id = ($(this).prev('.form-control').attr('id'));
        console.log(id)
        localStorage.setItem('input' + id, input);

    });

    $('.delBtn').on('click', function() {
        event.preventDefault();
        var input = ($(this).prev('.saveBtn').prev().val());
        var id = ($(this).prev('.saveBtn').prev().attr('id'));
        location.reload();
        localStorage.removeItem('input' + id, input);
        console.log(localStorage)
    })




    function refresh() {
        var currentTime = dt.getHours();
        for(var i = 9; i < 18; i++) {
            var times = 'input' + i;
            $('#'+i).val(localStorage.getItem(times));
            if(currentTime === i) {
                $('#'+i).css('background-color', 'teal');
                $('#'+i).css('color', 'white');
            } else if(currentTime < i) {
                $('#'+i).css('background-color', 'black');
                $('#'+i).css('color', 'white');
            } else {
                $('#'+i).css('background-color', 'blue');
                $('#'+i).css('color', 'white');
            }
        }
    }





    
});