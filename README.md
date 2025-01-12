# Real Estate Application

A modern real estate application built with React, TypeScript, and Vite, optimized for mobile and tablet devices. This application provides a comprehensive property browsing experience with features like property catalogs, wishlists, detailed property views, and map-based property exploration.

## Features

- **Property Catalog**: Browse properties with carousel image galleries and detailed cards
- **Interactive Maps**: View properties on an interactive map with location markers
- **Wishlist**: Save and manage favorite properties
- **Property Details**: Detailed property views with amenities, nearby conveniences, and location information
- **Authentication**: Email/Password and OTP-based authentication
- **Responsive Design**: Optimized for mobile and tablet devices

## Tech Stack

- React 18
- TypeScript
- Vite
- SASS Modules
- React Router DOM
- Leaflet for maps
- Zustand for state management
- ESLint for code quality
- Docker for containerization

## Prerequisites

- Node.js (v20 or later)
- npm (v9 or later)
- Docker (optional, for containerized deployment)

## Getting Started

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

4. **Run linting**
   ```bash
   npm run lint
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

### Docker Deployment

1. **Build Docker image**
   ```bash
   docker build -t real-estate .
   ```

2. **Run Docker container**
   ```bash
   docker run -d -p 80:80 --name real-estate-app real-estate
   ```
   The application will be available at `http://localhost`

3. **Stop container**
   ```bash
   docker stop real-estate-app
   ```

4. **Remove container**
   ```bash
   docker rm real-estate-app
   ```

## Key Features Implementation

### Property Card
- Carousel images with swipe functionality
- Dynamic rating colors based on score:
  - Red: < 3 stars
  - Orange: 3-4 stars
  - Green: 4-5 stars
- Interactive heart icon with animation
- Most liked badge when applicable

### Property Details
- Interactive map with location marker
- Amenities and nearby conveniences display
- EMI availability indicator
- External map application integration

### Maps Integration
- Interactive marker clusters
- Property preview cards on marker click
- Location-based property filtering

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## Contact

1. shubhamk2907@gmail.com
2. Linkedin: https://www.linkedin.com/in/shubham-kumar-sahoo2907/
