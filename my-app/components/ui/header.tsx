import React from 'react';
import { RetroGrid } from './RetroGrid'; // Assuming RetroGrid is a separate component

export default function Header() {
  return (
    <header className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-t from-purple-800 via-purple-900 to-black">
      {/* Retro Grid Effect */}
      <RetroGrid className="bottom-0" angle={65} />

      {/* Header Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6">
        {/* Logo */}
        <div className="mb-4">
          <img src="/path/to/logo.png" alt="Blazetask Logo" className="w-20 h-20" />
        </div>
        
        {/* Title */}
        <h1 className="text-4xl font-bold">Blazetask</h1>

        {/* Subtitle */}
        <p className="mt-2 text-lg text-gray-300">
          Get started with Wope and stay on top of your rankings in no time!
        </p>
      </div>

      {/* Gradient Overlay (for a fading effect at the bottom) */}
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
    </header>
  );
}
