var db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.Rule.findAll({}).then(err, dbRules => {
      if (err) {
        console.log(err);
      }
      if (dbRules) {
        console.log(dbRules);
      }
      res.render("index", {
        Title: "DungeonDB",
        Rule: dbRules.title,
        Description: dbRules.description
      });
    });
  });

  app.get("*", (req, res) => {
    res.render("404", {
      Title: "UH OH!"
    });
  });
};
