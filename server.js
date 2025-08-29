import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.use(cors());
app.use(express.json());

// ✅ Ping route (for connection test)
app.get("/api/ping", (req, res) => {
  res.json({ status: "ok", message: "Proxy running fine 🚀" });
});

// ✅ Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, model = "gpt-4o-mini" } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: "You are Kashmiri Chat Pro — created by Shahid." },
          { role: "user", content: message },
        ],
        max_tokens: 500,
      }),
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "⚠️ No reply from OpenAI";
    res.json({ reply });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Chat request failed" });
  }
});

// ✅ Image endpoint
app.post("/api/image", async (req, res) => {
  try {
    const { prompt, size = "512x512", n = 1, model = "gpt-image-1" } = req.body;

    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model,
        prompt,
        size,
        n,
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("Image error:", err);
    res.status(500).json({ error: "Image request failed" });
  }
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Proxy server running on http://localhost:${PORT}`);
});
