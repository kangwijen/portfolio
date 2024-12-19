import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full py-6 text-neon">
      <div className="h-[2px] bg-green-500" />
      <div className="container mx-auto text-center p-4">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};
