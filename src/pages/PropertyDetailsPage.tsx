import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Heart, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { usePropertyStore } from '../store/usePropertyStore';
import styles from '../styles/PropertyDetails.module.scss';
import clsx from 'clsx';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'leaflet/dist/leaflet.css';
import '../utils/leaflet-icons';

export const PropertyDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProperty, toggleWishlist, wishlist } = usePropertyStore();
  const property = getProperty(id!);

  if (!property) {
    return <div>Property not found</div>;
  }

  const isWishlisted = wishlist.has(property.id);
  const position: [number, number] = [property.details.latitude, property.details.longitude];

  return (
    <div className={styles.container}>
      <div className={styles.imageCarousel}>
      <Swiper
    modules={[Navigation, Pagination]}
    navigation
    pagination={{ clickable: true }}
  >
          {property.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img 
                src={image} 
                alt={`${property.name} - ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => navigate(-1)}
          className={styles.backButton}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {property.mostLiked && (
          <div className={styles.badge}>Most Liked</div>
        )}

        <button
          onClick={() => toggleWishlist(property.id)}
          className={styles.wishlistButton}
        >
          <Heart 
            className={clsx(
              isWishlisted && styles.wishlisted
            )}
          />
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.titleSection}>
            <h1>{property.name}</h1>
            <div className={styles.location}>
              <MapPin className="w-4 h-4" />
              <span>{property.details.location}</span>
            </div>
          </div>
          <div className={styles.priceSection}>
            <p className={styles.price}>{property.details.price}</p>
            {property.details.emiAvailable && (
              <p className={styles.emi}>EMI Available</p>
            )}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Location</h2>
          <div className={styles.addressContainer}>
            <div className={styles.pinIconWrapper}>
              <MapPin />
            </div>
            <div className={styles.addressDetails}>
              <p className={styles.mainAddress}>
                {property.details.address.area}
              </p>
              <p>
                {property.details.address.landmark}
              </p>
              <p>
                {property.details.address.city}, {property.details.address.state} {property.details.address.pincode}
              </p>
            </div>
          </div>
          <div className={styles.map}>
            <MapContainer
              center={position}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full w-full"
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> shubham Kumar Sahoo'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <div>
                    <strong>{property.name}</strong>
                    <br />
                    {property.details.location}
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <button 
            className={styles.mapButton}
            onClick={() => window.open(
              `https://www.google.com/maps/search/?api=1&query=${position[0]},${position[1]}`,
              '_blank'
            )}
          >
            View on Map
          </button>
        </div>

        <div className={styles.section}>
          <h2>Nearby Conveniences</h2>
          <div className={styles.tagList}>
            {property.details.conveniences.map((convenience, index) => (
              <span key={index} className={styles.tag}>
                {convenience}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2>Property Amenities</h2>
          <div className={styles.tagList}>
            {property.details.amenities.map((amenity, index) => (
              <span key={index} className={styles.tag}>
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};