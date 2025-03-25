import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar({ configuredTime }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false); // Collapse the menu whenever the route changes
    }, [location.pathname]);

    const [currentTime, setCurrentTime] = useState(configuredTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }));
    const [weather, setWeather] = useState("Loading...");
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(configuredTime || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
            setCurrentDate(new Date().toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }));
        }, 1000);
        return () => clearInterval(interval);
    }, [configuredTime]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                isOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                menuButtonRef.current &&
                !menuButtonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        const fetchWeather = async (lat, lon) => {
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

            if (!apiKey) {
                console.error("API Key is missing! Check your .env file.");
                setWeather("Weather API Key Missing");
                return;
            }

            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
                );

                if (!response.ok) {
                    console.error("Weather API response error:", response.status);
                    setWeather("Weather data unavailable");
                    return;
                }

                const data = await response.json();
                if (data.cod === 200) {
                    setWeather(`${Math.round(data.main.temp)}°C, ${data.weather[0].description}`);
                } else {
                    console.error("Weather API returned error:", data.message);
                    setWeather("Weather data unavailable");
                }
            } catch (error) {
                console.error("Weather API fetch error:", error);
                setWeather("Weather data unavailable");
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeather(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    setWeather("Location access denied");
                }
            );
        } else {
            console.error("Geolocation not supported by this browser.");
            setWeather("Geolocation not supported");
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#faf9f8] p-4 shadow-md relative">
            <div className="flex justify-between items-center">
                {/* Logo (Navigates to Dashboard) */}
                <Link to="/dashboard">
                    <img src="/logo.png" alt="Family Planner Logo" className="h-32 w-32 object-contain" />
                </Link>

                {/* Date */}
                <div className="text-gray-700 font-semibold text-lg">
                    {currentDate}
                </div>

                {/* Weather & Time */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center text-gray-700 font-semibold text-lg">
                        <img src="/weather_icon.png" alt="Weather Icon" className="h-8 w-8 mr-2" />
                        {weather}
                    </div>
                    <div className="text-[#4c97a3] font-semibold text-lg">
                        {currentTime}
                    </div>
                </div>

                {/* Settings & Collapse Menu */}
                <div className="flex items-center gap-4">
                    <Link to="/settings">
                        <img src="/settings_icon.png" alt="Settings" className="h-8 w-8 object-contain hover:opacity-80" />
                    </Link>
                    <button
                        ref={menuButtonRef}
                        onClick={toggleMenu}
                        className="p-2 rounded hover:opacity-80"
                    >
                        <img src="/menu_icon.png" alt="Menu" className="h-8 w-8 object-contain" />
                    </button>
                </div>
            </div>

            {isOpen && (
                <ul className="absolute right-0 top-full mt-2 bg-[#faf9f8] p-4 rounded-lg shadow-md w-48" ref={menuRef}>
                    <li><Link to="/dashboard" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                    <li><Link to="/tasklist" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Task List</Link></li>
                    <li><Link to="/calendar" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Calendar</Link></li>
                    <li><Link to="/shoppinglist" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Shopping List</Link></li>
                    <li><Link to="/notes" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>Notes</Link></li>
                    <li><Link to="/todolist" className="block py-2 text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>ToDo</Link></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;