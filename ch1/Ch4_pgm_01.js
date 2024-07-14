// Displaying an object's properties on the console

var movie1;

movie1 = {
    title     : "Inside Out",
    actors    : "Amy Poehler, Bill Hader",
    directors  : "Pete Docter, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

// 1) Add a second movie and display the same info for it.
var movie2 = {
    title     : "The Matrix",
    actors    : "Keanu Reeves, Carrie-Anne Moss",
    directors  : "Lana Wachowski, Lilly Wachowski"
};

console.log("Movie information for " + movie2.title);
console.log("------------------------------");
console.log("Actors: " + movie2.actors);
console.log("Directors: " + movie2.directors);
console.log("------------------------------");

// 2) Create an object to represent a blog post.
var blogPost = {
    title    : "My Journey Through Space",
    author   : "Jane Doe",
    created  : "2023-07-15",
    content  : "Today I explored the stars and found new worlds!"
};

// 3) Write code to display info about the blog post.
console.log("Blog Post: " + blogPost.title);
console.log("Author: " + blogPost.author);
console.log("Created on: " + blogPost.created);
console.log("Content: " + blogPost.content);
