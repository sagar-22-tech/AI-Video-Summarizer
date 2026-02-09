import dotenv from "dotenv"
dotenv.config({
    path: './env'
})

import { app } from "./app.js"

import fs from "fs";
import path from "path";
app.listen(process.env.PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("Backend is alive 🚀");
});

const uploadDir = path.join(process.cwd(), "uploads/videos");

fs.mkdirSync(uploadDir, { recursive: true });