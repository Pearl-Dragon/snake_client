// this resembles the server.js from the lecture
//const net = require("net");
const connect = require("./client")
const setupInput = require("./input")

// setup interface to handle user input from stdin
// const setupInput = function () {
//   const stdin = process.stdin; //the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();

//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = function (data) {
//   // Handle user input logic here
//   // Example: exit the program when "ctrl + c" is pressed
//   if (data === '\u0003') {
//     process.exit();
//   }
// };  THIS WHOLE FN (6 -23 ) IS NOW IMPORTED FROM input.js

  // interpret incoming data as text
  //console.log (connect())
 // const conn = connect(); // 16,17,19,25 being switched around.This version 1
//conn.on("data", (data) => {
  
  //console.log("Recieved data:", data);
//});

  //return conn;


//console.log("Connecting ...");
console.log("Connecting ..."); // 26,27,29,30,33 Version 2
const conn = connect(); 
//connect(); 
// conn.on("connect", () => {
//   console.log("Successfully connected to game server");
setupInput(conn);

//   setInterval(() => {
//     conn.write("heartbeat");
//   }, 1000); // to keep the connection active
// });
//  conn.on("data", (data) => {  // error msg:conn not defined
//   console.log("Received data:", data);
//  });

//setupInput(conn);
