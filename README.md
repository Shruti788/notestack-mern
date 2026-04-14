<h1 align="center">📝 Notestack App ✨</h1>

A full stack Notes application built using the MERN stack - MongoDB, Express.js, React, and Node.js. Designed to help beginners understand real-world development while building a clean, responsive, and scalable app.

## 🚀 Features

- 🧱 Full-Stack App built with MERN (MongoDB, Express, React, Node)
- ✨ Create, Read, Update, and Delete (CRUD) notes
- 📝 Notes with Title and Description
- ⚡ Fully functional REST API
- ⚙️ Rate Limiting using Upstash Redis (real-world concept)
- 📱 Fully Responsive UI (mobile + desktop)
- 🌐 Covers HTTP Methods & Status Codes
- 📦 Deployment-ready project
- 📚 Beginner-friendly code structure

---

## 🛠️ Tech Stack

Frontend:
- React.js
- CSS / Tailwind (if used)

Backend:
- Node.js
- Express.js

Database:
- MongoDB (Mongoose)

Other Tools:
- Upstash Redis
- Git & GitHub

---

## 📦 Installation & Setup

### 1. Clone the repository
```
git clone https://github.com/your-username/notestack.git
cd notestack
```

### 2. Setup Backend
```
cd backend
npm install
npm run dev
```

### 3. Setup Frontend
```
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend folder and add:
```
MONGO_URI = your_mongodb_connection_string  
UPSTASH_REDIS_REST_URL = your_redis_url  
UPSTASH_REDIS_REST_TOKEN = your_redis_token  
PORT=5000
```

---

## 🌐 API Endpoints

GET /api/notes        → Get all notes  
POST /api/notes       → Create a note  
PUT /api/notes/:id    → Update a note  
DELETE /api/notes/:id → Delete a note  

---

## 🚀 Deployment

Frontend → Vercel / Netlify  
Backend → Render / Railway  

- Add environment variables  
- Update API base URL in frontend

## 🌐 Live Demo

🚀 Try the app here:  
https://notestack-mern.onrender.com
