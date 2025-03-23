import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Courses from './components/Courses';
import Events from './components/Events';
import Resources from './components/Resources';
import Forum from './components/Forum';
import Announcements from './components/Announcements';
import Hero from './components/Hero';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App bg-black">
        <Navbar />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/events" element={<Events />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/announcements" element={<Announcements />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;