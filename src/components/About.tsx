import { Building2, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            The Architect of Victory
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto shadow-[0_0_15px_rgba(250,204,21,0.6)]"></div>
        </div>

        {/* Profile Section */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 md:p-12 mb-16 shadow-[0_0_50px_rgba(250,204,21,0.1)]">
          <div className="grid md:grid-cols-3 gap-8 items-start">

            {/* Image Column */}
            <div className="md:col-span-1 flex justify-center">
              <div className="w-56 h-56 rounded-full border-4 border-yellow-400 overflow-hidden shadow-lg shadow-yellow-500/20">
                <img
                  src="/adarsh-gowda.jpg"
                  alt="Adarsh Gowda"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Column */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  ADARSH GOWDA
                </h3>
                <p className="text-yellow-400 text-lg font-semibold mb-4">
                  Founder & CEO | Nabhah Vyuha
                </p>
              </div>

              <blockquote className="text-2xl font-bold text-yellow-400 italic border-l-4 border-yellow-400 pl-6 py-2 shadow-[0_0_20px_rgba(250,204,21,0.2)]">
                "Elections are not won by noise; they are won by architecture."
              </blockquote>

              <p className="text-gray-300 leading-relaxed text-lg">
                Adarsh Gowda does not run traditional political campaigns. He approaches
                the electoral battlefield as an{" "}
                <span className="text-white font-semibold">
                  Election Systems Thinker
                </span>
                —treating every constituency as a structural equation that can be mapped,
                engineered, and solved.
              </p>
            </div>

          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)]">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              <Building2 className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Institutional Advantage
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With a formidable background rooted in top-tier national engineering services
              and executive-level government administration, Adarsh brings unprecedented
              institutional rigor to political strategy. He understands power because he
              understands the mechanics of the state.
            </p>
          </div>

          {/* Card 2 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)]">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              <Target className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Tactical Execution
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Transitioning macro-level command into micro-level electoral warfare,
              Adarsh founded Nabhah Vyuha. His methodology replaces guesswork with
              data architecture and granular field intelligence.
            </p>
          </div>

          {/* Card 3 */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)]">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              The Vyuha Philosophy
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Under his command, Nabhah Vyuha operates at the ruthless intersection
              of data science and ground reality.
            </p>
            <p className="text-yellow-400 font-semibold mt-4 text-lg">
              He does not merely advise candidates; he engineers their victories.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}