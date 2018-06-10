

//  Variable that will hold our interval ID when we execute
//  the "run" function
var number  = 120;

// when the start button is clicked, start the timer and show the questions
$("#start").on("click", start);
//  When the stop button gets clicked, run the stop function.
$("#submit").on("click", stop);



function start() {
    clearInterval(intervalId);
    number = setInterval(decrement, 1000);


}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #show-number tag.
    $("#show-number").html("<h2>" + number + "</h2>");


    //  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();


    }
}

//  The stop function
function stop() {

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(number);
    //TODO: PROCESS HTML TO DISPLAY RESULTS
}


