// Displaying information from similar objects

var movie1 = {
  title     : "Inside Out",
  actors    : "Amy Poehler, Bill Hader",
  directors  : "Pete Docter, Ronaldo Del Carmen"
};

var movie2 = {
  title     : "Spectre",
  actors    : "Daniel Craig, Christoph Waltz",
  directors  : "Sam Mendes"
};

var movie3 = {
  title     : "Star Wars: Episode VII - The Force Awakens",
  actors    : "Harrison Ford, Mark Hamill, Carrie Fisher",
  directors  : "J.J. Abrams"
};

// 1) Add a fourth movie and display its info
var movie4 = {
  title     : "The Grand Budapest Hotel",
  actors    : "Ralph Fiennes, F. Murray Abraham",
  directors  : "Wes Anderson"
};

function displayMovieInfo(movie) {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
  console.log(""); // Add space between movies
}

// Display information for all movies
displayMovieInfo(movie1);
displayMovieInfo(movie2);
displayMovieInfo(movie3);
displayMovieInfo(movie4);

// 3) Create objects to represent three calendar events
var event1 = {
  title      : "Project Meeting",
  date       : "2023-07-20",
  time       : "10:00 AM",
  location   : "Conference Room A"
};

var event2 = {
  title      : "Birthday Party",
  date       : "2023-07-25",
  time       : "6:00 PM",
  location   : "123 Main St"
};

var event3 = {
  title      : "Grocery Shopping",
  date       : "2023-07-22",
  time       : "4:00 PM",
  location   : "Supermarket"
};

// 4) Display info from the three events on the console
function displayEventInfo(event) {
  console.log("Event: " + event.title);
  console.log("Date: " + event.date);
  console.log("Time: " + event.time);
  console.log("Location: " + event.location);
  console.log(""); // Add space between events
}

// Display information for all events
displayEventInfo(event1);
displayEventInfo(event2);
displayEventInfo(event3);
