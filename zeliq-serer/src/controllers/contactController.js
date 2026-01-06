import sendEmail from '../services/emailService.js';
import { getCompanyNotificationEmail, getThankYouEmail } from '../templates/emailTemplates.js';

export const handleContactForm = async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    // Send notification email to the company
    const companyEmailBody = getCompanyNotificationEmail({
      name,
      email,
      company,
      phone,
      message,
    });

    await sendEmail({
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      body: companyEmailBody,
    });

    // Send thank you email to the user
    const thankYouEmailBody = getThankYouEmail({ name });

    await sendEmail({
      to: email,
      subject: 'Thank You for Contacting Zeliq',
      body: thankYouEmailBody,
    });

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully!',
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
};
