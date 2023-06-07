// this resembles the server.js from the lecture
const net = require("net");
const connect = require("./client")

  // interpret incoming data as text
  //console.log (connect())
  const conn = connect();
conn.on("data", (data) => {
  
  console.log("Recieved data:", data);
});

  //return conn;


console.log("Connecting ...");
