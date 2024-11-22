const { Model } = require('sequelize');
const sequelize = require('../config/database');

class Crypto extends Model {}

Crypto.init(
  {
    crypto_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    current_price: DataTypes.FLOAT,
  },
  { sequelize, modelName: 'Crypto', timestamps: false }
);

module.exports = Crypto;