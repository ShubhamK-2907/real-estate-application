import React from 'react';
import styles from '../styles/PageLogo.module.scss';

export const PageLogo: React.FC = () => {
  return (
    <div className={styles.logoContainer}>
      <img 
        src="/icons/logo.svg" 
        alt="Logo" 
        className={styles.logo}
      />
    </div>
  );
}; 