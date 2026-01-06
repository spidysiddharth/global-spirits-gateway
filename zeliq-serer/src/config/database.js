import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.k5ggr0s.mongodb.net/zeliq?retryWrites=true&w=majority`;
    
    await mongoose.connect(mongoURI);
    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
