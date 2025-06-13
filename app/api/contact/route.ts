import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.address || !data.message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter with Gmail configuration
    const transporter = nodemailer.createTransporter({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    const mailOptions = {
      from: `"Yard Men Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `🌿 New Quote Request - ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1b3d2f; color: #f5f5ef; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1b3d2f; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #d4af37; }
            .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #ddd; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🌿 New Quote Request</h1>
              <p>Yard Men Landscaping Services</p>
            </div>
            
            <div class="content">
              <h2 style="color: #1b3d2f; margin-bottom: 20px;">Customer Information</h2>
              
              <div class="field">
                <div class="label">👤 Full Name:</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email Address:</div>
                <div class="value">
                  <a href="mailto:${data.email}" style="color: #1b3d2f; text-decoration: none;">
                    ${data.email}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">📞 Phone Number:</div>
                <div class="value">
                  <a href="tel:${data.phone}" style="color: #1b3d2f; text-decoration: none;">
                    ${data.phone}
                  </a>
                </div>
              </div>
              
              <div class="field">
                <div class="label">🏠 Property Address:</div>
                <div class="value">${data.address}</div>
              </div>
              
              <h2 style="color: #1b3d2f; margin: 30px 0 15px 0;">📋 Project Details</h2>
              <div class="message-box">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
              
              <div class="footer">
                <p><strong>Next Steps:</strong></p>
                <p>• Contact the customer within 24 hours</p>
                <p>• Schedule a property visit if needed</p>
                <p>• Prepare a detailed quote</p>
                <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
                <p>This quote request was submitted through the Yard Men website on ${new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      // Also include a plain text version
      text: `
New Quote Request - Yard Men Landscaping

Customer Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address}

Project Details:
${data.message}

Submitted: ${new Date().toLocaleString()}
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Quote request sent successfully! We\'ll be in touch within 24 hours.' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send quote request. Please try again later.';
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login')) {
        errorMessage = 'Email configuration error. Please contact support.';
      } else if (error.message.includes('Network')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      }
    }
    
    return NextResponse.json(
      { success: false, message: errorMessage },
      { status: 500 }
    );
  }
}