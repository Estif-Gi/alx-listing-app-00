import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <div className="font-bold text-xl">🏡 StayFinder</div>
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search destinations..."
          className="border rounded-full px-4 py-2 w-full"
        />
      </div>
      <div className="space-x-4">
        <button className="text-sm">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
