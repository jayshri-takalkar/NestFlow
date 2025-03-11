// ProfilePage.js
//Shows user details and allows navigation back to the dashboard.
import { Link } from "react-router-dom";

function ProfilePage({ user }) {
    return (
        <div className="p-4">
            <h1 className="text-2xl">Profile Page</h1>
            <p>Email: {user?.email || "No email available"}</p>
            <Link to="/dashboard" className="text-blue-500">Back to Dashboard</Link>
        </div>
    );
}

export default ProfilePage;