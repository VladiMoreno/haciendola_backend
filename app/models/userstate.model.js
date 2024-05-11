module.exports = (sequelize, DataTypes) => {
  let UserState = sequelize.define("userstates", {
    pk_user_state_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_state_name: {
      type: DataTypes.STRING,
    },
  });

  UserState.associate = function (models) {
    UserState.hasMany(models.users, {
      foreignKey: "fk_user_state",
      as: "users",
    });
  };

  return UserState;
};
