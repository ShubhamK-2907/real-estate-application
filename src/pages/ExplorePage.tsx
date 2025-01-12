import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { usePropertyStore } from '../store/usePropertyStore';
import styles from '../styles/ExplorePage.module.scss';

export const ExplorePage: React.FC = () => {
  const { properties } = usePropertyStore();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Explore</h1>
      </div>
      
      <div className={styles.propertyGrid}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};