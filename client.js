const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log(data);
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: ELC');
    // conn.write('Move: up');
    // setTimeout(() => {
    //   conn.write('Move: up');
    //   setTimeout(() => {
    //     conn.write('Move: up');
    //   },50);
    // },50);
  });

  return conn;

}



module.exports = { connect };