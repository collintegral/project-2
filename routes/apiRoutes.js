const db = require("../models");
const auth = require("../auth.js");

module.exports = (app) => {
  // Get all rules
  app.get("/api/rules", (req, res) => {
    db.dungeonDB.dungeonDB.Rule.findAll({}).then(result => {
      res.json(result);
    });
  });

  // Get all memos
  app.get("/api/memos", (req, res) => {
    db.dungeonDB.dungeonDB.Memo.findAll({where: { userID: auth.userID }}).then(result => {
      res.json(result);
    })
  })
  // Create a new memo
  app.post("/api/newmemo", (req, res) => {
    db.dungeonDB.dungeonDB.Memo.create(req.body).then(result => {
      res.json(result);
    });
  });

  // Edit a memo by id
  app.put("/api/memos/:id", (req, res) => {
    db.dungeonDB.dungeonDB.Memo.update(req.body, { where: { id: req.params.id } }).then(result => {
      res.json(result);
    });
  });

  // Delete a memo by id
  app.delete("/api/gonememo/:id", (req, res) => {
    db.dungeonDB.dungeonDB.Memo.destroy({ where: { id: req.params.id } }).then(result => {
      res.json(result);
    });
  });
};
