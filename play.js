const { connect} = require("./client");



const setupInput = function () {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      // Check for Ctrl + C input (ASCII value \u0003) to terminate the game
      process.exit();
    }
  };

  stdin.on("data", handleUserInput);

  return stdin;
};


// Call the connect function to establish the connection
connect()
// Call the setupInput function to set up user input handling
setupInput();