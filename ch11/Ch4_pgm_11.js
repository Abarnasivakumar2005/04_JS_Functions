// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J. Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

// Display movie information
movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

// Further Adventures

// Step 1: Create an object to represent a quiz question
var question1 = {
    question: "What is the capital of France?",
    options: ["A) London", "B) Paris", "C) Berlin", "D) Madrid"],
    answer: "B) Paris"
};

var question2 = {
    question: "What is 2 + 2?",
    options: ["A) 3", "B) 4", "C) 5", "D) 6"],
    answer: "B) 4"
};

var question3 = {
    question: "Which planet is known as the Red Planet?",
    options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"],
    answer: "B) Mars"
};

// Step 3: Create a function to show the question and answer options
var showQuestionInfo = function () {
    console.log("Question: " + question.question);
    console.log("Options:");
    question.options.forEach(function(option) {
        console.log(option);
    });
    console.log("------------------------------");
};

// Step 4: Use the same variable assignment technique to display all three questions
var question;

question = question1;
showQuestionInfo();

question = question2;
showQuestionInfo();

question = question3;
showQuestionInfo();
