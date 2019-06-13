module.exports = async () => {
  const User = require("./user");
  const Memo = require("./memo");

  User.hasMany(Memo);
  Memo.belongsTo(User);
};
