// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./../../catalog/theme-toogle/theme-toogle";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">LitReactShelf</Link>
        </h1>
        <ul className="flex space-x-4">
          <div className="hover:cursor-pointer">
            <ThemeToggle />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
