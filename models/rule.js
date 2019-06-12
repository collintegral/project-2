module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define("rules", {
    title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Rule;
};
