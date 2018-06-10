var number = 120;
var intervalId;
$("#submit").on("click", stop);
$("#start").on("click", stop);
var questionData = {
    questions: {
        question1: "Who was the only non-member of the Beatles to receive a performance credit on an album?",
        question2: "Who was the oldest Beatle",
        question3: "The Beatles’ 1967 double A-side Strawberry Fields Forever/Penny Lane became their first single since Love Me Do in 1962 to fail to top the UK charts. What held it at number two?",
        question4: "Which of the following Beatles songs was not banned by the BBC?"
    },
    options: {
        options1: ["Eric Clapton", "Billy Preston", "Ravi Shankar", "Mick Jagger"],
        options2: ["John", "Paul", "George", "Ringo"],
        options3: ["A Whiter Shade of Pale by Procol Harum", "Release Me by Engelbert Humperdinck", "I’m a Believer by The Monkees", "This Is My Song by Petula Clark"],
        options4: ["I Am The Walrus", "With A Little Help From My Friends", "A Day In The Life", "Lucy In The Sky with Diamonds"]
    },
    answers: {
        answer1: "Billy Preston",
        answer2: "Ringo",
        answer3: "Release Me by Engelbert Humperdinck",
        answer4: "With a Little Help From My Friends"
    }
}

function start() {
    
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    

    
    // displayQuestions()
}

function displayQuestions(){
    $("#questions").append(questions.question1);
    for(i = 0; i < questions.options.length; i++){
        $("radiobutton").append(questions.option1[i]);
    }
}


function submit() {
    console.log
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

function stop() {
    clearInterval(intervalId);
}



