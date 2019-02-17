var counter;
var timer;
var score;
var wins = 0;
var losses = 0;

// setInterval(function() {
//     alert("Hello");
// }, 3000);
// countDown(3000);

$(".questionDiv").hide();

$("#btnNewgame").click(function() {
    newGame();
    $(".questionDiv").show();
    $(this).hide();
});

function countDown(i) {
    var int = setInterval(function() {
        document.getElementById("displayDiv").innerHTML = "Time Left: " + i;
        i-- || clearInterval(timeup()) & clearInterval(int); //if i is 0, then stop the interval and call timeup() function.
    }, 1000);
}


function newGame() {
    countDown(30);
}

//If timer is 0, call this function. When the game is finished, this concluded the score and handles the reset.
function timeup() {
    alert("time is up!");
    //Hide the questions
    $(".questionDiv").hide();
    calculateScore();
}

function calculateScore() {
    $(function() {
        //Calculate questions correct and incorrect
        if ($('input[name=question1]:checked').val() === "Christina Aguilera") {
            wins++;
        } else {
            losses++;
        }
        if ($('input[name=question2]:checked').val() === "Deee-Lite") {
            wins++;
        } else {
            losses++;
        }
        if ($('input[name=question3]:checked').val() === "Meat Loaf") {
            wins++;
        } else {
            losses++;
        }
        if ($('input[name=question4]:checked').val() === "Eye of the Tiger") {
            wins++;
        } else {
            losses++;
        }
        if ($('input[name=question5]:checked').val() === "Madonna") {
            wins++;
        } else {
            losses++;
        }
        displayScore();
    });
}

function displayScore() {
    //alert($('input[name=question1]:checked').val());
    alert("Correct: " + wins + " " + "Incorrect: " + losses);
    document.getElementById("displayDiv").innerHTML = "Answeres correct: " + wins + " " + "Incorrect: " + losses;
}