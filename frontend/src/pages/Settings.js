import React, { useState } from "react";

function Settings({ onTimezoneUpdate }) {
    const [selectedTimezone, setSelectedTimezone] = useState("UTC");

    const handleTimezoneChange = (e) => {
        setSelectedTimezone(e.target.value);
    };

    const saveTimezoneSetting = () => {
        onTimezoneUpdate(selectedTimezone);
        alert("Timezone configuration saved!");
    };

    return (
        <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-lg mt-10">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Select Timezone:</label>
                <select
                    value={selectedTimezone}
                    onChange={handleTimezoneChange}
                    className="border rounded p-2 w-full"
                >
                    <option value="UTC">UTC</option>
                    <option value="America/New_York">Eastern Time (EST)</option>
                    <option value="America/Chicago">Central Time (CST)</option>
                    <option value="America/Denver">Mountain Time (MST)</option>
                    <option value="America/Los_Angeles">Pacific Time (PST)</option>
                    <option value="Asia/Kolkata">India Standard Time (IST)</option>
                    <option value="Europe/London">British Time (BST)</option>
                </select>
            </div>
            <button
                onClick={saveTimezoneSetting}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Save Timezone
            </button>
        </div>
    );
}

export default Settings;