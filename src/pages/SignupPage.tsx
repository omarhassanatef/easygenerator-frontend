import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { UserPlus, Mail, Lock, User } from 'lucide-react';
import axios from 'axios';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const SignupPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPolicy, setShowPolicy] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (pass: string) => {
    const hasLetter = /[a-zA-Z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const hasCapital = /[A-Z]/.test(pass);
    const isLongEnough = pass.length >= 8;

    if (!isLongEnough) return "Password must be at least 8 characters long";
    if (!hasLetter) return "Password must contain at least one letter";
    if (!hasCapital) return "Password must contain at least one capital letter";
    if (!hasNumber) return "Password must contain at least one number";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const passwordError = validatePassword(password);
    if (passwordError) {
      setShowPolicy(true);
      Toastify({
        text: passwordError,
        duration: 4000,
        gravity: "bottom",
        position: "center",
        backgroundColor: "var(--error)"
      }).showToast();
      return;
    }

    setLoading(true);
    try {
      await register(name, email, password);
      Toastify({
        text: "Account created! Please sign in.",
        duration: 3000,
        gravity: "bottom",
        position: "center",
        backgroundColor: "var(--success)"
      }).showToast();
      navigate('/login');
    } catch (error: unknown) {
      let message = "Signup failed";
      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || message;
      }
      Toastify({
        text: message,
        duration: 3000,
        gravity: "bottom",
        position: "center",
        backgroundColor: "var(--error)"
      }).showToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass-card fade-in" style={{ width: '100%', maxWidth: '400px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(79, 70, 229, 0.1)', borderRadius: '1rem', color: 'var(--primary)', marginBottom: '1rem' }}>
          <UserPlus size={32} />
        </div>
        <h2>Create Account</h2>
        <p style={{ color: 'var(--text-muted)' }}>Join us today</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Full Name</label>
          <div style={{ position: 'relative' }}>
            <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="John Doe" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Email</label>
          <div style={{ position: 'relative' }}>
            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="email" 
              placeholder="name@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>
          {showPolicy && (
            <div className="fade-in" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
              Min 8 chars, 1 uppercase, 1 letter, 1 number
            </div>
          )}
        </div>

        <button type="submit" className="primary" disabled={loading} style={{ marginTop: '0.5rem' }}>
          {loading ? 'Creating account...' : 'Sign Up'}
        </button>
      </form>

      <p style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
        Already have an account? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>Sign In</Link>
      </p>
    </div>
  );
};

export default SignupPage;
