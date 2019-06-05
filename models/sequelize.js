var Sequelize = require("sequelize");
var mysql = require("mysql2");

// ! You will need to change the password for this to work on your SYSTEM //
var connection = new Sequelize("dungeon_db", "root", "Liam2012", {
  dialect: "mysql"
});

var Rule = connection.define("rules", {
  title: Sequelize.STRING,
  description: Sequelize.TEXT
});

var User = connection.define("users", {
  firebase_id: Sequelize.STRING,
  rule_id_list: Sequelize.TEXT
});

var Memo = connection.define("memo", {
  title: Sequelize.STRING,
  message: Sequelize.TEXT
});

connection.sync();
