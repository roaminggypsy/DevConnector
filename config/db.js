const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// connect() will give back a promise, we could use .then .catch,
// but async await is the new standard, and looks cleaner.
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit processs with failure
    process.exit(1);
  }
};

module.exports = connectDB;
