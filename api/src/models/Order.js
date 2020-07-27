// modelo Order.

const Order = (sequelize, Or) => {

    const UniqueOrder = sequelize.define('order', {
        id: {
            type: Or.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
          },
     
        status: {
            type : Or.ENUM,
            values: ['Created','Uncreated','Inprocess','Cancelled','Completed'],
            defaultValue: 'Created'

            
        }
  
    }) 

    return UniqueOrder;

}

module.exports = Order;