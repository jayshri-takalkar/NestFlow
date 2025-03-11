import { useState } from "react";
import { useNavigate } from "react-router-dom";
//A simple login form that updates the user state and navigates to the dashboard.
function LoginPage({ setUser }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        setUser({ email });
        navigate("/dashboard");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl mb-4">Login</h1>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 border mb-2" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 border mb-2" />
            <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2">Login</button>
        </div>
    );
}

export default LoginPage;