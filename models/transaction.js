const { Model } = require('sequelize');
const sequelize = require('../config/database');
const Wallet = require('./wallet');

class Transaction extends Model {}

Transaction.init(
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    wallet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Wallet,
        key: 'wallet_id',
      },
    },
    wallet_from: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Wallet,
        key: 'wallet_id',
      },
    },
    wallet_to: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Wallet,
        key: 'wallet_id',
      },
    },
    transaction_type: {
      type: DataTypes.ENUM('Transfer', 'Buy', 'Sell'),
      allowNull: false,
    },
    amount: DataTypes.FLOAT,
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize, modelName: 'Transaction', timestamps: false }
);

Wallet.hasMany(Transaction, { foreignKey: 'wallet_id', as: 'transactions' });
Transaction.belongsTo(Wallet, { foreignKey: 'wallet_id', as: 'wallet' });

module.exports = Transaction;