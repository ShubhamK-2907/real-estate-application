import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import styles from '../styles/Login.module.scss';

export const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { email, password });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h1 className={styles.title}>
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Email</label>
            <div className={styles.inputWrapper}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <Mail className={styles.icon} />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label>Password</label>
            <div className={styles.inputWrapper}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
              <Lock className={styles.icon} />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </button>
        </form>

        <div className={styles.switchMode}>
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Log In'}
          </button>
        </div>
      </div>
    </div>
  );
};