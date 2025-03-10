import React, { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Feather icons
import "../styles/LoginPage.css";
import logo from "../assets/images/logo_hiu.png";

const LoginPage = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeIn(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            {/* Header Section */}
            <div className="login-header">
                <img src={logo} alt="Logo" className={`login-logo ${fadeIn ? "visible" : ""}`} />
                <h1 className={`fade-in-text ${fadeIn ? "visible" : ""}`}>Chào Mừng Trở Lại!</h1>
                <p className={`static-text ${fadeIn ? "visible" : ""}`}>Đăng nhập để khám phá thế giới truyện và đóng góp câu chuyện của bạn.</p>
            </div>

            {/* Login Form */}
            <form className="login-form">
                {/* Email Input */}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Nhập email của bạn"
                    required
                    className="input-field"
                />

                {/* Password Input */}
                <label htmlFor="password">Mật khẩu</label>
                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Nhập mật khẩu của bạn"
                        required
                        className="input-field"
                    />
                    <button
                        type="button"
                        className="toggle-password-icon"
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </button>
                </div>

                {/* Login Button */}
                <button type="submit" className="login-button">
                    Đăng Nhập
                </button>

                {/* Register Button */}
                <button type="button" className="register-button">
                    <span className="desktop-text">Bạn chưa có tài khoản? Đăng ký ngay!</span>
                    <span className="mobile-text">Đăng ký</span>
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
