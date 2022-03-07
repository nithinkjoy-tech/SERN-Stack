const mysql = require("mysql2/promise");

// module.exports = () => {
  let pool=mysql.createPool({
    host: "localhost",
    user: "root",
    database: "new_schema",
    password: "password",
  })
  

  module.exports = pool
  // await mysql
  //   .createConnection({
  //     host: "localhost",
  //     user: "root",
  //     password: "password",
  //     database: "new_schema",
  //     multipleStatements: true,
  //   })
  //   .then(connection => {
  //     dbConnection(connection);
  //     console.log("Connected to database");
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
// };
