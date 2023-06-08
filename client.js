const net = require("net");
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data

  conn.on("data", (data) => {
    console.log("Received data:", data);
    //     // You can perform any additional processing or actions with the data here
  });

  // // Handle successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // Send the name message
    conn.write("Name: PAL"); // This is how conn is defined!

    //   setTimeout(() => {  OPTION 1:this introduces delay between movements
    //   conn.write("Move: up");
    //   }, 500);
    //   setTimeout(() => {
    //     conn.write("Move: down");
    //   }, 1000);
    // });
    // OPTION 2: Array of movement commands set for the interval of movement
    // const movements = ["up", "down", "left", "right"];

    // // Interval for movement
    // let index = 0;
    // setInterval(() => {
    //   const currentMovement = movements[index % movements.length];
    //   conn.write(`Move: ${currentMovement}`);
    //   index++;
    // }, 50);
  });

  return conn;
};
//connect();
//console.log("Connecting ...");
//
module.exports = connect;
