import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut, User as UserIcon } from 'lucide-react';
import logo from '../assets/logo-v3.png';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch {
      // Silently fail logout if it fails
    }
  };

  return (
    <div className="app-container">
      <nav>
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="EasyGenerator" style={{ height: '32px' }} />
        </div>
        <div className="flex items-center gap-4" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          {user ? (
            <>
              <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <UserIcon size={20} />
                <span>{user.name}</span>
              </Link>
              <button 
                onClick={handleLogout} 
                style={{ background: 'transparent', color: 'var(--text-muted)', padding: '0.5rem' }}
                title="Logout"
              >
                <LogOut size={20} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link>
              <button className="primary" onClick={() => navigate('/signup')}>Sign Up</button>
            </>
          )}
        </div>
      </nav>
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
