const net = require("net")

let intervalId;

const connect = function () {
  const conn = net.createConnection({  
    host: '192.168.1.13', 
    port: 50541,
  });
  // next, interpret incoming data as text
  conn.setEncoding("utf8");


  //use the .on method on our conn object to register a "connect" handler (a callback function). In the callback, print a message
  conn.on("connect", () => {
    console.log("Connected to game server");
    conn.write("Name: ABC"); //Send the string "Name: ___" to the server, upon connection

     
  //    intervalId = setInterval(() => {   
  //  // conn.write("Move: up");
  //  // }, 50); 

  //   setInterval(() => {  // smooth movement accross the board
  //   conn.write("Move: down");
  //   }, 50);
     
  
  //   setInterval(() => { 
  //   conn.write("Move: left");
  //   }, 50);

  //   setInterval(() => {
  //   conn.write("Move: right");
  //   }, 50);
  
  });
  conn.on("data", (data) => {
    console.log("Received data: ", data);
  });

  console.log("Connecting ...");

  return conn;
};
// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);


module.exports = {connect}