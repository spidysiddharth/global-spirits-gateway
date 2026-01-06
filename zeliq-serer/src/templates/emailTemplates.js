// Email template for notification to the company
export const getCompanyNotificationEmail = ({ name, email, company, phone, message }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 16px; overflow: hidden; border: 1px solid #d4af37;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d4af37 0%, #b8962e 100%); padding: 30px; text-align: center;">
            <h1 style="margin: 0; color: #0a0a0a; font-size: 24px; font-weight: 600;">
              New Contact Form Submission
            </h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <p style="color: #d4af37; font-size: 16px; margin: 0 0 30px 0;">
              You have received a new message from your website contact form.
            </p>
            
            <!-- Contact Details -->
            <div style="background-color: #1a1a1a; border-radius: 12px; padding: 25px; margin-bottom: 25px; border: 1px solid #333;">
              <h2 style="color: #d4af37; font-size: 18px; margin: 0 0 20px 0; border-bottom: 1px solid #333; padding-bottom: 10px;">
                Contact Details
              </h2>
              
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px; width: 120px;">Name:</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px;">Email:</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">
                    <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px;">Company:</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">${company}</td>
                </tr>
                ` : ''}
                ${phone ? `
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px;">Phone:</td>
                  <td style="padding: 10px 0; color: #ffffff; font-size: 14px;">
                    <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}
              </table>
            </div>
            
            <!-- Message -->
            <div style="background-color: #1a1a1a; border-radius: 12px; padding: 25px; border: 1px solid #333;">
              <h2 style="color: #d4af37; font-size: 18px; margin: 0 0 15px 0; border-bottom: 1px solid #333; padding-bottom: 10px;">
                Message
              </h2>
              <p style="color: #ffffff; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
            
          </div>
          
          <!-- Footer -->
          <div style="background-color: #0d0d0d; padding: 20px 30px; text-align: center; border-top: 1px solid #333;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              This email was sent from the Zeliq website contact form.
            </p>
          </div>
          
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email template for thank you message to the user
export const getThankYouEmail = ({ name }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You for Contacting Us</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0a;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        <div style="background: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%); border-radius: 16px; overflow: hidden; border: 1px solid #d4af37;">
          
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #d4af37 0%, #b8962e 100%); padding: 40px; text-align: center;">
            <h1 style="margin: 0; color: #0a0a0a; font-size: 28px; font-weight: 600; font-style: italic;">
              Zeliq
            </h1>
            <p style="margin: 10px 0 0 0; color: #1a1a1a; font-size: 14px;">
              Premium Spirits Distribution
            </p>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px;">
            <h2 style="color: #d4af37; font-size: 24px; margin: 0 0 20px 0;">
              Thank You, ${name}!
            </h2>
            
            <p style="color: #cccccc; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              We appreciate you reaching out to us. Your message has been received and our team will review it shortly.
            </p>
            
            <p style="color: #cccccc; font-size: 16px; line-height: 1.8; margin: 0 0 20px 0;">
              One of our representatives will get back to you within <strong style="color: #d4af37;">24-48 business hours</strong>.
            </p>
            
            <div style="background-color: #1a1a1a; border-radius: 12px; padding: 25px; margin: 30px 0; border-left: 4px solid #d4af37;">
              <p style="color: #888; font-size: 14px; margin: 0 0 10px 0; font-style: italic;">
                "Connecting the world's finest spirits with discerning markets across the globe."
              </p>
            </div>
            
            <p style="color: #cccccc; font-size: 16px; line-height: 1.8; margin: 0;">
              In the meantime, feel free to explore our website to learn more about our premium portfolio and global distribution network.
            </p>
            
          </div>
          
          <!-- Footer -->
          <div style="background-color: #0d0d0d; padding: 30px; text-align: center; border-top: 1px solid #333;">
            <p style="color: #d4af37; font-size: 14px; margin: 0 0 15px 0; font-weight: 600;">
              Zeliq Pte. Ltd.
            </p>
            <p style="color: #666; font-size: 12px; margin: 0 0 5px 0;">
              Singapore Business Hub, 1 Raffles Place, #50-01
            </p>
            <p style="color: #666; font-size: 12px; margin: 0;">
              © ${new Date().getFullYear()} Zeliq. All rights reserved.
            </p>
          </div>
          
        </div>
      </div>
    </body>
    </html>
  `;
};
