# Yard Men Landscaping Website

A professional landscaping services website built with Next.js, featuring quote requests, service calculator, and customer testimonials.

## Email Configuration Setup

To receive quote requests via email, you need to configure Gmail App Passwords:

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security**
3. Enable **2-Step Verification** if not already enabled

### Step 2: Generate App Password
1. In Google Account Settings, go to **Security**
2. Under **2-Step Verification**, click **App passwords**
3. Select **Mail** as the app
4. Select **Other** as the device and name it "Yard Men Website"
5. Copy the generated 16-character password

### Step 3: Update Environment Variables
1. Open `.env.local` file
2. Replace `your-gmail-app-password-here` with the generated app password
3. Save the file

### Step 4: Test the System
1. Visit your website
2. Fill out the contact form
3. Check the `yardmenltd@gmail.com` inbox for the quote request

## Features

- **Responsive Design**: Mobile-first approach with beautiful animations
- **Quote Calculator**: Instant estimates for different services
- **Contact Form**: Professional email notifications for quote requests
- **Customer Reviews**: Rotating testimonials with smooth transitions
- **Service Gallery**: Interactive carousel showcasing services
- **FAQ Section**: Comprehensive answers to common questions

## Services Covered

- Fencing ($35-$65/linear ft)
- Deck Installation ($25-$70/sq ft)
- Sod Installation ($1.15-$2.30/sq ft)
- Mulch Installation ($3-$8/sq ft)
- Decorative Rocks ($4-$18/sq ft)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables Required

```env
EMAIL_USER=yardmenltd@gmail.com
EMAIL_PASS=your-gmail-app-password
EMAIL_TO=yardmenltd@gmail.com
```

## Contact Information

- **Phone**: (587) 325-0786
- **Email**: yardmenltd@gmail.com
- **Service Area**: Calgary and surrounding areas