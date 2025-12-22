# 🎓 eTuitionBd - Online Tuition Management Platform

> বাংলাদেশের সেরা অনলাইন টিউশন ম্যানেজমেন্ট প্ল্যাটফর্ম | Bangladesh's Leading Online Tutoring Platform

[![Live Demo](https://img.shields.io/badge/demo-live-success)](https://your-live-url.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## 📋 Overview

eTuitionBd is a comprehensive tuition management system that connects students with qualified tutors across Bangladesh. The platform enables:

- **Students** to post tuition requirements and hire tutors
- **Tutors** to find tuition opportunities and manage their work
- **Admins** to oversee platform operations and manage users

## ✨ Key Features

### 🏠 Public Features

- 🔍 **Advanced Search & Filter** - Find tuitions by subject, location, class, budget
- 📊 **Sort & Pagination** - Easy navigation through listings
- 👥 **Tutor Profiles** - View qualifications, experience, and reviews
- 🎨 **Responsive Design** - Works on all devices
- 🌐 **Bilingual Support** - Bengali and English

### 👨‍🎓 Student Features

- ✍️ **Post Tuition** - Create detailed tuition requests
- 📝 **Manage Tuitions** - Edit or delete your posts
- 👀 **View Applications** - See tutor applications with details
- ✅ **Hire Tutors** - Accept/reject applications
- 💳 **Secure Payments** - Pay tutors via Stripe
- 📊 **Payment History** - Track all transactions

### 👨‍🏫 Tutor Features

- 📋 **Browse Tuitions** - Search available opportunities
- 📨 **Apply to Tuitions** - Submit applications with credentials
- 📈 **Track Applications** - Monitor approval status
- 💼 **Manage Work** - View ongoing tuitions
- 💰 **Revenue Tracking** - Monitor earnings

### 👑 Admin Features

- 👥 **User Management** - Manage all users and roles
- ✅ **Tuition Approval** - Review and approve/reject posts
- 📊 **Analytics Dashboard** - Platform statistics
- 💵 **Transaction Reports** - View all payments

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router v7** - Routing
- **TanStack Query** - Data fetching
- **React Hook Form + Zod** - Form handling
- **shadcn/ui** - UI components
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

### Backend

- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **MongoDB** - Database
- **Mongoose** - ODM
- **Firebase Admin** - Authentication
- **Stripe** - Payment processing
- **JWT** - Token management

### Shared

- **Monorepo (pnpm workspace)** - Code organization
- **Shared types & validators** - Type consistency
- **Zod schemas** - Validation

## 📦 Installation

### Prerequisites

- Node.js 18+ and pnpm installed
- MongoDB running locally or MongoDB Atlas account
- Firebase project setup
- Stripe account (for payments)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/etuitionbd.git
cd etuitionbd
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

#### Client (.env in `client/`)

```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

#### Server (.env in `server/`)

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
MONGODB_URI=mongodb://localhost:27017/etuitionbd
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_key\n-----END PRIVATE KEY-----\n"
STRIPE_SECRET_KEY=sk_test_your_stripe_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
```

### 4. Run the Application

#### Start all services (from root):

```bash
# Terminal 1 - Start server
cd server
pnpm dev

# Terminal 2 - Start client
cd client
pnpm dev
```

The app will be available at:

- **Client**: http://localhost:3000
- **Server**: http://localhost:5000

## 📁 Project Structure

```
etuitionbd/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── features/    # Feature modules
│   │   ├── pages/       # Page components
│   │   ├── routes/      # Route configuration
│   │   └── services/    # API services
│   └── package.json
├── server/              # Express backend
│   ├── src/
│   │   ├── config/      # Configuration
│   │   ├── features/    # Feature modules
│   │   └── shared/      # Shared utilities
│   └── package.json
├── shared/              # Shared code
│   ├── src/
│   │   ├── auth/        # Auth types
│   │   ├── dashboard/   # Dashboard types
│   │   ├── tuition/     # Tuition types
│   │   └── payments/    # Payment types
│   └── package.json
└── package.json         # Root workspace config
```

## 🚀 Available Scripts

### Root Level

```bash
pnpm install        # Install all dependencies
pnpm dev           # Start all services
pnpm build         # Build all packages
```

### Client

```bash
cd client
pnpm dev           # Start dev server
pnpm build         # Build for production
pnpm preview       # Preview production build
pnpm lint          # Run linter
pnpm type-check    # Check types
```

### Server

```bash
cd server
pnpm dev           # Start dev server with watch
pnpm start         # Start production server
pnpm build         # Compile TypeScript
pnpm type-check    # Check types
```

## 🔐 Authentication Flow

1. User registers/logs in with email or Google
2. Firebase authenticates and returns ID token
3. Backend verifies token with Firebase Admin SDK
4. JWT token issued for subsequent requests
5. JWT stored in localStorage and sent with API calls

## 💳 Payment Flow

1. Student accepts tutor application
2. Redirected to checkout page with payment details
3. Stripe Checkout session created
4. Payment processed securely via Stripe
5. On success, application status updated to "approved"
6. Payment record created in database

## 🎨 UI Components

Built with [shadcn/ui](https://ui.shadcn.com/) and Tailwind CSS. All components are customizable and theme-aware.

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- Touch-friendly interfaces
- Adaptive layouts

## 🔒 Security

- Firebase Authentication for user management
- JWT tokens for API authorization
- Role-based access control (RBAC)
- Input validation with Zod
- XSS protection
- CORS configuration
- Helmet.js security headers

## 🌐 API Documentation

### Base URL

```
http://localhost:5000/api/v1
```

### Main Endpoints

- `POST /auth/signup` - Register new user
- `POST /auth/signin` - Login
- `POST /auth/google` - Google OAuth
- `GET /tuitions` - List all tuitions
- `POST /applications` - Apply to tuition
- `POST /payments/create-checkout` - Create payment session

See full API documentation in `server/docs/API.md`

## 🧪 Testing

```bash
# Run tests (when implemented)
pnpm test

# Run tests with coverage
pnpm test:coverage
```

## 🚀 Deployment

### Client (Vercel/Netlify)

1. Build: `pnpm build`
2. Deploy `client/dist` folder
3. Add environment variables
4. Update Firebase authorized domains

### Server (Vercel/Heroku/Railway)

1. Build: `pnpm build`
2. Deploy with environment variables
3. Update CORS origin to production URL
4. Setup MongoDB Atlas connection

## 📝 TODO

See [TODO.md](TODO.md) for detailed task list and progress.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**B12-A11 Project Team**

## 📞 Support

For support, email support@etuitionbd.com or join our Discord channel.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for amazing UI components
- [Firebase](https://firebase.google.com/) for authentication
- [Stripe](https://stripe.com/) for payment processing
- [MongoDB](https://www.mongodb.com/) for database

---

Made with ❤️ in Bangladesh 🇧🇩
