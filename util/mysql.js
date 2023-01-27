const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'containers-us-west-110.railway.app',
    user:'root',
    password:'yn6KEOIH7heL6hkMjtlD',
    database:'railway',
    port: 5488
});

const sql = `SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = 'railway' AND TABLE_NAME = 'Articles'`;
pool.query(sql,(err,data)=> {
    if (err){
        return console.error(err.message);
    }

if (err) {
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
    pool.query(`DROP TABLE IF EXISTS Articles`);

    pool.query(
        `CREATE TABLE Articles (
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
          INSERT INTO Articles (Title, Description, Markdown) VALUES
          ('How To Eat', 'How do you eat healthy', 'Absolutely salivating'),
          ('Does Your Cat Want to Murder You?', 'Probably she doesn't like you', 'Unexpectedly chilling'),
          ('Dame da', 'Ai Gibu-up', 'Who cut the onions?');`,
        (err) => {
          if (err) {
            return console.error(err.message);
          }
          console.log("Successful creation of 3 Articles");
        }
      );
    };
    
    module.exports = pool.promise();