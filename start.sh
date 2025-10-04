#!/bin/bash

echo "🚀 Starting Quantum Chat Nexus..."
echo "🔧 Checking dependencies..."

if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

if [ ! -f ".env" ]; then
    echo "❌ Error: .env file not found!"
    echo "Please create a .env file with your OPENAI_API_KEY"
    exit 1
fi

echo "🌟 Starting the quantum server..."
echo "🌐 The interface will be available at: http://localhost:3001"
echo "🛑 Press Ctrl+C to stop the server"
echo ""

npm start