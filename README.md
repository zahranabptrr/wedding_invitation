# Wedding Invitation - Aqeele & Mohan

Digital wedding invitation web application for Aqeele & Mohan's wedding celebration.

## Features

- 🎨 Beautiful floral and brown-cream themed design
- 📱 Responsive design for all devices
- 🎵 Background music with autoplay
- 📸 Photo gallery
- 📝 RSVP form
- 💝 Wish box for guest messages
- 🎁 Gift information section
- ⏰ Countdown timer to wedding date
- 🗺️ Location with Google Maps integration

## Wedding Details

- **Couple**: Aqeele & Mohan
- **Date**: 82025*Location**: Hotel Westin Jakarta
- **Invitee**: Zahra

## Installation & Deployment

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/zahranabptrr/wedding-invitation.git
cd wedding-invitation
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node index.js
```

4. Open your browser and visit:
   - Welcome page: `http://localhost:3000`
   - Main invitation: `http://localhost:3000/invitation`

### Deploy to Netlify

#### Option 1: Deploy from GitHub (Recommended)

1. Push your code to GitHub repository
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Choose GitHub and select your repository
5. Set build settings:
   - **Build command**: Leave empty
   - **Publish directory**: `public`
6. Click "Deploy site"

#### Option 2: Manual Upload

1. Build the static files (they're already in the `public` folder)
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Drag and drop the `public` folder to the Netlify dashboard
4. Your site will be deployed instantly

#### Option 3: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy the site:
```bash
netlify deploy --dir=public --prod
```

## Project Structure

```
wedding-invitation/
├── public/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── audio/
├── views/
│   └── index.ejs
├── index.js
├── package.json
└── README.md
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Template Engine**: EJS
- **Styling**: Custom CSS with glassmorphism effects

## Customization

To customize the invitation for your own wedding:

1. Update the couple names in `index.js`
2. Change the wedding date and location3 Replace images in `public/images/`
4. Update the background music in `public/audio/`
5. Modify colors and styling in the CSS files

## License

This project is created for personal use. 