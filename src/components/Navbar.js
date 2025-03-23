import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Girl Up Coders</h1>
          </div>
          <div className="flex items-center">
            <button className="mr-2">Sign In</button>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/courses" className="hover:underline">Courses</Link>
          <Link to="/events" className="hover:underline">Events</Link>
          <Link to="/resources" className="hover:underline">Resources</Link>
          <Link to="/forum" className="hover:underline">Forum</Link>
          <Link to="/announcements" className="hover:underline">Announcements</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;