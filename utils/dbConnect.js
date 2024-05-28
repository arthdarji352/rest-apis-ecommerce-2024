import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected", mongoose.connection.host);
  } catch (error) {
    console.log(error, "error while connecting to db");
  }
};

export default connectDb;
