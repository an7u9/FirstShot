import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-light bg-white shadow-sm mb-4" style={{minHeight: '64px'}}>
      <div className="container-fluid d-flex align-items-center">
        <img src="/logo.png" alt="FirstShot Logo" style={{height: '40px', cursor: 'pointer'}} onClick={() => navigate('/')} className="me-2" />
        <span className="navbar-brand mb-0 h1" style={{cursor: 'pointer', fontWeight: 700, fontSize: '1.5rem'}} onClick={() => navigate('/')}>FirstShot</span>
      </div>
    </nav>
  );
}

export default Navbar; 