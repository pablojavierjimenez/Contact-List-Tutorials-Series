// @ts-nocheck
const mysql = require('mysql');

const dbConfig = {
  host: "127.0.0.1",
  database: "contactListDB",
  user: "root",
  password: ""
}

const db = mysql.createConnection(dbConfig)

db.connect(function(err){
  if(err) throw err;
  console.log("connection success!!!")
})

module.exports = db
