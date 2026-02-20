import nodemailer from 'nodemailer';

const EMAIL_HOST = process.env.EMAIL_HOST || 'smtp.gmail.com';
const EMAIL_PORT = parseInt(process.env.EMAIL_PORT || '587');
const EMAIL_USER = process.env.EMAIL_USER || 'bengaltourism@gmail.com';
const EMAIL_PASS = process.env.EMAIL_PASS || '';
const EMAIL_FROM = process.env.EMAIL_FROM || 'Bengal Tourism <bengaltourism@gmail.com>';

const TO_EMAIL = 'bengaltourism@gmail.com';
const NOTIFICATION_EMAIL = 'betenepali1@gmail.com';

// Create transporter
const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

// Verify transporter connection
transporter.verify((error: any, success: any) => {
  if (error) {
    console.error('Email service error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

export interface EmailData {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const mailOptions = {
      from: EMAIL_FROM,
      to: data.to,
      subject: data.subject,
      html: data.html,
      text: data.text,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', data.to);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

export const sendContactFormEmail = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
  department?: string;
}): Promise<boolean> => {
  // Email to admin
  const adminEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ''}
        ${formData.department ? `<p><strong>Department:</strong> ${formData.department}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="background-color: white; padding: 15px; border-left: 4px solid #dc2626; margin-top: 10px;">
          ${formData.message}
        </p>
      </div>
      <p style="color: #6b7280; font-size: 12px; margin-top: 20px;">
        This email was sent from the Bengal Tourism contact form.
      </p>
    </div>
  `;

  // Email to user (confirmation)
  const userEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; text-align: center; margin-bottom: 20px;">
        Thank You for Contacting Bengal Tourism!
      </h2>
      <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fecaca;">
        <p>Dear ${formData.name},</p>
        <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
        <p>Here's a summary of your message:</p>
        <div style="background-color: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>Subject:</strong> ${formData.subject || 'General Inquiry'}</p>
          <p><strong>Message:</strong> ${formData.message}</p>
        </div>
      </div>
      <div style="text-align: center; margin: 30px 0;">
        <h3 style="color: #1f2937;">Contact Information</h3>
        <p><strong>Tour Booking:</strong> +91 62897 83779</p>
        <p><strong>Hotel Booking:</strong> +91 90079 95888</p>
        <p><strong>Email:</strong> bengaltourism@gmail.com</p>
      </div>
      <p style="color: #6b7280; font-size: 12px; text-align: center; margin-top: 20px;">
        Best regards,<br>
        Bengal Tourism Team
      </p>
    </div>
  `;

  try {
    await Promise.all([
      sendEmail({
        to: TO_EMAIL,
        subject: `New Contact Form: ${formData.subject || 'General Inquiry'} from ${formData.name}`,
        html: adminEmail,
      }),
      sendEmail({
        to: NOTIFICATION_EMAIL,
        subject: `🔔 New Contact Form: ${formData.subject || 'General Inquiry'} from ${formData.name}`,
        html: adminEmail,
      }),
      sendEmail({
        to: formData.email,
        subject: 'Thank you for contacting Bengal Tourism',
        html: userEmail,
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Error sending contact form emails:', error);
    return false;
  }
};

export const sendHotelBookingEmail = async (formData: any): Promise<boolean> => {
  const adminEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
        New Hotel Booking Request
      </h2>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Personal Information</h3>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.countryCode} ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}, ${formData.pinCode}</p>
        
        <h3 style="color: #1f2937; margin-top: 20px;">Booking Details</h3>
        <p><strong>Destination:</strong> ${formData.destination}</p>
        <p><strong>Room Type:</strong> ${formData.roomType}</p>
        <p><strong>No. of Rooms:</strong> ${formData.noOfRooms}</p>
        <p><strong>Check-in:</strong> ${formData.checkIn}</p>
        <p><strong>Check-out:</strong> ${formData.checkOut}</p>
        <p><strong>Adults:</strong> ${formData.adults}</p>
        <p><strong>Children:</strong> ${formData.children}</p>
        <p><strong>Preferred Hotel:</strong> ${formData.preferredHotel || 'Not specified'}</p>
        ${formData.specialInfo ? `<p><strong>Special Requirements:</strong> ${formData.specialInfo}</p>` : ''}
        
        <h3 style="color: #1f2937; margin-top: 20px;">Pricing</h3>
        <p><strong>Cost per Room:</strong> ₹${formData.costPerRoom}/night</p>
        <p><strong>Total Nights:</strong> ${formData.totalNights}</p>
        <p><strong>Estimated Cost:</strong> ₹${formData.estimatedCost}</p>
        <p><strong>Booking Amount:</strong> ₹${formData.bookingAmount} (${formData.paymentType === 'full' ? 'Full Payment' : '50% Advance'})</p>
      </div>
    </div>
  `;

  const userEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; text-align: center; margin-bottom: 20px;">
        Hotel Booking Request Received
      </h2>
      <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fecaca;">
        <p>Dear ${formData.fullName},</p>
        <p>Thank you for your hotel booking request. We have received your submission and will process it shortly.</p>
        <p><strong>Booking Reference:</strong> HT${Date.now()}</p>
      </div>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Booking Summary</h3>
        <p><strong>Destination:</strong> ${formData.destination}</p>
        <p><strong>Check-in:</strong> ${formData.checkIn}</p>
        <p><strong>Check-out:</strong> ${formData.checkOut}</p>
        <p><strong>Rooms:</strong> ${formData.noOfRooms} ${formData.roomType}</p>
        <p><strong>Guests:</strong> ${formData.adults} Adults, ${formData.children} Children</p>
        <p><strong>Booking Amount:</strong> ₹${formData.bookingAmount}</p>
      </div>
      <p style="color: #6b7280; font-size: 12px; text-align: center; margin-top: 20px;">
        Our team will contact you within 24 hours to confirm your booking.
      </p>
    </div>
  `;

  try {
    await Promise.all([
      sendEmail({
        to: TO_EMAIL,
        subject: `Hotel Booking: ${formData.destination} from ${formData.fullName}`,
        html: adminEmail,
      }),
      sendEmail({
        to: formData.email,
        subject: 'Hotel Booking Request Received - Bengal Tourism',
        html: userEmail,
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Error sending hotel booking emails:', error);
    return false;
  }
};

export const sendTourBookingEmail = async (formData: any): Promise<boolean> => {
  const adminEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
        New Tour Booking Request
      </h2>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Personal Information</h3>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.countryCode} ${formData.phone}</p>
        <p><strong>Address:</strong> ${formData.address}, ${formData.pinCode}</p>
        
        <h3 style="color: #1f2937; margin-top: 20px;">Tour Details</h3>
        <p><strong>Destination:</strong> ${formData.destination}</p>
        <p><strong>Start Date:</strong> ${formData.checkIn}</p>
        <p><strong>End Date:</strong> ${formData.checkOut}</p>
        <p><strong>Pickup Place:</strong> ${formData.pickupPlace || 'Not specified'}</p>
        <p><strong>Drop Place:</strong> ${formData.dropPlace || 'Not specified'}</p>
        <p><strong>Adults:</strong> ${formData.adults}</p>
        <p><strong>Children:</strong> ${formData.children}</p>
        <p><strong>Total Nights:</strong> ${formData.totalNights}</p>
        ${formData.specialInfo ? `<p><strong>Special Requirements:</strong> ${formData.specialInfo}</p>` : ''}
        
        <h3 style="color: #1f2937; margin-top: 20px;">Pricing</h3>
        <p><strong>Cost per Adult:</strong> ₹${formData.costPerAdult}</p>
        <p><strong>Cost per Children:</strong> ₹${formData.costPerChildren || '0'}</p>
        <p><strong>Estimated Cost:</strong> ₹${formData.estimatedCost}</p>
        <p><strong>Booking Amount:</strong> ₹${formData.bookingAmount}</p>
        ${formData.promoCode ? `<p><strong>Promo Code:</strong> ${formData.promoCode}</p>` : ''}
        ${formData.membershipNo ? `<p><strong>Membership No:</strong> ${formData.membershipNo}</p>` : ''}
      </div>
    </div>
  `;

  const userEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; text-align: center; margin-bottom: 20px;">
        Tour Booking Request Received
      </h2>
      <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fecaca;">
        <p>Dear ${formData.fullName},</p>
        <p>Thank you for your tour booking request. We have received your submission and will process it shortly.</p>
        <p><strong>Booking Reference:</strong> TT${Date.now()}</p>
      </div>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Tour Summary</h3>
        <p><strong>Destination:</strong> ${formData.destination}</p>
        <p><strong>Duration:</strong> ${formData.checkIn} to ${formData.checkOut}</p>
        <p><strong>Travelers:</strong> ${formData.adults} Adults, ${formData.children} Children</p>
        <p><strong>Booking Amount:</strong> ₹${formData.bookingAmount}</p>
      </div>
      <p style="color: #6b7280; font-size: 12px; text-align: center; margin-top: 20px;">
        Our team will contact you within 24 hours to confirm your tour details.
      </p>
    </div>
  `;

  try {
    await Promise.all([
      sendEmail({
        to: TO_EMAIL,
        subject: `Tour Booking: ${formData.destination} from ${formData.fullName}`,
        html: adminEmail,
      }),
      sendEmail({
        to: formData.email,
        subject: 'Tour Booking Request Received - Bengal Tourism',
        html: userEmail,
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Error sending tour booking emails:', error);
    return false;
  }
};

export const sendMembershipEmail = async (formData: any): Promise<boolean> => {
  const adminEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; border-bottom: 2px solid #dc2626; padding-bottom: 10px;">
        New Membership Application
      </h2>
      <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #1f2937; margin-top: 0;">Applicant Information</h3>
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Earning Method:</strong> ${formData.earningMethod}</p>
        <p><strong>Payment Mode:</strong> ${formData.paymentMode}</p>
        <p><strong>IFSC Code/UPI Name:</strong> ${formData.ifscUpi}</p>
      </div>
    </div>
  `;

  const userEmail = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #dc2626; text-align: center; margin-bottom: 20px;">
        Membership Application Received
      </h2>
      <div style="background-color: #fef2f2; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fecaca;">
        <p>Dear ${formData.firstName} ${formData.lastName},</p>
        <p>Thank you for applying to our membership program. We have received your application and will review it shortly.</p>
        <p><strong>Application ID:</strong> MB${Date.now()}</p>
        <p><strong>Selected Program:</strong> ${formData.earningMethod}</p>
      </div>
      <div style="text-align: center; margin: 30px 0;">
        <h3 style="color: #1f2937;">Next Steps</h3>
        <p>1. Our team will review your application</p>
        <p>2. You'll receive payment instructions via email</p>
        <p>3. Once payment is confirmed, your membership will be activated</p>
      </div>
      <p style="color: #6b7280; font-size: 12px; text-align: center; margin-top: 20px;">
        For any queries, contact us at bengaltourism@gmail.com or call +91 62897 83779
      </p>
    </div>
  `;

  try {
    await Promise.all([
      sendEmail({
        to: TO_EMAIL,
        subject: `Membership Application: ${formData.earningMethod} from ${formData.firstName} ${formData.lastName}`,
        html: adminEmail,
      }),
      sendEmail({
        to: formData.email,
        subject: 'Membership Application Received - Bengal Tourism',
        html: userEmail,
      }),
    ]);
    return true;
  } catch (error) {
    console.error('Error sending membership emails:', error);
    return false;
  }
};
