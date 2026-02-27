import React, { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

// --- 1. TYPE DEFINITIONS ---
type StateName = 'Karnataka' | 'Telangana' | 'Andhra Pradesh';
type ElectionType = 'Assembly' | 'Parliamentary';

// --- 2. STRUCTURED DATA OBJECT ---
// Note: I have included a few sample constituencies. 
// You can populate this with the full 224/28 for Karnataka, etc., later.
// --- 2. STRUCTURED DATA OBJECT ---
const constituenciesData: Record<StateName, Record<ElectionType, string[]>> = {
  'Karnataka': {
    'Assembly': [
      'Afzalpur',

'Aland',

'Anekal',

'Arabhavi',

'Arkalgud',

'Arsikere',

'Athani',

'Aurad (SC)',

'B.T.M. Layout',

'Babaleshwar',

'Badami',

'Bagalkot',

'Bagepalli',

'Bailhongal',

'Bangarapet (SC)',

'Basavakalyan',

'Basavana Bagevadi',

'Basavanagudi',

'Belgaum Dakshin',

'Belgaum Rural',

'Belgaum Uttar',

'Bellary City',

'Bellary Rural (ST)',

'Beltangady',

'Bhadravati',

'Bhalki',

'Bhatkal',

'Bidar',

'Bidar South',

'Bijapur City',

'Bilgi',

'Bommanahalli',

'Bommasandra',

'Byadgi',

'Byatarayanapura',

'Byndoor',

'C.V. Raman Nagar (SC)',

'Challakere (ST)',

'Chamaraja',

'Chamarajanagar',

'Chamundeshwari',

'Channagiri',

'Channapatna',

'Chickpet',

'Chikkaballapur',

'Chikkodi-Sadalga',

'Chikkanayakanahalli',

'Chikmagalur',

'Chincholi (SC)',

'Chintamani',

'Chitradurga',

'Dasarahalli',

'Davanagere North',

'Davanagere South',

'Devanahalli (SC)',

'Devar Hippargi',

'Devadurga (ST)',

'Dharwad',

'Doddaballapur',

'Gadag',

'Gandhi Nagar',

'Gangawati',

'Gauribidanur',

'Gokak',

'Govindraj Nagar',

'Gulbarga Dakshin',

'Gulbarga Rural (SC)',

'Gulbarga Uttar',

'Gubbi',

'Gundlupet',

'Gurmitkal',

'Hagaribommanahalli (SC)',

'Haliyal',

'Hangal',

'Hanur',

'Harapanahalli',

'Harihar',

'Hassan',

'Haveri (SC)',

'Hebbal',

'Heggadadevankote (ST)',

'Hirekerur',

'Hiriyur',

'Holalkere (SC)',

'Honnali',

'Hosadurga',

'Hoskote',

'Hubli-Dharwad Central',

'Hubli-Dharwad East (SC)',

'Hubli-Dharwad West',

'Hukkeri',

'Hungund',

'Humnabad',

'Hunasuru',

'Indi',

'Jagalur (ST)',

'Jamkhandi',

'Jayanagar',

'Jevargi',

'K.R. Pura',

'Kadur',

'Kagwad',

'Kalghatgi',

'Kampli (ST)',

'Kanakapura',

'Kanakagiri (SC)',

'Karkala',

'Karwar',

'Kaup',

'Khanapur',

'Kittur',

'Kolar',

'Kolar Gold Field (SC)',

'Kollegala (SC)',

'Koppa',

'Koppal',

'Koratagere (SC)',

'Krishnaraja',

'Krishnarajapete',

'Krishnarajapuram',

'Kudachi (SC)',

'Kudligi (ST)',

'Kumta',

'Kundapura',

'Kundgol',

'Kunigal',

'Kushtagi',

'Lingsugur (SC)',

'Madikeri',

'Magadi',

'Mahadevapura (SC)',

'Mahalakshmi Layout',

'Malavalli (SC)',

'Malur',

'Mandya',

'Manvi (ST)',

'Maski (ST)',

'Mayakonda (SC)',

'Molakalmuru (ST)',

'Muddebihal',

'Mudhol (SC)',

'Mudigere (SC)',

'Mulbagal (SC)',

'Nagamangala',

'Nagathan (SC)',

'Nanjangud (SC)',

'Narasimharaja',

'Nargund',

'Navalgund',

'Nelamangala (SC)',

'Nippani',

'Padmanabhanagar',

'Pavagada (SC)',

'Periyapatna',

'Pulakeshinagar (SC)',

'Raichur',

'Raichur Rural (ST)',

'Rajaji Nagar',

'Rajarajeshwarinagar',

'Ramanagara',

'Ramdurg',

'Ranebennur',

'Ron',

'Sagar',

'Sakleshpur (SC)',

'Sandur (ST)',

'Sarvagnanagar',

'Saundatti Yellamma',

'Sedam',

'Shahapur',

'Shanti Nagar',

'Shiggaon',

'Shikaripura',

'Shimoga',
'Shimoga Rural (SC)',
'Shirahatti (SC)',
'Shivajinagar',
'Shorapur (ST)',
'Shravanabelagola',
'Shrirangapattana',
'Sidlaghatta',
'Sindagi',
'Sindhanur',
'Sira',
'Sirsi',
'Siruguppa (ST)',
'Soraba',
'Srinivaspur',
'Sringeri',
'Sullia (SC)',
'T. Narasipur (SC)',
'Tarikere',
'Terdal',
'Tiptur',
'Tirthahalli',
'Tumkur City',
'Tumkur Rural',
'Turuvekere',
'Udupi',
'Varuna',
'Vijayanagara',
'Vijay Nagar',
'Virajpet',
'Yadgir',
'Yelahanka',
'Yelburga','Yellapur','Yemkanmardi (ST)','Yeshwantpur'
    ],
    'Parliamentary': [
      'Chikkodi', 'Belgaum', 'Bagalkot', 'Bijapur (SC)', 'Gulbarga (SC)', 'Raichur (ST)', 
      'Bidar', 'Koppal', 'Bellary (ST)', 'Haveri', 'Dharwad', 'Uttara Kannada', 'Davanagere', 
      'Shimoga', 'Udupi Chikmagalur', 'Hassan', 'Dakshina Kannada', 'Chitradurga (SC)', 
      'Tumkur', 'Mandya', 'Mysore', 'Chamarajanagar (SC)', 'Bangalore Rural', 'Bangalore North', 
      'Bangalore Central', 'Bangalore South', 'Chikballapur', 'Kolar (SC)'
    ]
  },
  'Telangana': {
    'Assembly': ['Jubilee Hills', 'Khairatabad', 'Gajwel', 'Siddipet', 'Kamareddy'], // Add full list here later
    'Parliamentary': ['Secunderabad', 'Hyderabad', 'Malkajgiri', 'Karimnagar', 'Nizamabad'] // Add full list here later
  },
  'Andhra Pradesh': {
    'Assembly': ['Kuppam', 'Pulivendula', 'Mangalagiri', 'Gajuwaka', 'Tirupati'], // Add full list here later
    'Parliamentary': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati', 'Kadapa'] // Add full list here later
  }
};

const partyOptions = [
  'Indian National Congress',
  'Bharatiya Janata Party',
  'Janata Dal (Secular)',
  'Communist Party of India (CPI)',
  'Aam Aadmi Party',
  'Other'
];

export default function Contact() {
  // --- 3. STATE MANAGEMENT ---
  const [fullName, setFullName] = useState('');
  const [party, setParty] = useState('');
  const [otherParty, setOtherParty] = useState('');
  
  const [selectedState, setSelectedState] = useState<StateName | ''>('');
  const [electionType, setElectionType] = useState<ElectionType | ''>('');
  const [constituency, setConstituency] = useState('');

  // --- 4. DYNAMIC LOGIC ---
  // Derive available constituencies based on the current selections
  const availableConstituencies = (selectedState && electionType) 
    ? constituenciesData[selectedState][electionType] 
    : [];

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value as StateName | '');
    setConstituency(''); // Reset constituency when state changes
  };

  const handleElectionTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setElectionType(e.target.value as ElectionType | '');
    setConstituency(''); // Reset constituency when type changes
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const finalParty = party === 'Other' ? otherParty : party;
    
    const formData = {
      fullName,
      party: finalParty,
      state: selectedState,
      electionType,
      constituency
    };
    
    console.log('War Room Lead Captured:', formData);
    alert('Consultation request transmitted securely.');
    
    // Reset Form
    setFullName('');
    setParty('');
    setOtherParty('');
    setSelectedState('');
    setElectionType('');
    setConstituency('');
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Text */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Initiate Contact</h2>
          <p className="text-slate-300">
            Begin your journey. Our team will analyze your requirements and respond with a tailored electoral architecture proposal.
          </p>
        </div>

        {/* Glassmorphism Form Container */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* 1. Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
              />
            </div>

            {/* 2. Party / Organization */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Party / Organization *</label>
              <select
                required
                value={party}
                onChange={(e) => setParty(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none"
              >
                <option value="" disabled className="text-slate-500">Select your political party or organization</option>
                {partyOptions.map((p) => (
                  <option key={p} value={p} className="bg-slate-900">{p}</option>
                ))}
              </select>
              
              {/* Conditional 'Other' Text Input */}
              {party === 'Other' && (
                <input
                  type="text"
                  required
                  value={otherParty}
                  onChange={(e) => setOtherParty(e.target.value)}
                  placeholder="Please specify your party/organization"
                  className="mt-3 w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors"
                />
              )}
            </div>

            {/* Grid for State and Election Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 3. State Selection */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">State *</label>
                <select
                  required
                  value={selectedState}
                  onChange={handleStateChange}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none"
                >
                  <option value="" disabled>Select State</option>
                  <option value="Karnataka" className="bg-slate-900">Karnataka</option>
                  <option value="Telangana" className="bg-slate-900">Telangana</option>
                  <option value="Andhra Pradesh" className="bg-slate-900">Andhra Pradesh</option>
                </select>
              </div>

              {/* 4. Election Type */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Election Type *</label>
                <select
                  required
                  value={electionType}
                  onChange={handleElectionTypeChange}
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none"
                >
                  <option value="" disabled>Select Election Type</option>
                  <option value="Assembly" className="bg-slate-900">Assembly Constituency</option>
                  <option value="Parliamentary" className="bg-slate-900">Parliamentary Constituency</option>
                </select>
              </div>
            </div>

            {/* 5. Dynamic Constituency Dropdown */}
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Target Constituency *</label>
              <select
                required
                value={constituency}
                onChange={(e) => setConstituency(e.target.value)}
                disabled={!selectedState || !electionType}
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="" disabled>
                  {(!selectedState || !electionType) 
                    ? "Select State and Election Type first" 
                    : "Select your constituency"}
                </option>
                {availableConstituencies.map((c) => (
                  <option key={c} value={c} className="bg-slate-900">{c}</option>
                ))}
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-slate-900 font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              SUBMIT CONSULTATION REQUEST
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
}