import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-[#faf9f8] p-4 shadow-md">
            <div className="flex justify-start items-center">
                {/* Logo and Title (Commented Out) */}
                {/* <h1 className="text-xl font-bold flex items-center gap-2">
                    <img src="/logo.png" alt="Family Planner Logo" className="h-10 w-10 object-contain" />
                    Family Planner
                </h1> */}

                {/* Collapse Menu Icon using custom image */}
                <button
                    className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                    onClick={toggleMenu}
                >
                    <img src="/menu_icon.png" alt="Menu" className="h-8 w-8 object-contain" />
                </button>
            </div>

            {/* Navigation Links (Initially Hidden) */}
            {isOpen && (
                <ul className="flex flex-col bg-[#faf9f8] p-4 rounded-lg shadow md:shadow-none">
                    <li><Link to="/dashboard" className="block py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Dashboard</Link></li>
                    <li><Link to="/tasklist" className="block py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Task List</Link></li>
                    <li><Link to="/calendar" className="block py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Calendar</Link></li>
                    <li><Link to="/shoppinglist" className="block py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Shopping List</Link></li>
                    <li><Link to="/notes" className="block py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Notes</Link></li>
                    <li><Link to="/todolist" className="block py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>ToDo</Link></li>
                </ul>
            )}
        </nav>
    );
}
/* Test git commit*/
export default Navbar;
