const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://oleksii_ivanichok:user1234@cluster0.jt5mqhb.mongodb.net/?retryWrites=true&w=majority');

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
