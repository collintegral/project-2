module.exports = (sequelize, DataTypes) => {
  const Memo = sequelize.define("memo", {
    memo_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    memo_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER
    }
  });
  return Memo;
};
