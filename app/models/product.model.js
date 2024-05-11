module.exports = (sequelize, DataTypes) => {
  let Product = sequelize.define("products", {
    pk_product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_handle: {
      type: DataTypes.STRING,
    },
    product_title: {
      type: DataTypes.STRING,
    },
    product_description: {
      type: DataTypes.TEXT,
    },
    product_sku: {
      type: DataTypes.INTEGER,
    },
    product_grams: {
      type: DataTypes.FLOAT,
    },
    product_stock: {
      type: DataTypes.INTEGER,
    },
    product_price: {
      type: DataTypes.FLOAT,
    },
    product_compare_price: {
      type: DataTypes.FLOAT,
    },
    product_bar_code: {
      type: DataTypes.STRING,
    },
    fk_user_id: {
      type: DataTypes.INTEGER,
    },
  });

  Product.associate = function (models) {
    Product.belongsTo(models.users, {
      foreignKey: "fk_user_id",
      as: "products",
    });
  };

  return Product;
};
