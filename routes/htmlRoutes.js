const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.rules.findAll({}).then(dbRules => {
      res.render("index", {

        Rule: dbRules.title,
        Description: dbRules.Description
      });
    });
  });

  app.get("*", (req, res) => {
    res.render("404", {
      Title: "UH OH!"
    });
  });
};
