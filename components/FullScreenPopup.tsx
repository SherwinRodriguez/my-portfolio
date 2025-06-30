import React, { useState, useEffect } from 'react';

const FullScreenPopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Optional: Only show once
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative max-w-[90%] sm:max-w-[560px] w-full">
        <img
          src="/one.png"
          alt="Popup"
          className="w-full h-auto"
        />

        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
        >
          &times;
        </button>

        {/* Buttons over image — position based on percentage or pixel offsets */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-40">
          <button className="px-6 py-2 bg-blue-600 text-white rounded">Blue Button</button>
          <button className="px-6 py-2 bg-red-600 text-white rounded">Red Button</button>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPopup;
