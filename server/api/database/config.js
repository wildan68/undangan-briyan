let mysql = require('mysql');

let connection = mysql.createPool({
  host: 'bvdyfy8vjxl00uktme4w-mysql.services.clever-cloud.com',
  user: 'uprakjydjy3lsjhj',
  password: 'rY88DA06ebtBmi2O243A',
  database: 'bvdyfy8vjxl00uktme4w'
});

//connection.connect(function(error) {
//    if (!!error) {
//        console.log(error);
//    } else {
//        console.log('\n==================================')
//        console.log('√ Koneksi Database Berhasil Terhubung!\n')
//        console.log('==================================\n')
//    }
//})

function keepAlive() {
  connection.getConnection(function(err, connection) {
    if (err) { console.error('mysql keepAlive err', err); return; }
    console.log('ping db')
    connection.ping(); // this is what you want
    connection.release();
  });
}
setInterval(keepAlive, 60000);


module.exports = connection;