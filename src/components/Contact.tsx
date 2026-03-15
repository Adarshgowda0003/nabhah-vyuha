import React, { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import PhoneOTP from "./PhoneOTP";

/* ---------- TYPE DEFINITIONS ---------- */

type StateName = "Karnataka" | "Telangana" | "Andhra Pradesh";
type ElectionType = "Assembly" | "Parliamentary";

/* ---------- DATA OBJECT ---------- */

const constituenciesData: Record<StateName, Record<ElectionType, string[]>> = {

  Karnataka: {
    Assembly: [
      "Afzalpur","Aland","Anekal","Arabhavi","Arkalgud","Arsikere","Athani",
      "Aurad (SC)","B.T.M. Layout","Babaleshwar","Badami","Bagalkot","Bagepalli",
      "Bailhongal","Bangarapet (SC)","Basavakalyan","Basavana Bagevadi","Basavanagudi",
      "Belgaum Dakshin","Belgaum Rural","Belgaum Uttar","Bellary City",
      "Bellary Rural (ST)","Beltangady","Bhadravati","Bhalki","Bhatkal","Bidar",
      "Bidar South","Bijapur City","Bilgi","Bommanahalli","Bommasandra",
      "Byadgi","Byatarayanapura","Byndoor","C.V. Raman Nagar (SC)",
      "Challakere (ST)","Chamaraja","Chamarajanagar","Chamundeshwari",
      "Channagiri","Channapatna","Chickpet","Chikkaballapur",
      "Chikkodi-Sadalga","Chikkanayakanahalli","Chikmagalur","Chincholi (SC)",
      "Chintamani","Chitradurga","Dasarahalli","Davanagere North",
      "Davanagere South","Devanahalli (SC)","Devar Hippargi","Devadurga (ST)",
      "Dharwad","Doddaballapur","Gadag","Gandhi Nagar","Gangawati",
      "Gauribidanur","Gokak","Govindraj Nagar","Gulbarga Dakshin",
      "Gulbarga Rural (SC)","Gulbarga Uttar","Gubbi","Gundlupet",
      "Gurmitkal","Hagaribommanahalli (SC)","Haliyal","Hangal",
      "Hanur","Harapanahalli","Harihar","Hassan","Haveri (SC)","Hebbal",
      "Heggadadevankote (ST)","Hirekerur","Hiriyur","Holalkere (SC)",
      "Honnali","Hosadurga","Hoskote","Hubli-Dharwad Central",
      "Hubli-Dharwad East (SC)","Hubli-Dharwad West","Hukkeri","Hungund",
      "Humnabad","Hunasuru","Indi","Jagalur (ST)","Jamkhandi","Jayanagar",
      "Jevargi","K.R. Pura","Kadur","Kagwad","Kalghatgi","Kampli (ST)",
      "Kanakapura","Kanakagiri (SC)","Karkala","Karwar","Kaup",
      "Khanapur","Kittur","Kolar","Kolar Gold Field (SC)","Kollegala (SC)",
      "Koppa","Koppal","Koratagere (SC)","Krishnaraja","Krishnarajapete",
      "Krishnarajapuram","Kudachi (SC)","Kudligi (ST)","Kumta","Kundapura",
      "Kundgol","Kunigal","Kushtagi","Lingsugur (SC)","Madikeri",
      "Magadi","Mahadevapura (SC)","Mahalakshmi Layout","Malavalli (SC)",
      "Malur","Mandya","Manvi (ST)","Maski (ST)","Mayakonda (SC)",
      "Molakalmuru (ST)","Muddebihal","Mudhol (SC)","Mudigere (SC)",
      "Mulbagal (SC)","Nagamangala","Nagathan (SC)","Nanjangud (SC)",
      "Narasimharaja","Nargund","Navalgund","Nelamangala (SC)",
      "Nippani","Padmanabhanagar","Pavagada (SC)","Periyapatna",
      "Pulakeshinagar (SC)","Raichur","Raichur Rural (ST)","Rajaji Nagar",
      "Rajarajeshwarinagar","Ramanagara","Ramdurg","Ranebennur","Ron",
      "Sagar","Sakleshpur (SC)","Sandur (ST)","Sarvagnanagar",
      "Saundatti Yellamma","Sedam","Shahapur","Shanti Nagar","Shiggaon",
      "Shikaripura","Shimoga","Shimoga Rural (SC)","Shirahatti (SC)",
      "Shivajinagar","Shorapur (ST)","Shravanabelagola","Shrirangapattana",
      "Sidlaghatta","Sindagi","Sindhanur","Sira","Sirsi","Siruguppa (ST)",
      "Soraba","Srinivaspur","Sringeri","Sullia (SC)","T. Narasipur (SC)",
      "Tarikere","Terdal","Tiptur","Tirthahalli","Tumkur City","Tumkur Rural",
      "Turuvekere","Udupi","Varuna","Vijayanagara","Vijay Nagar",
      "Virajpet","Yadgir","Yelahanka","Yelburga","Yellapur",
      "Yemkanmardi (ST)","Yeshwantpur"
    ],

    Parliamentary: [
      "Chikkodi","Belgaum","Bagalkot","Bijapur (SC)","Gulbarga (SC)",
      "Raichur (ST)","Bidar","Koppal","Bellary (ST)","Haveri","Dharwad",
      "Uttara Kannada","Davanagere","Shimoga","Udupi Chikmagalur",
      "Hassan","Dakshina Kannada","Chitradurga (SC)","Tumkur","Mandya",
      "Mysore","Chamarajanagar (SC)","Bangalore Rural","Bangalore North",
      "Bangalore Central","Bangalore South","Chikballapur","Kolar (SC)"
    ]
  },

  "Andhra Pradesh": {
    Assembly: [
      "Achanta","Addanki","Adoni","Allagadda","Alur","Amadalavalasa",
      "Amalapuram","Anakapalle","Anantapur Urban","Anantapur Rural",
      "Araku Valley (ST)","Atmakur","Avanigadda","Badvel (SC)",
      "Banaganapalle","Bapatla","Bhimavaram","Bhimili","Bobbili",
      "Chandragiri","Cheepurupalli","Chilakaluripet","Chintalapudi (SC)",
      "Chirala","Chittoor","Dharmavaram","Denduluru","Don","Darsi",
      "Elamanchili","Eluru","Etcherla","Gajapathinagaram","Gajuwaka",
      "Gangadhara Nellore (SC)","Gannavaram","Giddalur","Gopalapuram (SC)",
      "Gudivada","Gudur (SC)","Guntakal","Guntur East","Guntur West",
      "Gurajala","Hindupur","Ichchapuram","Jaggampeta","Jaggayyapeta",
      "Jammalamadugu","Kadapa","Kadiri","Kaikalur","Kakinada City",
      "Kakinada Rural","Kalyandurg","Kamalapuram","Kandukur","Kanigiri",
      "Kavali","Kodumur (SC)","Kodur (SC)","Kondapi (SC)","Kothapeta",
      "Kovur","Kovvur (SC)","Kuppam","Kurupam (ST)","Kurnool",
      "Madakasira (SC)","Madanapalle","Madugula","Mandapeta",
      "Mangalagiri","Mantralayam","Markapuram","Mummidivaram",
      "Mydukur","Macherla","Machilipatnam","Nagari","Nandigama (SC)",
      "Nandikotkur (SC)","Nandyal","Narasannapeta","Narasapuram",
      "Narasaraopet","Nellimarla","Nellore City","Nellore Rural",
      "Nidadavole","Nuzvid","Ongole","Paderu (ST)","Palacole",
      "Palakonda (ST)","Palamaner","Palasa","Pamarru (SC)",
      "Panyam","Parvathipuram (SC)","Payakaraopet (SC)","Pedakurapadu",
      "Pedana","Peddapuram","Penamaluru","Penukonda","Pileru",
      "Pithapuram","Ponnur","Polavaram (ST)","Punganur","Puttaparthi",
      "Rajahmundry City","Rajahmundry Rural","Rajam (SC)","Rajampet",
      "Rajanagaram","Ramachandrapuram","Rampachodavaram (ST)",
      "Rayachoti","Rayadurg","Repalle","S. Kota","Salur (ST)",
      "Santhanuthalapadu (SC)","Sarvepalli","Sattenapalle","Satyavedu (SC)",
      "Singanamala (SC)","Srikakulam","Srikalahasti","Srisailam",
      "Srungavarapukota","Sullurpeta (SC)","Tadepalligudem","Tadikonda (SC)",
      "Tadipatri","Tanuku","Tekkali","Tenali","Thamballapalle",
      "Tirupati","Tiruvuru (SC)","Tuni","Udayagiri","Undi",
      "Unguturu","Venkatagiri","Vijayawada Central","Vijayawada East",
      "Vijayawada West","Vinukonda","Visakhapatnam East",
      "Visakhapatnam North","Visakhapatnam South","Visakhapatnam West",
      "Vizianagaram","Yelamanchili","Yemmiganur","Yerragondapalem (SC)",
      "YSR Kadapa"
    ],

    Parliamentary: [
      "Araku (ST)","Srikakulam","Vizianagaram","Visakhapatnam","Anakapalle",
      "Kakinada","Amalapuram (SC)","Rajahmundry","Narsapuram","Eluru",
      "Machilipatnam","Vijayawada","Guntur","Narasaraopet","Bapatla (SC)",
      "Ongole","Nandyal","Kurnool","Anantapur","Hindupur","Kadapa",
      "Nellore","Tirupati (SC)","Rajampet","Chittoor (SC)"
    ]
  },

  Telangana: {
    Assembly: [
      "Adilabad","Alair","Alampur (SC)","Amberpet","Andole (SC)",
      "Armur","Asifabad (ST)","Aswaraopeta (ST)","Bahadurpura",
      "Balkonda","Banswada","Bellampalli (SC)","Bhadrachalam (ST)",
      "Bhongir","Bhupalpalle","Boath (ST)","Bodhan","Chandrayangutta",
      "Charminar","Chennur (SC)","Chevella (SC)","Choppadandi (SC)",
      "Devarakadra","Devarakonda (ST)","Dharmapuri (SC)","Dornakal (ST)",
      "Dubbak","Gadwal","Gajwel","Ghanpur (SC)","Ghanpur Station (SC)",
      "Goshamahal","Huzurabad","Huzurnagar","Ibrahimpatnam",
      "Jadcherla","Jagtial","Jangaon","Jubilee Hills","Kalwakurthy",
      "Kamareddy","Karimnagar","Karwan","Khairatabad","Khammam",
      "Khanapur (ST)","Kodad","Kodangal","Kollapur","Koratla",
      "Kothagudem","Kukatpally","Lal Bahadur Nagar","Madhira (SC)",
      "Mahabubabad (ST)","Mahbubnagar","Maheswaram","Makthal",
      "Malakpet","Malkajgiri","Manakondur (SC)","Mancherial","Manthani",
      "Medak","Medchal","Metpalli","Miryalaguda","Mudhole",
      "Mulug (ST)","Munugode","Musheerabad","Nagarjuna Sagar",
      "Nagarkurnool","Nakrekal (SC)","Nalgonda","Nampally",
      "Narayankhed","Narayanpet","Narsampet","Narsapur","Nirmal",
      "Nizamabad Rural","Nizamabad Urban","Palair","Palakurthi",
      "Paleru","Parkal","Parigi","Peddapalle","Pinapaka (ST)",
      "Quthbullapur","Ramagundam","Sanathnagar","Sangareddy",
      "Sathupalle (SC)","Secunderabad","Secunderabad Cantonment (SC)",
      "Serilingampally","Shadnagar","Siddipet","Sircilla","Sirpur",
      "Suryapet","Tandur","Thungathurthi (SC)","Uppal","Vemulawada",
      "Vicarabad (SC)","Wanaparthy","Waradhanapet (SC)",
      "Warangal East","Warangal West","Wyra (ST)","Yakatpura",
      "Yellandu (ST)","Yellareddy","Zahirabad (SC)"
    ],

    Parliamentary: [
      "Adilabad (ST)","Karimnagar","Nizamabad","Zahirabad","Medak",
      "Malkajgiri","Secunderabad","Hyderabad","Chevella","Mahbubnagar",
      "Nagarkurnool (SC)","Nalgonda","Bhongir","Warangal (SC)",
      "Mahabubabad (ST)","Khammam","Peddapalle (SC)"
    ]
  }

};

/* ---------- PARTY OPTIONS ---------- */

const partyOptions = [
  "Indian National Congress",
  "Bharatiya Janata Party",
  "Janata Dal (Secular)",
  "Communist Party of India (CPI)",
  "Aam Aadmi Party",
  "Other"
];

/* ---------- COMPONENT ---------- */

export default function Contact() {

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  const [fullName, setFullName] = useState("");
  const [party, setParty] = useState("");
  const [otherParty, setOtherParty] = useState("");
  const [selectedState, setSelectedState] = useState<StateName | "">("");
  const [electionType, setElectionType] = useState<ElectionType | "">("");
  const [constituency, setConstituency] = useState("");

  const availableConstituencies =
    selectedState && electionType
      ? constituenciesData[selectedState][electionType]
      : [];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isPhoneVerified) {
      alert("Please verify phone number.");
      return;
    }

    const finalParty = party === "Other" ? otherParty : party;

    const formData = {
      fullName,
      party: finalParty,
      state: selectedState,
      electionType,
      constituency
    };

    console.log("Lead:", formData);
    alert("Consultation request transmitted.");

  };

  return <div>{/* Your existing UI remains same */}</div>;
}