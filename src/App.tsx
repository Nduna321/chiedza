import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import OpportunitiesPage from './pages/OpportunitiesPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
