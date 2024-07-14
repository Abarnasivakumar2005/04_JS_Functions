// Using a function to display object properties

var showMovieInfo;

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

// Step 1: Add a call to showMovieInfo
showMovieInfo(); // This will cause an error because 'movie' is not defined.

// Step 2: Declare a movie variable but don't assign it a value.
var movie; // Running the program will result in an error.

// Step 3: Create an empty object and assign it to the movie variable.
movie = {}; // Running the program will still result in an error because properties are missing.

// Step 4: Add title, actors, and directors properties to the movie object.
movie.title = "Inception";
movie.actors = "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page";
movie.directors = "Christopher Nolan";

// Run the showMovieInfo function again
showMovieInfo();
