const { UserMock, WalletMock } = require('./mockDB');
const seedData = require('./seed');

describe('Seed Script', () => {
  it('should create mock data successfully', async () => {
    // Mock การสร้างข้อมูลใน User และ Wallet
    UserMock.create = jest.fn();
    WalletMock.create = jest.fn();

    await seedData();

    // ตรวจสอบฟังก์ชันสร้างข้อมูลถูกเรียกใช้
    expect(UserMock.create).toHaveBeenCalledTimes(1);
    expect(UserMock.create).toHaveBeenCalledWith({
      name: 'Alice',
      email: 'alice@example.com',
      phone: '1234567890',
    });

    expect(WalletMock.create).toHaveBeenCalledTimes(1);
    expect(WalletMock.create).toHaveBeenCalledWith({
      user_id: 1,
      currency: 'BTC',
      balance: 1.5,
    });
  });
});