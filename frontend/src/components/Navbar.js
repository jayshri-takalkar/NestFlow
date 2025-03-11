import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-xl font-bold">Family Planner</h1>
            <ul className="flex space-x-4">
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/tasklist">Task List</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/shoppinglist">Shopping List</Link></li>
                <li><Link to="/notes">Notes</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
