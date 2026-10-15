import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';
import Footer from './components/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TechnologiesSection />
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;