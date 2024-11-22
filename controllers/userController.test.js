const { UserMock } = require('../mockDB');
const userController = require('./userController');

describe('User Controller', () => {
  it('should return all users', async () => {
    // Mock ข้อมูล
    UserMock.$queueResult([
      {
        user_id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        phone: '1234567890',
        status: 'Active',
        createdAt: '2024-11-22T06:14:46.510Z',
        updatedAt: '2024-11-22T06:14:46.510Z',
    },
    {
        user_id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        phone: '0987654321',
        status: 'Active',
        createdAt: '2024-11-22T06:15:00.000Z',
        updatedAt: '2024-11-22T06:15:00.000Z',
    },
    ]);

    // Mock Request และ Response
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await userController.getUsers(req, res);

    // ตรวจสอบ Response
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      {
        user_id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        phone: '1234567890',
        status: 'Active',
        createdAt: '2024-11-22T06:14:46.510Z',
        updatedAt: '2024-11-22T06:14:46.510Z',
    },
    {
        user_id: 2,
        name: 'Bob',
        email: 'bob@example.com',
        phone: '0987654321',
        status: 'Active',
        createdAt: '2024-11-22T06:15:00.000Z',
        updatedAt: '2024-11-22T06:15:00.000Z',
    },
    ]);
  });

  it('should create a new user', async () => {
    // Mock ผู้ใช้ใหม่
    UserMock.$queueResult({
      user_id: 1,
      name: 'Charlie',
      email: 'charlie@example.com',
      phone: '1234567890',
      status: 'Active',
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const req = {
      body: { name: 'Charlie', email: 'charlie@example.com' },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await userController.createUser(req, res);

    // ตรวจสอบ Response
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        user_id: expect.any(Number), 
        name: 'Charlie',
        email: 'charlie@example.com',
        phone: '1234567890',
        status: 'Active', 
        createdAt: expect.any(String),
        updatedAt: expect.any(String), 
    })
    );
  });
});