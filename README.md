# 📝 Advanced Todo App (React + Vite)

A modern **Todo Application** built using **React (Vite)** with a **vibrant, full-page UI**, clean dashboard, and interactive todo management.  
The project keeps the **Dashboard** and **TodoItem** components intact while enhancing the overall UI, layout, and user experience.

---

## 🚀 Features

- 🌈 Full-page vibrant UI with gradient-inspired colors
- 📋 Dashboard view for organizing todos
- ✅ Add, update, and delete todos
- 🔍 Center-aligned todo search and list
- 🪟 Popup modal for updating todos
- 🎨 Clean and responsive design
- ⚡ Fast performance using Vite
- 🔗 Backend API integration using Axios

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- JavaScript (ES6+)
- CSS / Custom Styling
- React Icons
- Axios

**Backend (API)**
- Node.js
- Express.js  
- REST API (running on port `5000`)
Run the following command to clone the repository

git clone https://github.com/dhiru7890/To-Do-App.git
Go to frontend and backend directory to install packages

cd frontend
npm install
cd backend
npm install
Configuration
Create .env file inside backend directory and copy the following code

MONGO_URI=Your mongodb URI
GMAIL_USERNAME=your gmail address 
GMAIL_PASSWORD=password created inside 'App Password' section under google accounts setting
PORT=8000
JWT_SECRET=a random secret key eg. thisisasecretkey
Run the App
Go to backend and frontend directory and start the server

cd backend
nodemon server
cd frontend
npm start
