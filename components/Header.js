"use client";

import React from "react";
import { ButtonColorful } from "./ButtonColorful.js";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl text-black" style={{ fontFamily: '"BBH Sans Bogle", sans-serif', fontWeight: '400', letterSpacing: '0.05em' }}>
              Abhishek S
            </h1>
          </div>

          {/* Resume Button */}
          <div className="flex-shrink-0 mt-2">
            <ButtonColorful 
              label="Resume" 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
