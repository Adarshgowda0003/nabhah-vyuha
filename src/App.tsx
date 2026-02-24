import StarField from './components/StarField';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-indigo-950 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-800/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <StarField />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Approach />
        <Contact />

        <footer className="py-8 px-4 text-center border-t border-white/10 backdrop-blur-xl bg-black/30">
          <p className="text-gray-400">
            &copy; 2024 Nabhah Vyuha. All Rights Reserved. | Engineering Electoral Victories Across South India.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
