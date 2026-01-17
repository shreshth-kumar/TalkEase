# TalkEase 🗣️

**AI-Powered Social Anxiety Conversation Coach**

[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Status](https://img.shields.io/badge/status-Active-blue)
[![React](https://img.shields.io/badge/frontend-React%2019-blue)](https://react.dev)
[![FastAPI](https://img.shields.io/badge/backend-FastAPI-green)](https://fastapi.tiangolo.com)

---

## 📋 Overview

TalkEase is an AI-powered conversation coach designed to help users practice real-life social scenarios and build confidence in their communication skills. Whether you're dealing with social anxiety or simply want to improve your interpersonal communication, TalkEase provides realistic feedback and suggestions in a supportive environment.

### Key Benefits
- 🎯 **Scenario-Based Practice** - Practice conversations in realistic situations
- 🤖 **AI-Powered Coaching** - Get instant, human-like responses and constructive feedback
- 📊 **Detailed Feedback** - Receive confidence scores, tone analysis, and improvement suggestions
- 💡 **Message Improvement** - Get rewritten versions of your messages for better communication
- 🌙 **Modern UI** - Clean, intuitive dark-mode interface built with React and Tailwind CSS

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | React 19 + Tailwind CSS + Vite |
| **Backend** | FastAPI + Python |
| **AI Model** | Groq Llama 3.1 (8B) |
| **Build Tool** | Vite |

---

## 📦 Project Structure

TalkEase/
├── frontend/ # React application
│ ├── src/
│ │ ├── App.jsx # Main application component
│ │ ├── main.jsx # React entry point
│ │ ├── App.css # Application styles
│ │ ├── index.css # Global styles
│ │ └── assets/ # Static assets
│ ├── package.json
│ ├── vite.config.js
│ ├── tailwind.config.js
│ └── eslint.config.js
│
├── backend/ # FastAPI application
│ ├── main.py # FastAPI server & endpoints
│ ├── requirements.txt # Python dependencies
│ └── venv/ # Virtual environment
│
└── package.json # Root package

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 16+ (for frontend)
- **Python** 3.8+ (for backend)
- **Groq API Key** - Get one from [Groq Console](https://console.groq.com)

### 1️⃣ Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (optional but recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file and add your Groq API key
echo GROQ_API_KEY=your_api_key_here > .env

# Start the FastAPI server
uvicorn main:app --reload --port 8000# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

The backend will be available at http://localhost:8000

2️⃣ Frontend Setup

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

The frontend will be available at http://localhost:5173 (or the port Vite specifies)

3️⃣ Access the Application
Open your browser and go to http://localhost:5173 to start practicing conversations!

📖 How to Use
Set a Scenario - Describe the social situation you want to practice (e.g., "Asking someone out on a date")
Write Your Message - Type what you would say in that scenario
Get Feedback - The AI coach responds realistically and provides:
A human-like response to your message
A confidence score (0-10)
Tone analysis
Clarity assessment
Suggestions for improvement
An improved version of your message
Practice & Learn - Use the feedback to refine your communication skills
🔧 API Endpoints
POST /chat
Send a message in a specific scenario and get an AI-generated response with feedback.

Request:
{
  "scenario": "Job interview for a software engineer position",
  "message": "Hi, um, I'm here for the interview, I guess?"
}
Response:
{
  "reply": "[Human Response]\n\nHey! Great to have you here. Why don't we get started?\n\n---\nFeedback:\nConfidence Score: 5/10\nTone: nervous\nClarity: somewhat clear\n\nWhat went well:\n- You showed up on time\n\nHow to improve:\n- Speak with more confidence and enthusiasm\n\nImproved Version:\n\"Hi! Thanks for having me. I'm excited to discuss this opportunity.\"\n---"
}
🔐 Environment Variables
Create a .env file in the backend directory:
GROQ_API_KEY=your_groq_api_key_here
Get your free API key from Groq Console: https://console.groq.com

📝 Available Scripts
Frontend
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
Backend
uvicorn main:app --reload              # Start with auto-reload
uvicorn main:app --reload --port 8000  # Specify port

🌟 Features in Detail
Realistic Responses
The AI coach responds as a real person would in the given scenario, not as an AI assistant. This creates authentic practice opportunities.

Comprehensive Feedback
Each interaction provides:

Confidence Score: Rate yourself 0-10
Tone Analysis: Identifies the emotional tone of your message
Clarity Assessment: How clearly your message was communicated
Actionable Suggestions: Specific improvements you can make
Message Rewrites: See how professionals would phrase your message
Dark Mode UI
Built with modern design principles, TalkEase features a sleek dark interface optimized for comfort and focus.

🐛 Troubleshooting
"Connection refused" error
Ensure the backend is running on http://localhost:8000
Check that both frontend and backend are running
API errors
Verify your Groq API key is valid and set in the .env file
Check your Groq API quota hasn't been exceeded
Port already in use
Change the port: uvicorn main:app --port 8001
Update the frontend fetch URL accordingly in App.jsx
🤝 Contributing
Contributions are welcome! Feel free to:

Report bugs
Suggest features
Submit pull requests
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Groq for the Llama 3.1 API
FastAPI for the backend framework
React for the frontend framework
Tailwind CSS for styling
📧 Support
Have questions or issues? Feel free to open an issue on the repository.

Happy practicing! Remember, confidence comes with practice. 💪
