$(document).ready(function () {
    var Random = Math.floor(Math.random() * 120 + 19)
    $('#number').text(Random);

    var GeneratedNumbers = []
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    function fourRandomNumbers() {
        for (var i = 0; i < 4; i++) {
            var num = Math.floor(Math.random() * 12 + 1);
            GeneratedNumbers.push(num);
        }
    }
    fourRandomNumbers();

    function reset() {
        Random = Math.floor(Math.random() * 69 + 30);
        $('#number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#combined').text(total);
    }

    function winner() {
        alert("You won!!!");
        wins++;
        $('#numberWins').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    $('#one').on('click', function () {
        total = total + GeneratedNumbers[0];
        $('#combined').text(total);

        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    })

    $('#two').on('click', function () {
        total = total + GeneratedNumbers[1];
        $('#combined').text(total);

        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    })

    $('#three').on('click', function () {
        total = total + GeneratedNumbers[2];
        $('#combined').text(total);

        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    })

    $('#four').on('click', function () {
        total = total + GeneratedNumbers[3];
        $('#combined').text(total);

        if (total == Random) {
            winner();
        }
        else if (total > Random) {
            loser();
        }
    });

});