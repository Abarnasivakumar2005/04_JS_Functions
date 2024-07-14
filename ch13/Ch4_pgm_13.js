// A function to display player information

var player1;
var player2;
var player;
var showPlayerInfo;

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

// Function to show where the player is
var showPlayerLocation = function () {
    console.log(player.name + " is in " + player.place);
};

// Function to show the player's health
var showPlayerHealth = function () {
    console.log(player.name + " has health " + player.health);
};

// Updated function to show player info using the two new functions
showPlayerInfo = function () {
    console.log(player.name);
    console.log("------------------------------");
    showPlayerLocation(); // Use the location function
    showPlayerHealth();   // Use the health function
    console.log("------------------------------");
    console.log("");
};

// Display information for both players
player = player1;
showPlayerInfo();

player = player2;
showPlayerInfo();
