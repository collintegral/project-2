var db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.dungeonDB.dungeonDB.rules.findAll({}).then(dbRules => {
      res.render("index");
    });
  });

  app.get("*", (req, res) => {
    res.render("404");
  });
}