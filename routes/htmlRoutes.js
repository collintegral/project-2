const db = require("../models");

module.exports = (app) => {
  // Load index page
  app.get("/", (req, res) => {

    db.rules.findAll({}).then(result => {
      res.render("index", {
        Title: "DungeonDB",
        Rule: result.title,
        Description: result.description
      });
    });
  });

  app.get("*", (req, res) => {
    res.render("404", {
      Title: "UH OH!"
    });
  });
};
