📘 TalkEase

TalkEase is a conversation practice tool designed to help people with social anxiety or anyone who wants to improve communication skills.
It simulates real conversations and provides instant feedback, confidence scoring, and suggestions for improvement.

🚀 Features

💬 AI-powered chat simulation

🧠 Feedback after each message

⭐ Confidence score

📝 Improved version of your message

🌍 Works with any scenario

⚡ Fast and simple UI

🧩 Tech Stack
Backend

FastAPI

Groq LLM (Llama 3.1 8B Instant)

Pydantic

Dotenv

Frontend

React

Tailwind CSS

Vite

🗂️ Project Structure
TalkEase/
│
├── backend/
│   ├── main.py
│   ├── .env
│   └── requirements.txt
│
└── frontend/
    ├── src/
    ├── public/
    ├── index.html
    └── package.json

⚙️ Setup
1. Backend Setup

Create and activate virtual environment

python -m venv venv
venv\Scripts\activate   # Windows
source venv/bin/activate  # Mac/Linux


Install requirements

pip install -r requirements.txt


Add your .env

GROQ_API_KEY=YOUR_API_KEY


Run server

uvicorn main:app --reload

2. Frontend Setup

Install dependencies

npm install


Run frontend

npm run dev

🧠 How It Works
Backend Flow

User sends a message + scenario

Backend sends it to Groq LLM

LLM replies in the format:

[Human Response]
<reply>

---
Feedback:
Confidence Score: X/10
Tone: ...
Clarity: ...
What went well:
- ...
How to improve:
- ...
Improved Version:
"...."
---


Frontend displays the response.

🧪 Example

Scenario:

Talking to a new teammate at a hackathon

User Message:

Hey, I’m Shreshth. Want to work together?

AI Response:

Hey! I’m excited to meet you. Let’s team up and build something awesome.

Feedback:

Confidence Score: 7/10

Tone: friendly

Clarity: clear

Improved Version: “Hey, I’m Shreshth. Want to team up and build something together?”

🧾 Future Improvements

🗣️ Voice input/output

📌 Conversation history

💾 Save & export chats

🎭 Personality-based responses

📊 Dashboard for improvement tracking

⭐ Contribution

If you want to contribute:

Fork the repo

Create a new branch

Make changes

Create a PR

📄 License

MIT License