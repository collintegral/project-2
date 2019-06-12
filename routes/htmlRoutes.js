const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
<<<<<<< HEAD

    db.rules.findAll({}).then(result => {
      res.render("index", {
        Title: "DungeonDB",
        Rule: result.title,
        Description: result.description
=======
    db.rules.findAll({}).then(dbRules => {
      res.render("index", {
        Rule: dbRules.title
>>>>>>> 031e7e183c6b955d277e321d8145db66ee92395b
      });
    });
  });

  app.get("*", (req, res) => {
    res.render("404", {
      Title: "UH OH!"
    });
  });
};
