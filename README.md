# Multi-AI Chat Nexus — SHAHID Ultra Pro

A stunning quantum-themed multi-AI chat interface with a Node.js backend that connects to various AI models.

## 🌟 Features

- **Quantum-Themed UI**: Beautiful glassmorphism design with animated backgrounds
- **Multi-AI Support**: Chat with multiple AI models simultaneously
- **Real-time Responses**: See responses from different AI models in real-time
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern Interface**: Smooth animations, gradients, and holographic effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenAI API Key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure your environment variables:
   - Copy `.env.example` to `.env` (if not already present)
   - Add your OpenAI API key to `.env`:
```
OPENAI_API_KEY=your_api_key_here
PORT=5000
```

### Running the Application

Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

The application will be available at: `http://localhost:5000`

## 🎨 UI Features

- **Quantum Header**: Animated logo and status indicators
- **AI Model Sidebar**: Select and manage multiple AI models
- **Chat Interface**: Beautiful message bubbles with smooth animations
- **Consciousness Meters**: Visual representation of AI model capabilities
- **Reality Distortion Field**: Animated background effects
- **Responsive Input**: Auto-resizing text area with enhancement buttons

## 🤖 AI Models

The interface supports multiple AI models:
- **GPT-4o Mini**: Fast and efficient model
- **GPT-4**: Advanced reasoning and creativity
- **Claude 3**: Balanced performance (UI ready, backend needs implementation)
- **Gemini Pro**: Google's powerful model (UI ready, backend needs implementation)

## 📁 Project Structure

```
/workspace
├── index.html       # Frontend quantum chat interface
├── server.js        # Backend API server
├── package.json     # Node.js dependencies
├── .env             # Environment variables
└── README.md        # This file
```

## 🔧 API Endpoints

### POST /chat
Send a message to an AI model

**Request Body:**
```json
{
  "model": "gpt-4o-mini",
  "message": "Your message here"
}
```

**Response:**
```json
{
  "reply": "AI response here"
}
```

## 🎯 Future Enhancements

- [ ] Add support for Claude and Gemini models
- [ ] Implement chat history persistence
- [ ] Add file upload functionality
- [ ] Voice input/output support
- [ ] Export chat conversations
- [ ] Custom model parameters
- [ ] Dark/Light theme toggle

## 👨‍💻 Author

**Shahid**

## 📄 License

MIT License
