const Sequelize = require('sequelize')
const db = require('../db')


const OrderItem = db.define('orderItem', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 1
    }
  });

  module.exports = OrderItem