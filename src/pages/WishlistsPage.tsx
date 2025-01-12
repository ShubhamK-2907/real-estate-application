import React from 'react';
import { PropertyCard } from '../components/PropertyCard';
import { usePropertyStore } from '../store/usePropertyStore';
import styles from '../styles/WishlistsPage.module.scss';

export const WishlistsPage: React.FC = () => {
  const { properties, wishlist } = usePropertyStore();
  const wishlistedProperties = properties.filter(p => wishlist.has(p.id));

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Wishlists</h1>
      </div>
      
      {wishlistedProperties.length === 0 ? (
        <div className={styles.emptyState}>
          <p>No properties in your wishlist yet.</p>
        </div>
      ) : (
        <div className={styles.propertyGrid}>
          {wishlistedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};