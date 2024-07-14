// Calling the showMovieInfo function

var movie1;
var showMovieInfo;
var movie;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Docter, Ronaldo Del Carmen"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

// Assign movie1 to movie
movie = movie1;

// Call showMovieInfo
showMovieInfo();

// Further Adventures

// Step 1: Assign movie2 to movie (without declaring movie2 variable)
movie = {
    title: "Unknown Movie",
    actors: "Unknown Actor",
    directors: "Unknown Director"
}; // This simulates assigning movie2 without actually declaring it

showMovieInfo(); // This will work because we defined a new movie object

// Step 2: Create an empty object and assign it to movie2
var movie2 = {}; // This is now declared but empty
movie = movie2;

showMovieInfo(); // This will cause an error because movie2 has no properties

// Step 3: Fill out movie2 with properties needed by showMovieInfo
movie2 = {
    title: "The Matrix",
    actors: "Keanu Reeves, Laurence Fishburne",
    directors: "Lana Wachowski, Lilly Wachowski"
};
movie = movie2;

showMovieInfo(); // This will display the correct movie information
