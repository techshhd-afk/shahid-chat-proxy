import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to handle AI requests
app.post("/chat", async (req, res) => {
  try {
    const { model, message, temperature, max_tokens } = req.body;

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ 
        error: "OpenAI API key not configured. Please add OPENAI_API_KEY to your .env file." 
      });
    }

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: model || "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
        max_tokens: max_tokens || 300,
        temperature: temperature || 0.7
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
    console.error("Chat API Error:", error.message);
    
    if (error.response?.status === 401) {
      res.status(500).json({ error: "Invalid OpenAI API key. Please check your credentials." });
    } else if (error.response?.status === 429) {
      res.status(500).json({ error: "Rate limit exceeded. Please try again later." });
    } else if (error.response?.status === 400) {
      res.status(500).json({ error: "Invalid request. Please check your message format." });
    } else {
      res.status(500).json({ error: "Failed to connect to AI service. Please try again." });
    }
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Quantum Chat Nexus server running on port ${PORT}`);
  console.log(`🌐 Visit http://localhost:${PORT} to access the interface`);
  console.log(`🔑 Make sure to set OPENAI_API_KEY in your .env file`);
});
