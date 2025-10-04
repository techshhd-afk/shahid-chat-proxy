import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "node:path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Serve static frontend assets
app.use(express.static("public"));

// Root route serves the main UI
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "index.html"));
});

// Route to handle AI requests
app.post("/chat", async (req, res) => {
  try {
    const { model, message } = req.body;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: model || "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
        max_tokens: 300,
        temperature: 0.7
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
