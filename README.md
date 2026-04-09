# 🔐 MERN Auth System

A full-stack authentication system built using the **MERN stack (MongoDB, Express, React, Node.js)**.
This project implements secure user authentication with features like signup, login, email verification, password reset, and protected routes.

---

## 🚀 Live Demo

👉 https://mern-auth-2-b7ur.onrender.com/

---

## ✨ Features

* 🔑 User Signup & Login
* 🍪 Secure Authentication using **HTTP-only cookies**
* 🔐 JWT-based authentication
* 📧 Email verification (OTP system)
* 🔁 Password reset with OTP
* 🛡️ Protected routes
* 🌐 Fully deployed (Frontend + Backend on Render)
* ⚡ Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* Bcrypt (Password hashing)
* Nodemailer (Email service)

---

## 📁 Project Structure

```
mern-auth-2/
│
├── client/        # React frontend
├── server/        # Express backend
│   ├── routes/
│   ├── controllers/
│   ├── config/
│
└── README.md
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **server** folder:

```
JWT_SECRET=your_secret
MONGODB_URI=your_mongodb_uri
NODE_ENV=production
SENDER_EMAIL=your_email
SMTP_USER=your_email
SMTP_PASS=your_app_password
```

---

## 🧪 Run Locally

### 1. Clone the repo

```
git clone https://github.com/YOUR_USERNAME/mern-auth-2.git
cd mern-auth-2
```

### 2. Install dependencies

#### Backend

```
cd server
npm install
npm run dev
```

#### Frontend

```
cd client
npm install
npm run dev
```

---

## 🔐 Authentication Flow

1. User registers → password hashed → JWT created → cookie stored
2. Cookie is sent with every request
3. Backend verifies JWT → grants access
4. Protected routes check authentication status

---

## ⚠️ Security Features

* Password hashing using **bcrypt**
* HTTP-only cookies (prevents XSS)
* CORS configured with allowed origins
* Environment variables for sensitive data
* Token expiration handling

---

## 📌 Deployment

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

---

## 🤝 Contributing

Feel free to fork the project and improve it.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 🙌 Author

Built by **Dent775** 🚀
