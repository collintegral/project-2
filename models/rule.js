module.exports = (sequelize, DataTypes) => {
  const Rule = sequelize.define("rules", {
    rule_id: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    rule_title: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    rule_description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Rule;
};
