from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
import os
from groq import Groq
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    scenario: str
    message: str

SYSTEM_PROMPT = """
You are a human conversation practice coach.

Your job:
- Act like a real human in the given scenario.
- Respond naturally and realistically.
- After responding, give clear feedback to help the user improve their communication.

Rules:
- Do NOT sound like an assistant or teacher.
- Do NOT mention AI, models, or prompts.
- Be friendly, realistic, and supportive.
- Keep responses concise.

Response format (follow strictly):

[Human Response]
<reply naturally as the person in the scenario>

---
Feedback:
Confidence Score: X/10
Tone: friendly / neutral / nervous / confident / unclear
Clarity: clear / somewhat clear / unclear
What went well:
- <1 short point>
How to improve:
- <1 short point>
Improved Version:
"<rewrite the user's message in a better, more confident way>"
---
"""

@app.post("/chat")
async def chat(req: ChatRequest):
    user_prompt = f"""
Scenario:
{req.scenario}

User message:
"{req.message}"
"""

    completion = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_prompt}
        ],
        temperature=0.7
    )

    return {"reply": completion.choices[0].message.content}