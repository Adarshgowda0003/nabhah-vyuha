import { Search, Grid3x3, Swords } from 'lucide-react';

export default function Approach() {
  return (
    <section id="approach" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">The Vyuha Architecture</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto shadow-[0_0_15px_rgba(250,204,21,0.6)]"></div>
          <p className="text-gray-300 text-xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Our Model Strategy Framework
          </p>
        </div>

        <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-8 md:p-12 mb-12 shadow-[0_0_50px_rgba(250,204,21,0.1)]">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We do not rely on intuition; we engineer electoral outcomes. The Nabhah Vyuha methodology treats every constituency not as a traditional campaign, but as a complex structural equation. We solve this equation through the ruthless application of data, ground intelligence, and tactical narrative deployment.
          </p>
          <p className="text-white text-lg font-semibold">
            Our proprietary framework is executed in three definitive phases:
          </p>
        </div>

        <div className="space-y-8">
          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)]">
            <div className="bg-gradient-to-r from-yellow-400/20 to-transparent p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-400/30 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                  <Search className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-sm tracking-wider">PHASE I</div>
                  <h3 className="text-2xl font-bold text-white">Constituency Reconnaissance</h3>
                  <p className="text-gray-400 text-sm">The Macro View</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">How We Plan a Constituency</h4>
                <p className="text-gray-300 leading-relaxed">
                  Before a single piece of communication is deployed, we map the battlefield. This phase removes emotion from the equation, relying entirely on historical metrics and current ground realities.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Deep-Data Scraping</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Comprehensive analysis of the last three electoral cycles to identify shifting voter loyalty and margin-of-victory thresholds.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Vulnerability Assessment</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Pinpointing anti-incumbency currents and opposition weaknesses through localized, silent polling.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Macro-Demographic Profiling</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Cross-referencing caste, economic, and age matrices across Karnataka, Telangana, and Andhra Pradesh to establish the baseline narrative.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)]">
            <div className="bg-gradient-to-r from-yellow-400/20 to-transparent p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-400/30 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                  <Grid3x3 className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-sm tracking-wider">PHASE II</div>
                  <h3 className="text-2xl font-bold text-white">The Ward Segmentation Blueprint</h3>
                  <p className="text-gray-400 text-sm">The Micro View</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Dividing the Battlefield</h4>
                <p className="text-gray-300 leading-relaxed">
                  Elections are not won at the constituency level; they are won at the polling booth. We reject blanket campaigning, which wastes critical resources on low-yield demographics.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Booth Categorization</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Every booth is mathematically classified into three tiers: Fortress (High-yield/Safe), Battleground (Swing/Persuadable), and Hostile (Low-yield/Weak).
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Micro-Targeting Matrices</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Building voter profiles down to the household level, allowing for hyper-personalized messaging.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Resource Allocation</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Directing candidate time, cadre energy, and campaign capital exclusively to the "Battleground" booths where ROI is highest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.05)] hover:shadow-[0_0_50px_rgba(250,204,21,0.2)]">
            <div className="bg-gradient-to-r from-yellow-400/20 to-transparent p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-yellow-400/30 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.4)]">
                  <Swords className="w-8 h-8 text-yellow-400" />
                </div>
                <div>
                  <div className="text-yellow-400 font-bold text-sm tracking-wider">PHASE III</div>
                  <h3 className="text-2xl font-bold text-white">The Chanakya Deployment</h3>
                  <p className="text-gray-400 text-sm">Ground-Digital Fusion</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-3">Tactical Execution</h4>
                <p className="text-gray-300 leading-relaxed">
                  A strategy is only as effective as its execution. This phase merges our digital command center with your physical cadre.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Narrative Synchronization</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Deploying region-specific, culturally resonant narratives (in English, Telugu, and Kannada) that transition seamlessly from WhatsApp amplification to door-to-door canvassing.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">The War-Room Shield</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    24/7 monitoring of opposition movements, enabling rapid-response countermeasures to neutralize hostile narratives within hours.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <h5 className="text-yellow-400 font-semibold mb-2">Cadre Mobilization</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Utilizing our military-style Vyuha formation to ensure maximum voter turnout on polling day, securing the margins we engineered in Phase II.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
