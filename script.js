$(document).ready(function() {
    var planTimes = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

    renderList();

    function renderList() {
        for(var i = 0; i < planTimes.length; i++) {
            var renderTimes = planTimes[i];
            var input = $('<input>');
            $('#schedule').text(renderTimes)
            $('#schedule').append(input);
        };
    };
});