const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define("users", {
    pk_user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
    },
    user_password: {
      type: DataTypes.STRING,
    },
    user_pin: {
      type: DataTypes.STRING,
    },
    fk_user_state: {
      type: DataTypes.INTEGER,
    },
  });

  User.associate = function (models) {
    User.belongsTo(models.userstates, {
      foreignKey: "fk_user_state",
      as: "users",
    });

    User.hasMany(models.products, {
      foreignKey: "fk_user_id",
      as: "products",
    });
  };

  // Método de instancia para validar contraseña
  User.prototype.isValidPassword = async function (password) {
    return bcrypt.compare(password, this.user_password);
  };

  return User;
};
