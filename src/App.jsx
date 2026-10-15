import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechnologiesSection from './components/TechnologiesSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TechnologiesSection />
      </main>
    </div>
  );
}

export default App;