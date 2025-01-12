import { create } from 'zustand';
import { Property } from '../types/property';

interface PropertyStore {
  properties: Property[];
  wishlist: Set<string>;
  toggleWishlist: (propertyId: string) => void;
  getProperty: (id: string) => Property | undefined;
}

const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Sushant Lok 2',
    city: 'Gurgaon',
    deliveryDate: 'Apr 5 - 15',
    viewerCount: 41172,
    rating: 3.82,
    mostLiked: true,
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    ],
    details: {
      price: '1.5 Cr',
      location: 'Sector 57, Gurgaon',
      latitude: 28.4595,
      longitude: 77.0266,
      amenities: ['Swimming Pool', 'Gym', 'Garden'],
      conveniences: ['2 Hospital', '4 Gas stations', '2 Schools'],
      emiAvailable: true,
      type: 'Apartment',
      address: {
        area: 'Bulusan',
        landmark: 'Near City Mall',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001'
      }
    }
  },
  {
    id: '2',
    name: 'Rainbow Heights',
    city: 'HSR',
    deliveryDate: 'Mar 8 - 14',
    viewerCount: 5402,
    rating: 5.0,
    mostLiked: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
    ],
    details: {
      price: '2.1 Cr',
      location: 'HSR Layout, Bangalore',
      latitude: 12.9116,
      longitude: 77.6389,
      amenities: ['Club House', 'Tennis Court', 'Park'],
      conveniences: ['3 Hospital', '2 Gas stations', '4 Schools'],
      emiAvailable: true,
      type: 'Apartment',
      address: {
        area: 'Bulusan',
        landmark: 'Near City Mall',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001'
      }
    }
  },
  {
    id: '3',
    name: 'Prestige Lake Ridge',
    city: 'Bangalore',
    deliveryDate: 'Jun 15 - 30',
    viewerCount: 28456,
    rating: 2.4,
    mostLiked: false,
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    ],
    details: {
      price: '3.2 Cr',
      location: 'Whitefield, Bangalore',
      latitude: 12.9716,
      longitude: 77.7502,
      amenities: ['Indoor Pool', 'Spa', 'Tennis Court', 'Movie Theater'],
      conveniences: ['5 Schools', '3 Hospitals', '2 Malls'],
      emiAvailable: true,
      type: 'Villa',
      address: {
        
        area: 'Bulusan',
        landmark: 'Near City Mall',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001'
      }
    }
  },
  {
    id: '4',
    name: 'Marina Bay Residences',
    city: 'Mumbai',
    deliveryDate: 'Aug 1 - 15',
    viewerCount: 62891,
    rating: 4.9,
    mostLiked: true,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    ],
    details: {
      price: '4.5 Cr',
      location: 'Worli Sea Face, Mumbai',
      latitude: 19.0237,
      longitude: 72.8168,
      amenities: ['Infinity Pool', 'Helipad', 'Private Beach Access', 'Yacht Club'],
      conveniences: ['International School', 'Premium Hospitals', 'Fine Dining'],
      emiAvailable: true,
      type: 'Luxury Apartment',
      address: {
        
        area: 'Bulusan',
        landmark: 'Near City Mall',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001'
      }
    }
  },
  {
    id: '5',
    name: 'Green Valley Heights',
    city: 'Pune',
    deliveryDate: 'Jul 10 - 25',
    viewerCount: 15678,
    rating: 4.2,
    mostLiked: false,
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800',
    ],
    details: {
      price: '95 L',
      location: 'Hinjewadi, Pune',
      latitude: 18.5918,
      longitude: 73.7376,
      amenities: ['Garden', 'Kids Play Area', 'Gym', 'Community Hall'],
      conveniences: ['IT Park', '2 Schools', '3 Hospitals'],
      emiAvailable: true,
      type: 'Apartment',
      address: {
        
        area: 'Bulusan',
        landmark: 'Near City Mall',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001'
      }
    }
  },
  {
    id: '6',
    name: 'Sunset Boulevard',
    city: 'Chennai',
    deliveryDate: 'Sep 20 - 30',
    viewerCount: 23456,
    rating: 4.5,
    mostLiked: false,
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    ],
    details: {
      price: '1.8 Cr',
      location: 'ECR Road, Chennai',
      latitude: 13.0827,
      longitude: 80.2707,
      amenities: ['Beach View', 'Rooftop Pool', 'Smart Home', 'Clubhouse'],
      conveniences: ['Beach Access', 'International School', 'Shopping Mall'],
      emiAvailable: true,
      type: 'Premium Apartment',
      address: {
      
        area: 'Bulusan',
        landmark: 'Near City Mall',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001'
      }
    }
  },
  {
    id: '7',
    name: 'Forest Edge Villas',
    city: 'Dehradun',
    deliveryDate: 'Oct 5 - 20',
    viewerCount: 8923,
    rating: 4.8,
    mostLiked: false,
    images: [
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    ],
    details: {
      price: '2.5 Cr',
      location: 'Mussoorie Road, Dehradun',
      latitude: 30.3165,
      longitude: 78.0322,
      amenities: ['Mountain View', 'Organic Farm', 'Nature Trail', 'Meditation Center'],
      conveniences: ['International School', 'Wellness Center', 'Organic Market'],
      emiAvailable: true,
      type: 'Villa',
      address: {
        
        area: 'Bulusan',
        landmark: 'Near City Mall',
        city: 'Gurgaon',
        state: 'Haryana',
        pincode: '122001'
      }
    }
  }
];

export const usePropertyStore = create<PropertyStore>((set, get) => ({
  properties: mockProperties,
  wishlist: new Set<string>(),
  toggleWishlist: (propertyId: string) => {
    set((state) => {
      const newWishlist = new Set(state.wishlist);
      if (newWishlist.has(propertyId)) {
        newWishlist.delete(propertyId);
      } else {
        newWishlist.add(propertyId);
      }
      return { wishlist: newWishlist };
    });
  },
  getProperty: (id: string) => get().properties.find(p => p.id === id)
}));