import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Enter a valid email";
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            alert("✅ Login successful (client-side only)");
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{ background: "linear-gradient(135deg, #f5f0e1, #d8cfc4)" }}
        >
            <div
                className="card shadow p-4"
                style={{ width: "380px", borderRadius: "12px" }}
            >
                <div className="text-center mb-3">
                    <img
                        src="/logo192.png"
                        alt="LMS Logo"
                        style={{ width: "60px", marginBottom: "10px" }}
                    />
                    <h3 className="fw-bold">Login</h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                            {errors.password && (
                                <div className="invalid-feedback d-block">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
                <p className="text-center mt-3">
                    Don’t have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
