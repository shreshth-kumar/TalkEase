import { useState } from "react";

export default function App() {
  const [scenario, setScenario] = useState("");
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!scenario || !message) return;

    setLoading(true);
    setReply("");

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ scenario, message }),
      });

      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      setReply("Error: Failed to fetch");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold">TalkEase</h1>
          <p className="text-gray-500 mt-2">
            AI Social Anxiety Conversation Coach
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Scenario
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="2"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              placeholder="e.g., Talking to a girl for the first time..."
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              Your Message
            </label>
            <textarea
              className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
          </div>

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
            onClick={sendMessage}
            disabled={loading}
          >
            {loading ? "Thinking..." : "Practice"}
          </button>

          <div className="mt-2 bg-gray-50 rounded-xl p-4 min-h-[160px]">
            <pre className="whitespace-pre-wrap text-gray-700">
              {reply || "Your AI coach reply will appear here..."}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
