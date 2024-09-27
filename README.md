# Yene Books 📚

Welcome to **Yene Books**, a modern web application that helps you manage your personal book library, track your reading progress, and share reviews with the world! Whether you're an avid reader or just getting started, Yene Books makes organizing your reading journey effortless.

---

## 🌟 Features

- **📖 Track Your Books**: Keep a record of all the books you own or plan to read.
- **✔️ Mark as Read/Unread**: Easily track your reading status for each book.
- **✍️ Post Reviews**: Share your thoughts by writing and posting reviews on your favorite books.
- **👍 Like/Dislike Reviews**: Engage with other readers by liking or disliking their reviews.
- **💬 Comment on Reviews**: Join the conversation by adding comments to any review.
- **🔒 User Authentication**: Sign up, sign in, and manage your personal library securely.

---

## 🚀 Demo

Check out the live demo of Yene Books at: [Demo Link] [(https://youtu.be/Wm-3SbY-LvM)]

---

## 📂 Project Structure

.
├── backend/                # Express.js API backend
│   ├── controllers/        # API controllers
│   ├── middleware/         # Authentication, error handling
│   ├── models/             # MongoDB models (Books, Users, Reviews)
│   ├── routes/             # API routes (auth, books, reviews)
│   ├── config/             # Database and environment configurations
│   ├── utils/              # Helper functions and utilities
│   └── server.js              # Main backend application file
│
├── frontend/               # Vue.js frontend
│   ├── src/                # Vue components, views, assets, store
│   ├── public/             # Public assets (favicon, index.html)
│   ├── main.js             # Vue app entry point
│   ├── router.js           # Vue Router configuration
│   └── App.vue             # Main application layout
│
├── .env                    # Environment variables for the backend
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation (this file)

🛠️ Tech Stack

Frontend:
Vue.js 3: The modern and reactive frontend framework.
Tailwind CSS: Utility-first CSS framework for building responsive UIs.
Vue Router: For handling navigation between different views.

Backend:
Node.js: Server-side JavaScript runtime.
Express.js: Minimal and flexible Node.js web application framework.
MongoDB: NoSQL database for efficient data storage.
Mongoose: MongoDB object modeling for Node.js.
JWT (JSON Web Tokens): For user authentication and secure API access.
Other Tools:
Multer: For handling file uploads (e.g., user profile images).
Cloudinary: Cloud-based image hosting service.
Redis: For session management and caching.
Mocha & Chai: For backend testing.

