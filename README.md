# 🎬 EminentFlix Server

This is the **backend** for the **EminentFlix** movie‑recommendation app. It handles user authentication, communicates with MongoDB, and exposes API routes for saving and retrieving each user’s favourite movies.

---

## 🔧 Tech Stack

- **Node.js** & **Express.js** – REST API
- **MongoDB** & **Mongoose** – Database & ODM
- **JSON Web Tokens (JWT)** – Authentication
- **dotenv** – Environment‑variable management

---

## 📦 Local Setup

```bash
# 1. Install dependencies
cd server
npm install

# 2. Create .env in /server
MONGO_URI=mongodb://localhost:27017/movierecommender
JWT_SECRET=your_jwt_secret
PORT=5000

# 3. Run the dev server
npm run dev
```

Navigate to [**http://localhost:5000**](http://localhost:5000) to confirm the server is running.

---

## 🔒 Protected Routes

| Route                   | Method | Description                                      |
| ----------------------- | ------ | ------------------------------------------------ |
| `/api/auth/register`    | POST   | Create new user                                  |
| `/api/auth/login`       | POST   | Get JWT token                                    |
| `/api/movies/favorite`  | POST   | Save a movie to favourites (requires token)      |
| `/api/movies/favorites` | GET    | Fetch current user’s favourites (requires token) |

> **Authorization**: Send the token in an `Authorization` header as `Bearer <token>`.

---

## 📁 Folder Structure

```
server/
├── models/        # Mongoose schemas
│   ├── FavoriteMovie.js
│   └── User.js
├── routes/        # Express route handlers
│   ├── auth.js
│   └── movies.js
├── middleware/    # JWT verification
│   └── auth.js
├── index.js       # Server entry point
└── .env           # Environment config (never commit!)
```

---

## 🙌 Author

**Divine Nnata** – Built with ❤️ for the Capstone project.

A final project for Darey classes

