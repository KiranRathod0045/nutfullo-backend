// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.error(`Error: ${error.message}`.red.bold);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;\

const mongoose = require('mongoose');
const colors = require('colors'); // Ensure this is at the top

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // Functional style: colors.cyan.underline(text)
    console.log(colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`));
    
  } catch (error) {
    // If Mongo URI is missing or wrong, this catches it safely
    console.error(colors.red.bold(`Error: ${error.message}`));
    process.exit(1);
  }
};

module.exports = connectDB;