import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  source: {
    type: String,
    default: 'age_verification',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create index on email for faster lookups
emailSchema.index({ email: 1 });

const Email = mongoose.model('Email', emailSchema);

export default Email;
