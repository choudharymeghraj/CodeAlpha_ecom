const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (err) {
    console.error("MONGO CONNECTION ERROR:", err);
  }
};
module.exports = connectDB;
