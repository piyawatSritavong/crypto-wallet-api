
# **Crypto API**

This project is Test of SKUBERG COMPANY LIMITED is cryptocurrency wallets. 
It uses **Node.js**, **Express**, and **Jest** for development and testing.

## **Features**
- **GET /users**: Retrieve all users.
- **POST /users**: Create a new user.

---

## **Prerequisites**
Before running the project, ensure you have the following installed:
1. **Node.js** (version 14 or higher)
2. **npm** (comes with Node.js)

---

## **Setup Instructions**
Follow these steps to run the project locally:

### **1. Clone the repository**
```bash
git clone <repository-url>
cd crypto
```

### **2. Install dependencies**
Install all the required dependencies listed in `package.json`:
```bash
npm install
```

### **3. Start the server**
Start the development server using **nodemon**:
```bash
npm run dev
```

The server will start on `http://localhost:3000`.

---

## **Endpoints**
### **GET /users**
- **Description:** Retrieve all users.
- **Example Request:**
  ```bash
  curl -X GET http://localhost:3000/users
  ```
- **Response:**
  ```json
  []
  ```

### **POST /users**
- **Description:** Create a new user.
- **Example Request:**
  ```bash
  curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Charlie", "email": "charlie@example.com", "phone": "1234567890"}'
  ```
- **Response:**
  ```json
  {
    "user_id": 1,
    "name": "Charlie",
    "email": "charlie@example.com",
    "phone": "1234567890",
    "status": "Active"
  }
  ```

---

## **Testing Instructions**
This project uses **Jest** and **Supertest** for testing the API.

### **Run all tests**
To run all test cases, use:
```bash
npm test
```

### **Test Example Output**
After running the tests, you should see an output similar to this:
```bash
PASS  tests/userAPI.test.js
  User API
    ✓ GET /users - should return all users (10 ms)
    ✓ POST /users - should create a new user (12 ms)
    ✓ GET /users - should return all users after adding one (5 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.548 s, estimated 1 s
```

---