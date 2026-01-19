# Field Booking App 🏟️

A modern mobile application for booking sports fields, built with React Native, TypeScript, and Firebase. The app provides a seamless experience for users to discover, view details, and book sports fields with secure authentication.

## 📱 Screenshots
<img width="300" alt="Screenshot_20260119_121535" src="https://github.com/user-attachments/assets/081818e2-7eae-42c7-bd0a-fca644501bff" />
<img width="300" alt="Screenshot_20260119_121605" src="https://github.com/user-attachments/assets/f2f7d7e9-474d-4b87-91e2-c116e1730a0e" />
<img width="300" alt="Screenshot_20260119_122056" src="https://github.com/user-attachments/assets/7b8f1224-8a3a-4d98-9670-8ee284e1ebb5" />
<img width="300" alt="Screenshot_20260119_122122" src="https://github.com/user-attachments/assets/92c64aa4-15cd-4809-b219-b249da9fc756" />
<img width="300" alt="Screenshot_20260119_122154" src="https://github.com/user-attachments/assets/be991ae4-055f-4cd1-a25c-87511b790a5a" />
<img width="300" alt="Screenshot_20260119_122235" src="https://github.com/user-attachments/assets/c58d61c4-cff9-4cbd-b457-c49d32cc244d" />
<img width="300" alt="Screenshot_20260119_122301" src="https://github.com/user-attachments/assets/49862fae-8732-4902-b6b7-0eb42efdafb6" />


## ✨ Features

### Current Features
- **Authentication System**: Secure user login and registration with custom authentication hooks
- **Home Screen**: Browse available sports fields
- **Field Details Screen**: View comprehensive information about each field
- **Booking Details Screen**: Complete booking information and confirmation
- **User Registration & Login**: Full authentication flow with Firebase

### Coming Soon 🚀
- **Favorites**: Save and manage your favorite fields
- **Payment Integration**: Secure payment processing
- **Booking History**: View past and upcoming bookings
- **User Profile**: Manage account settings and preferences

## 🛠️ Tech Stack

- **Framework**: React Native
- **Language**: TypeScript
- **Backend**: Firebase
  - Firebase Authentication
  - Firebase Firestore
  - Firebase Storage (if applicable)
- **Navigation**: Expo Router
- **State Management**: Custom hooks

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- A Firebase account and project

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/AndreOpollo/Field-Booking.git
cd Field-Booking
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Firebase Configuration

#### Step 1: Create a Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication (Email/Password provider)
4. Create a Firestore database
5. Register your app to get configuration credentials

#### Step 2: Set Up Configuration File
Create a `config` folder in the root directory and add your Firebase configuration:

```bash
mkdir config
```

Create `config/firebase.ts` file with your Firebase credentials:

```typescript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID" // Optional
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
```

**⚠️ Important**: Never commit your Firebase credentials to version control. Add `config/firebase.ts` to your `.gitignore` file.

### 4. Run the Application

```bash
# Start the Expo development server
npm start
# or
expo start

# Run on iOS
npm run ios

# Run on Android
npm run android
```

## 📁 Project Structure

```
Field-Booking/
├── app/                    # App screens (Expo Router)
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── home.tsx       # Home screen
│   │   └── ...
│   ├── field-details.tsx  # Field details screen
│   ├── book-details.tsx   # Booking details screen
│   ├── login.tsx          # Login screen
│   └── register.tsx       # Register screen
├── components/            # Reusable components
├── hooks/                 # Custom hooks (including auth hooks)
├── config/                # Configuration files
│   └── firebase.ts        # Firebase configuration (create this)
├── types/                 # TypeScript type definitions
├── utils/                 # Utility functions
├── assets/                # Images, fonts, and other assets
├── screenshots/           # App screenshots (create this)
├── app.json              # Expo configuration
├── package.json          # Dependencies
└── tsconfig.json         # TypeScript configuration
```

## 🔐 Authentication

The app uses custom hooks for authentication management. The authentication flow includes:

- User registration with email and password
- User login with credential validation
- Persistent authentication state
- Secure logout functionality

## 🧭 Navigation

Navigation is handled by **Expo Router**, providing:
- File-based routing
- Type-safe navigation
- Deep linking support
- Tab-based navigation for main screens

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Roadmap

- [x] User authentication (login/register)
- [x] Home screen with field listings
- [x] Field details view
- [x] Booking details screen
- [ ] Favorites functionality
- [ ] Payment integration
- [ ] Booking history
- [ ] User profile management
- [ ] Push notifications
- [ ] Search and filter functionality
- [ ] Rating and reviews system

## 🐛 Known Issues

Please check the [Issues](https://github.com/AndreOpollo/Field-Booking/issues) page for known bugs and feature requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**AndreOpollo**
- GitHub: [@AndreOpollo](https://github.com/AndreOpollo)

## 🙏 Acknowledgments

- React Native community
- Expo team
- Firebase documentation
- All contributors and testers

## 📧 Contact

For questions or support, please open an issue on GitHub or contact the repository owner.

---

**Note**: Remember to set up your Firebase configuration before running the project. The app will not function without proper Firebase credentials.
