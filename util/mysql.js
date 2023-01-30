const mysql = require('mysql2');

console.log("MYSQL_HOST; ", process.env.MYSQL_HOST);

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
});

const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'railway' AND TABLE_NAME = 'Articles2'`;
pool.query(sql,(err,data)=> {
    if (err){
        return console.error(err.message);
    }


console.log(data);

if (data.length === 0) {
    console.log("Table 'Articles' does not exist");
    seedDB();
} else {
    console.log("Table 'Articles' exists");
}
});





const seedDB = () =>{
    pool.query(`DROP TABLE IF EXISTS Articles2`);

    pool.query(
        `CREATE TABLE Articles2 (
          Articles_ID INT PRIMARY KEY AUTO_INCREMENT,
            Title VARCHAR(100) NOT NULL,
            Description VARCHAR(100) NOT NULL,
            Markdown VARCHAR(100) NOT NULL)`,
        (err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Successful creation of the 'Articles' table");
        }
      );
    
      pool.query(
        `
          INSERT INTO Articles2 (Title, Description, Markdown) VALUES
          (1,'How To Eat', 'How do you eat healthy', 'Absolutely salivating'),
          (2,'Does Your Cat Want to Murder You?', 'Probably she doesn't like you', 'Unexpectedly chilling'),
          (3,'Dame da', 'Ai Gibu-up', 'Who cut the onions?');`,
        (err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Successful creation of 3 Articles");
        }
      );
    };
    
    module.exports = pool.promise();