const { Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Cryptocurrency = require('./cryptocurrency');

class Order extends Model {}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'user_id',
      },
    },
    order_type: {
      type: DataTypes.ENUM('Buy', 'Sell'),
      allowNull: false,
    },
    crypto_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Cryptocurrency,
        key: 'crypto_id',
      },
    },
    price_per_unit: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM('Open', 'Succeed', 'Canceled'),
      defaultValue: 'Open',
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize, modelName: 'Order', timestamps: false }
);

User.hasMany(Order, { foreignKey: 'user_id', as: 'orders' });
Order.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

Cryptocurrency.hasMany(Order, { foreignKey: 'crypto_id', as: 'orders' });
Order.belongsTo(Cryptocurrency, { foreignKey: 'crypto_id', as: 'cryptocurrency' });

module.exports = Order;