import React from 'react';
import { Link } from 'react-router-dom';

function FloatingIcons() {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
      <Link to="/news" className="bg-gray-800 p-2 rounded-full">
        {/* News Icon */}
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 8H3m16 0h-2m0 0a2 2 0 11-4 0c1.11 0 2.086-.402 2.599-1M21 21l-6-6m2-6v9m0-9h-9"
          />
        </svg>
      </Link>

      <Link to="/faq" className="bg-gray-800 p-2 rounded-full">
        {/* Question Mark Icon */}
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Link>

      <button
        className="bg-gray-800 p-2 rounded-full"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {/* Arrow Up Icon */}
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 11l-4 4m0 0l4 4m-4-4h18"
          />
        </svg>
      </button>
    </div>
  );
}

export default FloatingIcons;