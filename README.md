
# 📅 Field Booking App

A cross-platform **field booking mobile application** built with **React Native, Expo, TypeScript, and Firebase**.  
The app allows users to browse available fields, view details, and make bookings, with authentication handled via Firebase.

---

## 🚀 Features

- User authentication (Login & Register)
- Home screen with available fields
- Field details screen
- Booking details screen
- Firebase Authentication & Firestore
- Custom React hooks for authentication logic
- File-based routing using **expo-router**

### 🛠 Upcoming Features
- Favorites screen
- Payments integration

---

## 📸 Screenshots

_Add screenshots inside `assets/screenshots/` and update paths below._


### Home Screen
![Home](assets/screenshots/home.png)

### Field Details
![Field Details](assets/screenshots/field-details.png)

### Booking Details
![Booking Details](assets/screenshots/book-details.png)

### Login
![Login](assets/screenshots/login.png)

### Register
![Register](assets/screenshots/register.png)

## 🧰 Tech Stack

React Native

Expo

TypeScript

Firebase (Auth & Firestore)

expo-router

📂 Project Structure
├── app/               # Screens & routes (expo-router)
├── components/        # Reusable UI components
├── hooks/             # Custom React hooks
├── assets/            # Images & fonts
├── config/            # Firebase config (you must create this)
├── package.json
└── tsconfig.json

⚙️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/AndreOpollo/Field-Booking.git
cd Field-Booking

2️⃣ Install dependencies
npm install

3️⃣ Firebase Configuration

Create a folder named config and add a file firebase.ts.

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

4️⃣ Run the app
npx expo start


Scan QR code with Expo Go

Or run on Android/iOS emulator

🧠 Authentication

Authentication logic is abstracted using custom React hooks, keeping UI components clean and reusable.

🧭 Navigation

Navigation is handled using expo-router, providing file-based routing for scalable navigation structure.

🤝 Contributions

Contributions are welcome!
Fork the repo, create a feature branch, and open a pull request.
