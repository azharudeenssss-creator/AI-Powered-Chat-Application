cls'use client';

import { useState } from 'react';

export default function AIChat() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    try {
      setLoading(true); 
      const response = await fetch('http://localhost:5000/api/ai', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    prompt: message,
  }),
});
      const data = await response.json();

      setReply(data.reply);
    } catch (error) {
      console.error(error);

      setReply('Server connection failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        AI Chat Assistant
      </h1>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask anything..."
        className="border p-4 w-full rounded-lg"
        rows={5}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="bg-black text-white px-5 py-3 rounded-lg mt-4"
      >
        {loading ? 'Loading...' : 'Ask AI'}
      </button>

      {reply && (
        <div className="mt-6 border rounded-lg p-4 bg-gray-100">
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}