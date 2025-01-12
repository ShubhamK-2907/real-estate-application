import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Heart, Map, User } from 'lucide-react';
import styles from '../styles/BottomNav.module.scss';
import clsx from 'clsx';

export const BottomNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { icon: Home, label: 'Explore', path: '/' },
    { icon: Heart, label: 'Wishlists', path: '/wishlists' },
    { icon: Map, label: 'Show Map', path: '/map' },
    { icon: User, label: 'Log In', path: '/login' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={clsx(styles.navButton, isActive && styles.active)}
            >
              <Icon className={styles.icon} />
              <span className={styles.label}>{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};