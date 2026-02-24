import { Sparkles } from 'lucide-react';
import IndiaStatesMap from "./IndiaStatesMap";
export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Engineering Electoral <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">Victories</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                We fuse granular booth-level analytics with relentless ground execution to command electoral narratives across South India.
              </p>
            </div>

            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-yellow-400 text-black font-bold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(250,204,21,0.6)]"
            >
              
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="w-5 h-5" />
                BOOK STRATEGIC CONSULTATION
              </span>
            </button>
          </div>

          <div className="relative">
            <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(250,204,21,0.1)]">
              <h3 className="text-center text-2xl font-bold text-white mb-6">South India Command</h3>
              <IndiaStatesMap />
              <p className="text-center text-gray-400 text-sm mt-4">Three States. One Command Center.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
