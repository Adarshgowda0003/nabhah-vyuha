import { Radio, MapPin, Network } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">The Arsenal</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto shadow-[0_0_15px_rgba(250,204,21,0.6)]"></div>
          <p className="text-gray-300 text-xl mt-6 max-w-3xl mx-auto">
            Precision-engineered capabilities designed to dominate the electoral battlefield.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)] group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] transition-all">
                <Radio className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(250,204,21,0.8)]"></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">War-Room Strategy & Command</h3>
            <p className="text-gray-300 leading-relaxed">
              Centralized, rapid-response command center monitoring real-time sentiment and neutralizing hostile attacks 24/7. Our war room operates as the nerve center of your campaign, deploying countermeasures within hours to maintain narrative control.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>24/7 Opposition Movement Tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Real-Time Sentiment Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Rapid Counter-Narrative Deployment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)] group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] transition-all">
                <MapPin className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(250,204,21,0.8)]" style={{ animationDelay: '0.3s' }}></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Micro-Booth Segmentation</h3>
            <p className="text-gray-300 leading-relaxed">
              Aggressive micro-segmentation of voter data down to the individual booth level to ensure surgical resource allocation. We categorize every booth into Fortress, Battleground, or Hostile—directing your energy only where it yields maximum electoral returns.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Household-Level Voter Profiling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Booth Classification System</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Optimized Resource Deployment</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)] group">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-yellow-600/10 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)] group-hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] transition-all">
                <Network className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-[0_0_20px_rgba(250,204,21,0.8)]" style={{ animationDelay: '0.6s' }}></div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Ground-Digital Fusion</h3>
            <p className="text-gray-300 leading-relaxed">
              Crafting impenetrable narratives in English, Telugu, and Kannada that transition seamlessly from digital screens to physical door-to-door cadre communication. We synchronize your online messaging with offline mobilization for complete narrative dominance.
            </p>

            <div className="mt-6 pt-6 border-t border-white/10">
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Tri-Lingual Narrative Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Digital-Physical Synchronization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">▸</span>
                  <span>Cadre Communication Protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
