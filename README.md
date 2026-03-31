# ThalRakshak 

A comprehensive blood donation platform with gamification features, real-time matching, and emergency response systems.

## Features

- **Blood Donation Management** - Complete donation lifecycle tracking
- **Emergency Blood Requests** - Real-time emergency blood matching
- **Gamification System** - Leaderboards, badges, and achievement tracking
- **Hospital Integration** - Hospital dashboard and inventory management
- **AI-Powered Chatbot** - Intelligent assistance and navigation
- **Blood Type Prediction** - ML-based blood type prediction from images
- **Real-time Matching** - Connect donors with recipients instantly

## Tech Stack

### Frontend
- **React** with Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Axios** for API calls
- **React Hot Toast** for notifications

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Multer** for file uploads
- **Nodemailer** for email services

### AI/ML
- **Python Flask** for ML services
- **Scikit-learn** for blood type prediction
- **Natural Language Processing** for chatbot

## Installation

### Prerequisites
- Node.js (v16+)
- MongoDB
- Python 3.8+

### Backend Setup
```bash
cd backend
npm install
# Create .env file with:
# MONGO_URI=mongodb://localhost:27017/bloodconnection
# PORT=5000
# JWT_SECRET=your_secret_key
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### ML Service Setup
```bash
cd backend
pip install -r requirements.txt
python start_flask_server.py
```

## Database Setup

```bash
cd backend
node seed_leaderboard_data.js
```

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb://localhost:27017/bloodconnection
PORT=5000
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password
```

## Key Features

### For Donors
- Register and manage donation history
- View leaderboard and earn badges
- Respond to emergency requests
- Track donation eligibility

### For Recipients
- Submit emergency blood requests
- Find compatible donors
- Real-time status updates

### For Hospitals
- Manage blood inventory
- Process donation requests
- View donor statistics

## Gamification

- **Level System** - Earn XP with each donation
- **Badges** - Unlock achievements (First Blood, Hero Donor, etc.)
- **Leaderboard** - Compete with other donors
- **Progress Tracking** - Visual progress indicators

## 🤖 AI Features

- **Smart Chatbot** - Intent classification and responses
- **Blood Type Prediction** - ML model for image analysis
- **Emergency Matching** - Intelligent donor-recipient pairing

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Blood Donation
- `GET /api/leaderboard` - Get leaderboard
- `POST /api/emergency` - Submit emergency request
- `GET /api/hospitals` - Get hospital list

### User Management
- `GET /api/users/me` - Get user profile
- `PUT /api/users/me` - Update profile

## Emergency System

1. **Request Submission** - Recipients submit emergency requests
2. **Smart Matching** - System finds compatible donors
3. **Real-time Notifications** - Instant alerts to donors
4. **Status Tracking** - Real-time request status updates

## Leaderboard System

- **Ranking Algorithm** - Based on donation count and frequency
- **Badge System** - Automatic badge assignment
- **Level Progression** - XP-based leveling system
- **Achievement Tracking** - Milestone celebrations

## Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## Deployment

### Backend (Heroku/Railway)
```bash
# Set environment variables
# Deploy with git push
```

### Frontend (Vercel/Netlify)
```bash
# Build and deploy
npm run build
```


**Made with ❤️ for saving lives through blood donation**

