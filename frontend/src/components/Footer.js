import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();

    const navItems = [
        { to: "/calendar", icon: "/calendar_icon.png", alt: "Calendar", label: "Calendar" },
        { to: "/todolist", icon: "/todo_icon.png", alt: "ToDo", label: "To-Do" },
        { to: "/notes", icon: "/notes_icon.png", alt: "Notes", label: "Notes" },
        { to: "/shopping", icon: "/shopping_icon.png", alt: "Shopping", label: "ShoppingList" },
    ];

    return (
        <footer className="bg-[#faf9f8] p-4 shadow-md border-t border-gray-200 fixed bottom-0 left-0 w-full z-50">
            <div className="flex justify-around items-center">
                {navItems.map(({ to, icon, alt, label }) => (
                    <Link
                        key={to}
                        to={to}
                        className={`flex flex-col items-center text-xs font-medium text-gray-700 hover:text-gray-900 ${
                            location.pathname === to ? "opacity-100" : "opacity-70"
                        }`}
                    >
                        <img src={icon} alt={alt} className="h-6 w-6 object-contain mb-1" />
                        <span>{label}</span>
                    </Link>
                ))}
            </div>
        </footer>
    );
}

export default Footer;
