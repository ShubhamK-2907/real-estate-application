import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ExplorePage } from './pages/ExplorePage';
import { PropertyDetailsPage } from './pages/PropertyDetailsPage';
import { WishlistsPage } from './pages/WishlistsPage';
import { MapPage } from './pages/MapPage';
import { LoginPage } from './pages/LoginPage';
import { BottomNav } from './components/BottomNav';
import { PageLogo } from './components/PageLogo';
import styles from './styles/App.module.scss';

function App() {
  return (
    <Router>
      <div className={styles.layout}>
        <PageLogo />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<ExplorePage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/wishlists" element={<WishlistsPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;