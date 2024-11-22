const request = require('supertest');
const app = require('./server');
const { UserMock } = require('./mockDB');

describe('User API', () => {
    it('GET /users - should return all users', async () => {
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

        const res = await request(app).get('/users');

        // ตรวจสอบ HTTP Status
        expect(res.statusCode).toBe(200);

        // ตรวจสอบ Response
        expect(res.body).toEqual([
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

    it('POST /users - should create a new user', async () => {
        // Mock ข้อมูล
        const newUser = {
            name: 'Charlie',
            email: 'charlie@example.com',
            phone: '1234567890',
        };

        // ส่ง Request ไป API
        const res = await request(app).post('/users').send(newUser);

        // ตรวจสอบ Response
        expect(res.statusCode).toBe(201);

        // ตรวจสอบ Body
        expect(res.body).toEqual(
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