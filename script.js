$(document).ready(function() {
    var dt = new Date();
    document.getElementById('date').innerHTML = dt.toLocaleDateString();

    var scheduleTimes = [
        '9am: ',
        '10am: ',
        '11am: ',
        '12pm: ',
        '1pm: ',
        '2pm: ',
        '3pm: ',
        '4pm: ',
        '5pm: ',
    ];

    for(var i = 0; i < scheduleTimes.length; i++) {
        var newDiv = $('<div>' + scheduleTimes[i] + '</div>');
        $('#schedule').append(newDiv);
        $('#schedule').addClass('.divPlan');
    };
});