var db = require("../models");

module.exports = (app) => {
  // Load index page
  app.get("/", (req, res) => {
    db.Rule.findAll({}).then(dbRules => {
      res.render("index", { Title: DungeonDB });
    });
  });

  app.get("*", (req, res) => {
    res.render("404", { Title: "UH OH!" });
  });
}