const { User } = require('../models');

module.exports = async (_req, res) => {
  try{
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};