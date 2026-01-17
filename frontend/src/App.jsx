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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-800 rounded-3xl shadow-2xl p-6 border border-gray-700">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-pink-400">TalkEase</h1>
          <p className="text-gray-300 mt-1">
            Your comfy AI coach for social anxiety 💬
          </p>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gray-700 rounded-2xl border border-gray-600 p-4">
            <label className="block font-semibold text-gray-200 mb-1">Scenario</label>
            <textarea
              className="w-full rounded-xl border border-gray-600 p-3 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows="2"
              value={scenario}
              onChange={(e) => setScenario(e.target.value)}
              placeholder="e.g., Talking to a girl for the first time..."
            />
          </div>

          <div className="bg-gray-700 rounded-2xl border border-gray-600 p-4">
            <label className="block font-semibold text-gray-200 mb-1">Your Message</label>
            <textarea
              className="w-full rounded-xl border border-gray-600 p-3 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 bg-pink-500 text-white py-3 rounded-xl font-bold hover:bg-pink-600 transition"
            onClick={sendMessage}
            disabled={loading}
          >
            {loading ? "Thinking..." : "Practice"}
          </button>

          <button
            className="flex-1 bg-gray-600 text-gray-200 py-3 rounded-xl font-bold hover:bg-gray-500 transition"
            onClick={() => {
              setScenario("");
              setMessage("");
              setReply("");
            }}
          >
            Clear
          </button>
        </div>

        {/* Chat bubbles with cute avatar */}
        <div className="mt-5 p-4 bg-gray-700 rounded-2xl border border-gray-600 min-h-[180px] overflow-y-auto">
          
          {/* User message */}
          {message && (
            <div className="flex items-start mb-3">
              <div className="w-10 h-10 bg-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-3">
                🧑
              </div>
              <div className="bg-gray-600 text-gray-100 p-3 rounded-2xl max-w-xs break-words">
                {message}
              </div>
            </div>
          )}

          {/* AI Reply */}
          {reply && (
            <div className="flex items-start mb-3 flex-row-reverse">
              <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center text-white font-bold ml-3">
                😺
              </div>
              <div className="bg-gray-800 text-gray-200 p-3 rounded-2xl max-w-xs break-words">
                {reply}
              </div>
            </div>
          )}

          {!reply && !message && (
            <p className="text-gray-400 text-center mt-10">
              Your AI coach reply will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
