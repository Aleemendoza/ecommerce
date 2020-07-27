const Categories = (sequelize, S) => {
  // defino el modelo
  const C = sequelize.define('categories', {
    name: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      primaryKey: true
    },
    
  });

  return C;
};

module.exports = Categories;
