const Product = (sequelize, S) => {
  // defino el modelo
  const P = sequelize.define('product', {
    id: {
      type: S.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: S.STRING,
    description: S.STRING,
    price: S.INTEGER,
    stock: S.INTEGER,
    image: S.STRING
});
return P;


}
module.exports = Product;
