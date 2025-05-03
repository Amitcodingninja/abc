import React from 'react';

function Card() {
  const handleLog = () => {
    console.log('📝 Log button clicked!');
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-bold text-gray-800 mb-2">Tailwind Card</h2>
      <p className="text-gray-600 mb-4">
        This is a simple card component styled with Tailwind CSS (CDN).
      </p>
      <button
        onClick={handleLog}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Log to Console
      </button>
    </div>
  );
}

export default Card;
