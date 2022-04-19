import mongoose from 'mongoose';

const connectMongo = mongoose.connect('mongodb://localhost:27017/TrybeStore');

export default connectMongo;