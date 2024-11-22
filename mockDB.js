const SequelizeMock = require('sequelize-mock');

const DBConnectionMock = new SequelizeMock();

const UserMock = DBConnectionMock.define('User', {
  user_id: 1,
  name: 'Alice',
  email: 'alice@example.com',
  phone: '1234567890',
  status: 'Active',
});

const WalletMock = DBConnectionMock.define('Wallet', {
  wallet_id: 1,
  user_id: 1,
  currency: 'BTC',
  balance: 1.5,
});

module.exports = { UserMock, WalletMock };