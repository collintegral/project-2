module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    user_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firebase_id: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    rule_id_list: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return User;
};
