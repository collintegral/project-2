module.exports = (sequelize, DataTypes) => {
  const dungeonDB = {
    Rule: sequelize.define("rules", {
      title: {
        type: Datatypes.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: Datatypes.TEXT,
        allowNull: false
      }
    }),

    User: sequelize.define("users", {
      firebase_id: {
        type: Datatypes.STRING,
        unique: true,
        allowNull: false
      },
      rule_id_list: {
        type: Datatypes.TEXT,
        allowNull: false
      }
    }),

    Memo: sequelize.define("memo", {
      title: {
        type: Datatypes.STRING,
        allowNull: false
      },
      message: {
        type: Datatypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: Datatypes.VARCHAR,
      }
    })
  }
  return dungeonDB;
}