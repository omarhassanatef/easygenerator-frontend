import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { User, Mail, ShieldCheck } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="glass-card fade-in" style={{ width: '100%', maxWidth: '500px' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ marginBottom: '1.5rem', color: '#000000', fontSize: '1.5rem' }}>
          Welcome {user.name} to the application
        </h1>
        <div style={{ 
          width: '80px', 
          height: '80px', 
          background: 'var(--primary)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 1.5rem',
          color: 'white',
          fontSize: '2rem',
          fontWeight: 700
        }}>
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h2>User Profile</h2>
        <p style={{ color: 'var(--text-muted)' }}>Account Information</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(0, 0, 0, 0.02)', border: '1px solid var(--border)', borderRadius: '0.75rem' }}>
          <div style={{ color: 'var(--primary)' }}><User size={24} /></div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</div>
            <div style={{ fontWeight: 600 }}>{user.name}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(0, 0, 0, 0.02)', border: '1px solid var(--border)', borderRadius: '0.75rem' }}>
          <div style={{ color: 'var(--primary)' }}><Mail size={24} /></div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email Address</div>
            <div style={{ fontWeight: 600 }}>{user.email}</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(0, 0, 0, 0.02)', border: '1px solid var(--border)', borderRadius: '0.75rem' }}>
          <div style={{ color: 'var(--success)' }}><ShieldCheck size={24} /></div>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Account Status</div>
            <div style={{ fontWeight: 600 }}>Verified User</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
