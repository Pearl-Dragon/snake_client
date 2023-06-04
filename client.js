const net = require("net")

//establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({   //You used Node's net library (specifically, the createConnection function) to create an object named conn 
    host: '192.168.1.13', // IP address here,
    port: 50541      // PORT number here,
  });
// The conn object is full of useful methods and properties that can now be used to interact with the server! You will use the conn object to handle messages from the server.

  // next, interpret incoming data as text
  conn.setEncoding("utf8");

  //conn.on("data", (data) => {
  //  console.log("Received data ", data);
  //});


  //use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message
  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write("Name: ABC"); //Send the string "Name: ___" to the server, upon connection
    setTimeout(() => {
    conn.write("Move: up");
    }, 2000); 
    setTimeout(() => {
    conn.write("Move: down");
    }, 1000);
    setTimeout(() => {    
      
    conn.write("Move: left");
    conn.write("Move: right");
    }, 3000);

  });
  conn.on("data", (data) => {
    console.log("Received data: ", data);
  });

  console.log("Connecting ...");

  return conn;
};

module.exports = {connect}