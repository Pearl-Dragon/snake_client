const net = require("net")

const connect = () => {
  const conn = net.createConnection({
    host: '192.168.1.13',// IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Handle incoming data
//   // conn.on("data", (data) => {
//     console.log("Received data:", data);
//     // You can perform any additional processing or actions with the data here
//   });
// // Handle successful connection
// conn.on('connect', () => {
//   console.log('Successfully connected to game server');
//   // Send the name message
//   conn.write('Name: PAL'); // Replace XYZ with your initials
// });
  return conn;
};

//console.log("Connecting ...");

module.exports = connect;