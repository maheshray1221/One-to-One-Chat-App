# 🎥 Zoom Clone — One-to-One Video Calling App

A full-stack **real-time video calling application** (Zoom/Google Meet style) built with the **MERN stack** + **WebRTC** + **Socket.IO**. Users can register, login, create/join a meeting via a unique room URL, do live video/audio calls, share screen, chat in-room, and view their meeting history.

> ⚠️ Note: Repo naam "One-to-One-Chat-App" hai, lekin actual codebase ek **WebRTC video conferencing app** hai (text-only chat nahi) — in-call chat sirf ek feature hai, primary purpose video calling hai.

---

## ✨ Features

- 🔐 **User Authentication** — Register/Login with hashed passwords (bcrypt) + token-based auth
- 📞 **Real-time Video/Audio Calls** — Peer-to-peer video calling using WebRTC
- 🖥️ **Screen Sharing** — Share your screen during a call
- 💬 **In-call Chat** — Send text messages to everyone in the meeting room
- 🎙️ **Mic/Camera Controls** — Toggle audio/video on the fly
- 🔗 **Unique Meeting Links** — Join any call via `/:url` room code
- 🕘 **Meeting History** — Logged-in users can see their past meeting codes
- 🌐 **Multi-user Signaling** — Socket.IO-based signaling server manages room connections

---

## 🛠️ Tech Stack

**Frontend**
- React 18 + React Router v6
- Material UI (`@mui/material`, `@mui/icons-material`)
- Tailwind CSS
- Axios (API calls)
- Socket.IO Client
- WebRTC (native browser APIs — `getUserMedia`, `getDisplayMedia`, `RTCPeerConnection`)

**Backend**
- Node.js + Express
- Socket.IO (signaling server for WebRTC + chat)
- MongoDB + Mongoose
- bcryptjs (password hashing)
- crypto (token generation)
- dotenv, cors, http-status

---

## 📁 Project Structure

```
One-to-One-Chat-App/
├── backend/
│   ├── src/
│   │   ├── app.js                     # Express + Socket.IO server entry point
│   │   ├── controllers/
│   │   │   ├── socketManager.js       # WebRTC signaling + chat socket events
│   │   │   └── user.controller.js     # login, register, meeting history
│   │   ├── models/
│   │   │   ├── user.model.js          # User schema
│   │   │   └── meeting.model.js       # Meeting history schema
│   │   └── routes/
│   │       └── users.routes.js        # /api/v1/users routes
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── App.js                     # Route definitions
    │   ├── contexts/
    │   │   └── AuthContext.jsx        # Auth state + API calls
    │   ├── pages/
    │   │   ├── landing.jsx            # Landing page
    │   │   ├── landing-page-components/  # Hero, Features, Pricing, CTA, etc.
    │   │   ├── authentication.jsx     # Login/Register page
    │   │   ├── home.jsx               # Dashboard — create/join meeting
    │   │   ├── VideoMeet.jsx          # Core video call room (WebRTC logic)
    │   │   └── history.jsx            # Past meetings list
    │   ├── utils/
    │   │   └── withAuth.jsx           # Route protection HOC
    │   └── environment.js             # Backend server URL config
    └── package.json
```

---

## ⚙️ Backend API Routes

Base URL: `/api/v1/users`

| Method | Endpoint            | Description                      |
|--------|----------------------|-----------------------------------|
| POST   | `/register`          | Register a new user               |
| POST   | `/login`              | Login and receive auth token      |
| POST   | `/add_to_activity`    | Save a meeting code to history    |
| GET    | `/get_all_activity`   | Fetch a user's meeting history    |
| GET    | `/health`             | Health check                      |

## 🔌 Socket.IO Events

| Event          | Direction        | Purpose                                   |
|----------------|-------------------|--------------------------------------------|
| `join-call`    | client → server   | Join a meeting room by path/code           |
| `signal`       | client ↔ server   | Exchange WebRTC signaling data (SDP/ICE)   |
| `chat-message` | client ↔ server   | Send/broadcast in-call chat messages       |
| `user-joined`  | server → client   | Notify room when a new user joins          |
| `user-left`    | server → client   | Notify room when a user disconnects        |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

### 1. Clone the repo
```bash
git clone https://github.com/maheshray1221/One-to-One-Chat-App.git
cd One-to-One-Chat-App
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:
```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Run the backend:
```bash
npm run dev     # nodemon (development)
# or
npm start       # production
```

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Update `src/environment.js` with your backend URL (default points to your local backend, e.g. `http://localhost:8000`).

Run the frontend:
```bash
npm start
```

App will run at `http://localhost:3000`.

---

## 🧩 How It Works

1. User **registers/logs in** → gets an auth token stored in `localStorage`.
2. From the **home page**, user creates or joins a meeting via a room code.
3. On entering `/:url`, `VideoMeet.jsx` requests **camera/mic permissions**, connects to the **Socket.IO signaling server**, and establishes **peer-to-peer WebRTC connections** with other participants in the same room.
4. STUN server (`stun:stun.l.google.com:19302`) is used for NAT traversal.
5. Chat messages and join/leave events are broadcast to everyone in the room via Socket.IO.
6. Each joined meeting is optionally logged to the user's **history**.

---

## 📌 Known Notes / Possible Improvements

- `backend/src/app.js` reads `process.env.PORT` but no `.env.sample` is committed — add one for easier setup.
- Meeting rooms and chat messages are stored **in-memory** on the server (`connections`, `messages` objects) — they reset on server restart. Consider moving to Redis/DB for persistence at scale.
- CORS is currently open (`origin: "*"`) — restrict it in production.
- Add a **TURN server** config for reliable connectivity behind restrictive NATs (STUN alone isn't always enough).

---

## 👨‍💻 Author

**Mahesh Roy** ([@maheshray1221](https://github.com/maheshray1221))

---

## 📄 License

ISC
