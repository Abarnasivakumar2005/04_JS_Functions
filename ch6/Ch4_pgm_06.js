// Calling the sayHello function three times

var sayHello;

sayHello = function () {
    console.log("Hello\nWorld!");
};

// Call the sayHello function three times
sayHello();
sayHello();
sayHello();

// Function to print letters of "Hello World!" one by one
var printLetters = function () {
    var message = "Hello World!";
    for (var i = 0; i < message.length; i++) {
        console.log(message[i]);
    }
};

// Call the printLetters function
printLetters();
