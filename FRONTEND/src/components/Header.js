import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import styles from '../styles/Header.module.css';
import logo from '../assets/images/logo_hiu.png';
import icons from './Icons';

const Header = ({ isLoggedIn, userRole }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getIcon = (name) => {
        const IconComponent = icons[name];
        return IconComponent ? <IconComponent size={18} /> : null;
    };

    return (
        <header className={styles.header}>
            {/* Logo Section */}
            <div className={styles.logoContainer}>
                <Link to="/">
                    <img src={logo} className={styles.header_logo} alt="Story Summarizer" />
                </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.desktopNav}>
                <Link to="/categories" className={styles.navLink}>
                    {getIcon('book')} Danh mục
                </Link>

                {!isLoggedIn ? (
                    <Link to="/login" className={styles.navLink}>
                        {getIcon('login')} Đăng nhập
                    </Link>
                ) : (
                    <>
                        {userRole === 'contributor' && (
                            <Link to="/create-summary" className={styles.navLink}>
                                {getIcon('edit')} Tạo tóm tắt
                            </Link>
                        )}
                    </>
                )}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className={styles.mobileMenuButton}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <FiMenu size={24} />
            </button>
            {/* Mobile Navigation */}
            <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
                <Link to="/categories" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                    {getIcon('book')} Danh mục
                </Link>

                {!isLoggedIn ? (
                    <Link to="/login" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                        {getIcon('login')} Đăng nhập
                    </Link>
                ) : (
                    userRole === 'contributor' && (
                        <Link to="/create-summary" className={styles.navLink} onClick={() => setIsMobileMenuOpen(false)}>
                            {getIcon('edit')} Tạo tóm tắt
                        </Link>
                    )
                )}
            </div>

        </header >
    );
};

export default Header;
