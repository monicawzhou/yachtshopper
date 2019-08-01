const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  orderId: Sequelize.INTEGER
})

module.exports = Order
