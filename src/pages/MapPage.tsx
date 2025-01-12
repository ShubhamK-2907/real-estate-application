import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { usePropertyStore } from '../store/usePropertyStore';
import { useNavigate } from 'react-router-dom';
import { MapPin, Eye, Star } from 'lucide-react';
import styles from '../styles/MapPage.module.scss';
import '../utils/leaflet-icons';

export const MapPage: React.FC = () => {
  const { properties } = usePropertyStore();
  const navigate = useNavigate();

  const INDIA_CENTER: [number, number] = [20.5937, 78.9629];
  const INITIAL_ZOOM = 5;

  return (
    <div className={styles.container}>
      <MapContainer
        center={INDIA_CENTER}
        zoom={INITIAL_ZOOM}
        className={styles.map}
        zoomControl={false}
        minZoom={4} 
        maxBounds={[
          [8.4, 68.7],
          [37.6, 97.25]
        ]}
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Shubham Kumar Sahoo'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        
        {properties.map((property) => (
          <Marker
            key={property.id}
            position={[property.details.latitude, property.details.longitude]}
          >
            <Popup>
              <div className={styles.popupContent}>
                <div className={styles.image}>
                  <img src={property.images[0]} alt={property.name} />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.title}>{property.name}</h3>
                  <div className={styles.location}>
                    <MapPin className={styles.icon} />
                    <span>{property.details.location}</span>
                  </div>
                  <div className={styles.stats}>
                    <div className={styles.rating}>
                      <Star className={styles.icon} />
                      <span>{property.rating.toFixed(1)}</span>
                    </div>
                    <div className={styles.viewCount}>
                      <Eye className={styles.icon} />
                      <span>{property.viewerCount.toLocaleString()}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/property/${property.id}`)}
                    className={styles.viewButton}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};