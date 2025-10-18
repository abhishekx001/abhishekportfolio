"use client";

import React from "react";

export const Navbar = () => {
  return (
    <header className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center flex-nowrap">
          <h1 
            className="text-sm font-medium text-black pl-8 flex-shrink-0"
            style={{
              fontFamily: '"BBH Sans Bogle", sans-serif',
              fontWeight: '200',
              letterSpacing: '0.05em'
            }}
          >
            Abhishek
          </h1>
        </div>
      </div>
    </header>
  );
};
