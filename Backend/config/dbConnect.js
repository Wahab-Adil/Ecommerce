import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const mongoConnection = await mongoose.connect(process.env.MONGO_URL);

    console.log(`connection successful ${mongoConnection.connection.host}.`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

export default dbConnection;
