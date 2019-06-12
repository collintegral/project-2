var db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.rules.findAll({}).then(dbRules => {
      res.render("index", {
        Rule: dbRules.title
      });
    });
  });

  app.get("*", (req, res) => {
    res.render("404", {
      Title: "UH OH!"
    });
  });
};
