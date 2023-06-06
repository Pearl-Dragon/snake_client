
const net = require("net");
const connect = require("./client")
// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: 'localhost',// IP address here,
//     port: 50541,// PORT number here,
//   });

  // interpret incoming data as text
  conn.setEncoding("utf8");
conn.on("data", (data) => {
  console.log("Recieved data:", data);
});

  return conn;


console.log("Connecting ...");
connect();