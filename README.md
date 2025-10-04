# Multi-AI Chat Nexus — SHAHID Ultra Pro

A stunning quantum-themed AI chat interface with advanced animations and multiple AI model support.

## 🚀 Features

- **Quantum-themed UI** with animated backgrounds and holographic effects
- **Multiple AI Models** support (GPT-4, GPT-3.5 Turbo, GPT-4o Mini)
- **Real-time chat** with advanced animations
- **Responsive design** that works on all devices
- **Advanced settings** for creativity and response length
- **Secure API handling** with proper error management

## 🛠️ Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your OpenAI API key:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

3. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)

### 3. Run the Application
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

### 4. Access the Interface
Open your browser and navigate to:
```
http://localhost:3001
```

## 🎯 Quick Start
You can also use the provided startup script:
```bash
./start.sh
```

## 🎨 Interface Features

### Quantum Chat Interface
- **Animated background** with neural network patterns
- **Holographic buttons** with hover effects
- **Quantum status indicators** showing system status
- **Reality distortion field** effects

### AI Model Selection
- **GPT-4 Turbo**: Advanced reasoning and creativity
- **GPT-3.5 Turbo**: Fast and efficient responses
- **GPT-4o Mini**: Optimized performance

### Advanced Settings
- **Creativity Level**: Adjust AI response creativity (0.0 - 2.0)
- **Response Length**: Control response length (50 - 1000 tokens)

## 🔧 Technical Details

### Backend
- **Express.js** server with ES modules
- **CORS** enabled for cross-origin requests
- **Secure API key** handling with environment variables
- **Comprehensive error** handling with user-friendly messages

### Frontend
- **Pure JavaScript** with modern ES6+ features
- **CSS Grid & Flexbox** for responsive layouts
- **CSS animations** and transitions for smooth UX
- **Backdrop filters** and glassmorphism effects

## 📱 Responsive Design

The interface is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Usage Tips

1. **Select an AI Model** from the sidebar before starting
2. **Adjust settings** in the Settings tab for customized responses
3. **Use Enter** to send messages (Shift+Enter for new lines)
4. **Click Clear** to reset the conversation

## 🔒 Security

- API keys are stored securely in environment variables
- No sensitive data is logged or exposed
- CORS protection is enabled
- Input validation and sanitization

## 🚨 Troubleshooting

### Common Issues

**"OpenAI API key not configured"**
- Make sure you have created a `.env` file
- Verify your API key is correctly set in the `.env` file
- Restart the server after adding the API key

**"Invalid OpenAI API key"**
- Check that your API key is correct and active
- Verify you have credits in your OpenAI account

**"Rate limit exceeded"**
- You've hit the OpenAI rate limit
- Wait a few minutes before trying again
- Consider upgrading your OpenAI plan

## 📈 Development

### Adding New AI Models
To add support for new AI models:

1. Update the model selection in `index.html`
2. Add the model configuration in the JavaScript
3. Update the server endpoint to handle the new model

### Customizing the Theme
The CSS uses custom properties (variables) for easy theming:
- Modify the `:root` section in the CSS
- Adjust colors, animations, and effects
- All quantum effects are customizable

## 🌟 Advanced Features

- **Particle effects** on message send
- **Thinking animations** while AI responds
- **Quantum pulse** indicators
- **Reality distortion** background effects
- **Holographic** button interactions

## 📄 License

MIT License - Feel free to use and modify as needed.

## 👨‍💻 Author

**SHAHID** - Quantum Chat Interface Developer

---

*Experience the future of AI communication in the quantum realm!* ✨