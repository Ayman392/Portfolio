"use client";

import React from "react";
import "./breezy-button.css"; 

interface BreezyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function BreezyButton({ children, className = "", onClick, ...props }: BreezyButtonProps) {
  return (
    <div className={`btn-wrapper ${className}`}>
      <div className="light"></div>
      <div className="gradient-layer" style={{ animationDelay: "0s", animationDuration: "25s" }}></div>
      <div className="gradient-layer" style={{ animationDelay: "0.15s", animationDuration: "15.9s" }}></div>
      <div className="gradient-layer" style={{ animationDelay: "0.53s", animationDuration: "26.4s" }}></div>
      <div className="gradient-layer" style={{ animationDelay: "0.45s", animationDuration: "17.8s" }}></div>
      <div className="gradient-layer" style={{ animationDelay: "1.6s", animationDuration: "19.2s" }}></div>
      <div className="gradient-layer" style={{ animationDelay: "1.6s", animationDuration: "29.2s" }}></div>
      <div className="gradient-layer" style={{ animationDelay: "1.6s", animationDuration: "20.2s" }}></div>
      
      {/* The actual clickable button */}
      <button className="gradient-btn" onClick={onClick} {...props}>
        {children}
      </button>
      
      {/* The text overlay for the visual effect */}
      <div className="text-overlay" aria-hidden="true">
        {children}
      </div>
    </div>
  );
}