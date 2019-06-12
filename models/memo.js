module.exports = (sequelize, DataTypes) => {
  const Memo = sequelize.define("memo", {
    title: {
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
