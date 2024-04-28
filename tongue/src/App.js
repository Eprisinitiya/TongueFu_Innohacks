import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ReadAloud from './pages/ReadAloud';
import Contact from './pages/Contact';
import Resources from './pages/Resouces';
import TongueTwister from './pages/TongueTwister';
import FAQPage from './pages/FAQPage';
import AboutPage from './pages/AboutPage';
import LiveChat from './features/Live Chat/LiveChat';
import Navbar from "./components/Navbar"
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <LiveChat />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/readaloud" element={<ReadAloud />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tonguetwister" element={<TongueTwister />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
