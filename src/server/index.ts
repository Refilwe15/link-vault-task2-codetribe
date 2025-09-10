import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // frontend runs on 5173
app.use(express.json());

interface User {
  username: string;
  password: string;
}

const users: User[] = []; // in-memory (for demo only)

app.post("/signup", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password" });
  }

  if (users.some((u) => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.json({ message: "Account created", user: { username } });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: "Missing username or password" });
  }

  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", user: { username: user.username } });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
