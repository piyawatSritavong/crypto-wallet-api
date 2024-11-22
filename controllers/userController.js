const { UserMock } = require('../mockDB');

exports.getUsers = async (req, res) => {
  try {
    const users = await UserMock.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await UserMock.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error creating user' });
  }
};