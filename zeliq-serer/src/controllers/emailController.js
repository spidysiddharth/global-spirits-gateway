import Email from '../models/Email.js';

export const saveEmail = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
      });
    }

    // Check if email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      return res.status(200).json({
        success: true,
        message: 'Email already registered',
        data: existingEmail,
      });
    }

    // Save new email
    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(201).json({
      success: true,
      message: 'Email saved successfully',
      data: newEmail,
    });
  } catch (error) {
    console.error('Error saving email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save email',
      error: error.message,
    });
  }
};

export const getAllEmails = async (req, res) => {
  try {
    const emails = await Email.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: emails.length,
      data: emails,
    });
  } catch (error) {
    console.error('Error fetching emails:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch emails',
      error: error.message,
    });
  }
};
