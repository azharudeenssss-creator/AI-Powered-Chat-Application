export const sendAIMessage = async (
  message: string
) => {
  const response = await fetch(
    'http://localhost:5000/api/ai/chat',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.log(data);
    throw new Error(data.error || 'API Error');
  }

  return data;
};