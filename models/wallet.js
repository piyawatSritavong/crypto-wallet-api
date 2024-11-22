const { Model } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

class Wallet extends Model {}

Wallet.init(
  {
    wallet_id: {
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
    currency: DataTypes.STRING,
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize, modelName: 'Wallet', timestamps: false }
);

User.hasMany(Wallet, { foreignKey: 'user_id', as: 'wallets' });
Wallet.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

module.exports = Wallet;