const { connect } = require("./client");
const setupInput = require("./input");

console.log("Connecting ...");

// Call the connect function to establish the connection
connect();

// Call the setupInput function to set up user input handling
setupInput();