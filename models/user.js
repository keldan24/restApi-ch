const mongoose = require('../config/db'); // Import the mongoose instance

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
