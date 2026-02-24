import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120] border-b border-yellow-500/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo + Brand */}
          <div className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Nabhah Vyuha Logo" 
              className="w-8 h-8 object-contain"
            />
            <h1 className="text-2xl font-bold tracking-wider">
              <span className="text-cyan-400">NABHAH</span>{' '}
              <span className="text-yellow-400">VYUHA</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-300 font-medium">
            <button onClick={() => scrollToSection('home')} className="hover:text-yellow-400 transition-all duration-300">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-yellow-400 transition-all duration-300">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-yellow-400 transition-all duration-300">
              Services
            </button>
            <button onClick={() => scrollToSection('approach')} className="hover:text-yellow-400 transition-all duration-300">
              Approach
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-yellow-400 transition-all duration-300">
              Contact
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cyan-400">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0F1A]/95 border-t border-cyan-500/20 backdrop-blur-xl">
          <div className="px-4 pt-4 pb-4 space-y-3 text-gray-300">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-yellow-400 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-yellow-400 transition">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-yellow-400 transition">
              Services
            </button>
            <button onClick={() => scrollToSection('approach')} className="block w-full text-left hover:text-yellow-400 transition">
              Approach
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-yellow-400 transition">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}