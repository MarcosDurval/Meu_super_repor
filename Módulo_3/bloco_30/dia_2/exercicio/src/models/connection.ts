import mongoose from 'mongoose';

const connectMongo = (mongoDatabaseURI = process.env.MONGO_URI
  || 'mongodb://localhost:27017/TrybeStore') => 
  mongoose.connect(mongoDatabaseURI);

export default connectMongo;