import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Railway backend OK 🚀");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});
