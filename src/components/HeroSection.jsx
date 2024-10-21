import React from "react";
import heroImage from '../assets/safaricom-hero-image.jpeg';
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for opacity */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to LIPA NA MPESA Demo</h1>
        <p className="text-lg md:text-xl mb-8">M-PESA Integration</p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
            Learn More
          </button>

          <Link to='/buy-ticket'>
          <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-6 rounded">
            Book a ticket
          </button>
          </Link>
  
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
