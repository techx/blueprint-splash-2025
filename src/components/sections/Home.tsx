import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="grid place-items-center bg-gradient-to-br from-blue-100 to-purple-100 p-4 text-center pt-48">
      <div className="max-w-md space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            BluePrint 2025
          </h1>
          <p className="text-lg text-gray-600">
            Join the most innovative hackathon in Massachusetts, where creativity meets technology.
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <a 
            href="/register" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 inline-block"
          >
            Register Now
          </a>
          <a 
            href="/learn-more" 
            className="bg-white border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2 px-4 rounded-full transition duration-300 inline-block"
          >
            Learn More
          </a>
        </div>

        <nav className="space-x-4">
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
          <Link to="/tracks" className="text-blue-600 hover:underline">Tracks</Link>
          <Link to="/faq" className="text-blue-600 hover:underline">FAQ</Link>
          <Link to="/photos" className="text-blue-600 hover:underline">Photos</Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
