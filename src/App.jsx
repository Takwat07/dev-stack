import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TechnologiesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;