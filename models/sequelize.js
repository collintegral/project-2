var Sequelize = require("sequelize");
var mysql = require("mysql2");

// ! You will need to change the password for this to work on your SYSTEM //
var connection = new Sequelize("dungeon_db", "root", "Liam2012", {
  dialect: "mysql"
});

var Rule = connection.define("rules", {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

var User = connection.define("users", {
  firebase_id: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  rule_id_list: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

var Memo = connection.define("memo", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

connection.sync();
