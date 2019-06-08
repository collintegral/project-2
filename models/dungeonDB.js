module.exports = (sequelize, DataTypes) => {
  var dungeonDB = {
    Rule: sequelize.define("rules", {
      title: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }),

    User: sequelize.define("users", {
      firebase_id: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      rule_id_list: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    }),

    Memo: sequelize.define("memo", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: DataTypes.INTEGER,
      }
    })
  }
  return dungeonDB;
}