const setupInput = function () {
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "w") {
      conn.write("Move: up");
    } else if (key === "a") {
      conn.write("Move: left");
    } else if (key === "s") {
      conn.write("Move: down");
    } else if (key === "d") {
      conn.write("Move: right");
    } else if (key === "\u0003") {
      // Check for Ctrl + C input (ASCII value \u0003) to terminate the game
      process.exit();
    }
  };
stdin.on("data", handleUserInput);

return stdin;
};
  module.exports = { setupInput };