const fs = require('fs');
const path = require('path');
const db = require('../db.js');

const basename = path.basename(__filename);
const models = {};

models.conn = db();

fs.readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = models.conn.import(path.join(__dirname, file));
    const name = file.split('.')[0];
    models[name] = model;
  });

const {
  Product, Categories, User, Order, OrderDetail, Reviews
} = models;

// Add model relationships here
// Categories.hasMany(Product,{as:"productos", foreignKey: "idCategoria"})
// Product.belongsTo(Categories, {as:"categoria"})
// User.belongsTo(User, {as: 'Users'})

Categories.hasMany(Product,{as:"productos", foreignKey: "categoriaName"})
Product.belongsTo(Categories, {as:"categoria"});
User.hasMany(Order, { as: 'orders' });
Product.belongsToMany(Order, { through: OrderDetail });
Order.belongsToMany(Product, { through: OrderDetail });
Product.hasMany(Reviews, { as: 'reviews' });
User.hasMany(Reviews, { as: 'reviews' });
Reviews.belongsTo(Product, { as: 'product' });
Reviews.belongsTo(User, { as: 'User' });
Order.belongsTo(User, { as: 'User' });

module.exports = models;
