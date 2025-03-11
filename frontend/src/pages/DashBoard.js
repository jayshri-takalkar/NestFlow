//Displays the logged-in user's email and provides a link to the profile page.

import { Link } from "react-router-dom";

function DashBoard({ user }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl">Welcome, {user?.email || "Guest"}</h1>
            <Link to="/profile" className="text-blue-500">Manage Profile</Link>
        </div>
    );
}

export default DashBoard;
