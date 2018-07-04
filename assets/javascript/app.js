var correct = 0;
var incorrect = 0;
var unanswered = 0;

var number = 120;
var intervalId;
$("#submit").on("click", submit);
$("#start").on("click", start);


var questionArray = [
    {
        question: "Who was the only non-member of the Beatles to receive a performance credit on an album?",
        options: ["Eric Clapton", "Billy Preston", "Ravi Shankar", "Mick Jagger"],
        answer: "Billy Preston"
    },
    {
        question: "What was the last song John Lennon played for a paying audience?",
        options: ["I Saw Her Standing There", "Across the Universe", "Imagine", "Bennie and the Jets"],
        answer: "I Saw Her Standing There"
    },
    {
        question: "Which Beatle crossed Abbey Road first?",
        options: ["Ringo", "Paul", "George", "John"],
        answer: "John"
    },
    {
        question: "Which Beatles Song was Written for Mia Farrow's Sister?",
        options: ["For No One", "Dear Prudence", "Julia", "Honey Pie"],
        answer: "Dear Prudence"
    },
    {
        question: "Which was the first Beatle to settle down?",
        options: ["Ringo", "Paul", "George", "John"],
        answer: "John"
    },
    {
        question: "Who was the original drummer for the Beatles?",
        options: ["Stuart Sutcliff", "Pete Best", "Bill Wyman", "Ringo Starr"],
        answer: "Pete Best"
    },
    {
        question: "Which of the Beatles did some fans believe had died and been replaced by a double?",
        options: ["Ringo", "Paul", "George", "John"],
        answer: "Paul"
    }
   
]

// On ready function
$(document).ready(function(){
    displayQuestions();
})

function start() {

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    // Hide the start button 
    $("#start").hide();
    // Show questions and timer
    $("#questions").show();
    $("#show-number").show();

    
}

function displayQuestions() {
    // Change function logic to work with the newly formed array
    // Create a for loop that goes through the questionArray
    for(var i = 0; i < questionArray.length; i++){
        // Create a variable to hold a div element
        var questionDiv = $("<div>");
        // Append a paragraph element that holds the question at the current index of the questionArray
        questionDiv.append("<p>" + questionArray[i].question + "</p>");
        // Write a for loop to move through the array of options at the current index of the questionArray
         for (var answerChoice of questionArray[i].options) {
            // Create a variable to hold the html for the input and label elements
            // What can we use to ensure that these options stay connected? (Hint: What changes with each step of the for loop(The parent for loop)?)
            var outPutStatement = $('<input id="option' + i.toString() + '" type="radio"><label for="option' + i.toString() +'">' + answerChoice + '</label>');
            // Add a class so that later we can check to see which option the user checked
            outPutStatement.attr("class","radiobutton")
            // Add the name attribute to the outPutStatement, be sure to use the above method of making sure that the name is unique for each set of options
            outPutStatement.attr("name", "question" + i.toString());
            // Add the value attribute to store a boolean that represents if this option is the correct one at the current index of the questionArray
            outPutStatement.attr("value", questionArray[i].answer === answerChoice);
            // Add each outPutStatement to our created div above
            questionDiv.append(outPutStatement);
        }
        // Append each created questionDiv to the questions section in our html
        $("#questions").append(questionDiv)
    }
    // Add a submit button to the questions section and inside the form
    $("#questions").append("<button id='submit'>Submit</button>")
}

function submit(event) {
    event.preventDefault();
    // Create a variable that hold all of the checked options on submit
    var isChecked = $(".radiobutton:checked")
    // Turn the node list into an Array
    var isCheckedArray = Array.from(isChecked)
    console.log(isCheckedArray)
    // Create a for loop to move through the variable isCheckedArray
    for(var i = 0; i < isCheckedArray.length; i++) {
        // Check the value attribute of each item in isCheckedArray
        // Each item is technically an object so use if/else to track score
        if (isCheckedArray[i].value === "true"){
            correct++
        }
        else {
            incorrect++;
        }
    }

    // How can we checked for unanswered? (Hint: Subtract the number of questions checked from the total number of questions)
    unanswered = questionArray.length - isCheckedArray.length;

    writeResults();

    // Hide the questions and timer
    $("#questions").hide();
    $("#show-number").hide();
    // Show start button again but have the text say reset
    $("#start").text("Try Again?").show();
}

$(document).on("click", "#submit", submit);

function writeResults() {
    html = "You answered " + correct + " correct";
    console.log(html);
    $("#results").text(html);
    html = "<p>You answered " + incorrect + " incorrect";
    $("#results").append(html);
    html = "<p>and you didn't answer " + unanswered;
    $("#results").append(html);
    correct = 0;
    incorrect = 0;
    unanswered = 0;


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



