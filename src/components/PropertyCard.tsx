import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';
import { Star as StarFilled } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Property } from '../types/property';
import { usePropertyStore } from '../store/usePropertyStore';
import styles from '../styles/PropertyCard.module.scss';
import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const navigate = useNavigate();
  const { toggleWishlist, wishlist } = usePropertyStore();
  const isWishlisted = wishlist.has(property.id);

  const getRatingStyle = (rating: number) => {
    if (rating < 3) return styles.low;
    if (rating < 4) return styles.medium;
    return styles.high;
  };

  return (
    <div 
      className={styles.card}
      onClick={() => navigate(`/property/${property.id}`)}
    >
      <div className={styles.imageContainer}>
      <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
  >
    {property.images.map((image, index) => (
      <SwiperSlide key={index}>
        <img src={image} alt={`Property ${index + 1}`} />
      </SwiperSlide>
    ))}
  </Swiper>
        
        {property.mostLiked && (
          <div className={styles.badge}>Most Liked</div>
        )}
        
        <button
          className={styles.wishlistButton}
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(property.id);
          }}
        >
          <Heart 
            className={clsx(isWishlisted && styles.wishlisted)}
          />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.stats}>
          <div className={styles.viewCount}>
            <Eye className={styles.icon} />
            <span>{property.viewerCount.toLocaleString()}</span>
          </div>
          <div className={clsx(styles.rating, getRatingStyle(property.rating))}>
            <StarFilled className={styles.icon} fill="currentColor" />
            <span>{property.rating.toFixed(1)}</span>
          </div>
        </div>

        <h3 className={styles.title}>{property.name}, {property.city}</h3>
    
        <p className={styles.date}>{property.deliveryDate}</p>
      </div>
    </div>
  );
};