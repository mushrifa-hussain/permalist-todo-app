# 📝 Permalist Todo App

A simple todo list web application where tasks are stored permanently in a PostgreSQL database.  
Users can add, edit, and delete tasks through an interactive interface.

---

## ✨ Features

➕ Add new tasks  

✏️ Edit existing tasks  

✅ Delete tasks with a checkbox  

💾 Tasks stored permanently in PostgreSQL  

⚡ Fast server using Express.js  

---

## 📸 Screenshots

<img width="1919" height="1067" alt="image" src="https://github.com/user-attachments/assets/45c113fb-32ee-45ad-99ea-999156ac5ae3" />

---

## 🛠 Tech Stack

Node.js  
Express.js  
PostgreSQL  
EJS  
HTML / CSS / JavaScript  

---

## ⚙️ Setup

Clone the repository

```
git clone https://github.com/your-username/permalist-todo-app.git
```

Install dependencies

```
npm install
```

---

## 🗄 Database Setup

Create database

```
CREATE DATABASE permalist;
```

Create table

```
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);
```

---

## 🔌 Database Connection

Update the PostgreSQL connection inside **index.js**

```javascript
const db = new pg.Client({
  user: "username",
  host: "localhost",
  database: "permalist",
  password: "password",
  port: 5432
});
```

Replace the username and password with your PostgreSQL credentials.

---

## ▶ Run the App

```
node index.js
```

Open in browser

```
http://localhost:3000
```

---

⭐ Built while learning **Node.js, Express, PostgreSQL, and EJS**.
