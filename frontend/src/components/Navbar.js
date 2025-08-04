import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const navigate = useNavigate();
  return (
    <header>
      <nav className={styles.navbar} aria-label="Main navigation">
        <img
          src="/logo.png"
          alt="FirstShot Logo"
          className={styles.logo}
          onClick={() => navigate('/')}
        />
        <span
          className={styles.brand}
          onClick={() => navigate('/')}
          tabIndex={0}
          role="button"
          aria-label="Go to home page"
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && navigate('/')}
        >
          FirstShot
        </span>
      </nav>
    </header>
  );
}

export default Navbar;