export interface PropertyDetails {
  price: string;
  location: string;
  latitude: number;
  longitude: number;
  amenities: string[];
  conveniences: string[];
  emiAvailable: boolean;
  type: string;
  address: {
    area: string;
    landmark: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export interface Property {
  id: string;
  name: string;
  city: string;
  deliveryDate: string;
  viewerCount: number;
  rating: number;
  mostLiked: boolean;
  images: string[];
  details: PropertyDetails;
}