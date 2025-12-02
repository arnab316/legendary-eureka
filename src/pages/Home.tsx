import { HomeCardSlider } from "@/components/HomeCardSlider";
import { HomeSlider } from "@/components/HomeSlider";
import React from "react";

const Home: React.FC = () => {
  return (
    <>
    <div className="relative w-full overflow-hidden bg-[#F9F9F9]">
          <div className="absolute top-0 left-0 w-full  z-10 overflow-hidden">
    <span className="animate-marquee whitespace-nowrap text-xl block py-3 text-shadow-lg  font-bold text-[#EB0404]">
     Root out Silica dust, Life will long last - “সিলিকা ধূলো কর দূর, জীবন যাবে বহু দূর । যদি নাও সুরক্ষা, তবেই পাবে রক্ষা ।”
    </span>
  </div>
   <HomeSlider />
   </div>
    <div className="relative py-10 px-4 sm:px-6 lg:px-10 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <p className="text-gray-500 text-base sm:text-lg mb-2">Welcome to the</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Directorate Of <span className="text-cyan-500">Factories</span>
        </h1>
        <div className="w-24 sm:w-32 h-1 bg-cyan-500 mb-6 sm:mb-8 mx-auto lg:mx-0"></div>

        <h2 className="text-2xl sm:text-3xl text-cyan-500 mb-4 sm:mb-6 hover:underline">
          About Us
        </h2>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
          The Directorate of Factories, under the Department of Labour, Govt. of
          West Bengal is mainly responsible for implementation and administration of
          The Factories Act, 1948 and the rules framed thereunder.
        </p>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
          It is primarily engaged in fulfilment of goals in respect of safety,
          health & welfare of factory workers by preventing accidents and
          occupational hazards, ensuring a safe working environment for all.
        </p>

        <a
          href="/main/about_us"
          className="inline-block text-cyan-500 hover:text-cyan-600 transition-colors hover:underline"
        >
          Read more
        </a>
      </div>

      {/* Right Illustration */}
      <div className="relative w-full flex justify-center lg:justify-end">
        <svg
          viewBox="0 0 800 500"
          className="w-full max-w-[600px] h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Background circles */}
          <circle cx="200" cy="100" r="60" fill="#e5e7eb" opacity="0.3" />
          <circle cx="600" cy="150" r="80" fill="#e5e7eb" opacity="0.2" />
          <circle cx="700" cy="250" r="100" fill="#e5e7eb" opacity="0.25" />
          <circle cx="500" cy="80" r="40" fill="#e5e7eb" opacity="0.3" />

          {/* Factory illustration */}
          {/* Chimney 1 (Blue) */}
          <rect x="50" y="300" width="60" height="150" fill="#22d3ee" />
          <rect x="50" y="280" width="60" height="30" fill="#06b6d4" rx="5" />
          <ellipse cx="80" cy="260" rx="15" ry="8" fill="#fbbf24" />
          <ellipse cx="80" cy="250" rx="18" ry="10" fill="#fbbf24" />

          {/* Building 1 (Red Container) */}
          <rect x="140" y="350" width="100" height="100" fill="#ef4444" />
          <line x1="150" y1="350" x2="150" y2="450" stroke="#dc2626" strokeWidth="2" />
          <line x1="170" y1="350" x2="170" y2="450" stroke="#dc2626" strokeWidth="2" />
          <line x1="190" y1="350" x2="190" y2="450" stroke="#dc2626" strokeWidth="2" />
          <line x1="210" y1="350" x2="210" y2="450" stroke="#dc2626" strokeWidth="2" />
          <line x1="230" y1="350" x2="230" y2="450" stroke="#dc2626" strokeWidth="2" />

          {/* Building 2 (Framework) */}
          <rect x="260" y="320" width="80" height="130" fill="none" stroke="#9ca3af" strokeWidth="3" />
          <line x1="260" y1="340" x2="340" y2="340" stroke="#9ca3af" strokeWidth="2" />
          <line x1="260" y1="360" x2="340" y2="360" stroke="#9ca3af" strokeWidth="2" />
          <line x1="260" y1="380" x2="340" y2="380" stroke="#9ca3af" strokeWidth="2" />
          <line x1="280" y1="320" x2="280" y2="450" stroke="#9ca3af" strokeWidth="2" />
          <line x1="300" y1="320" x2="300" y2="450" stroke="#9ca3af" strokeWidth="2" />
          <line x1="320" y1="320" x2="320" y2="450" stroke="#9ca3af" strokeWidth="2" />

          {/* Chimney 2 (Striped) */}
          <rect x="360" y="300" width="70" height="150" fill="#06b6d4" />
          <rect x="360" y="320" width="70" height="20" fill="#fff" />
          <rect x="360" y="360" width="70" height="20" fill="#fff" />

          {/* Building 3 (Orange) */}
          <rect x="450" y="340" width="80" height="110" fill="#fb923c" />
          <rect x="465" y="355" width="20" height="25" fill="#fff" />
          <rect x="495" y="355" width="20" height="25" fill="#fff" />
          <rect x="465" y="390" width="20" height="25" fill="#fff" />
          <rect x="495" y="390" width="20" height="25" fill="#fff" />

          {/* Crane */}
          <line x1="560" y1="450" x2="560" y2="250" stroke="#fbbf24" strokeWidth="4" />
          <line x1="560" y1="250" x2="640" y2="280" stroke="#fbbf24" strokeWidth="4" />
          <line x1="560" y1="270" x2="520" y2="285" stroke="#fbbf24" strokeWidth="3" />
          <line x1="540" y1="278" x2="560" y2="270" stroke="#fbbf24" strokeWidth="3" />
          <rect x="625" y="275" width="20" height="20" fill="#ef4444" />
          <line x1="635" y1="295" x2="635" y2="320" stroke="#374151" strokeWidth="2" />

          {/* Building 4 (Teal) */}
          <rect x="580" y="370" width="90" height="80" fill="#14b8a6" />
          <rect x="590" y="380" width="15" height="15" fill="#fff" />
          <rect x="610" y="380" width="15" height="15" fill="#fff" />
          <rect x="630" y="380" width="15" height="15" fill="#fff" />
          <rect x="650" y="380" width="15" height="15" fill="#fff" />
          <rect x="590" y="410" width="15" height="15" fill="#fff" />
          <rect x="610" y="410" width="15" height="15" fill="#fff" />
          <rect x="630" y="410" width="15" height="15" fill="#fff" />
          <rect x="650" y="410" width="15" height="15" fill="#fff" />

          {/* Small building */}
          <rect x="555" y="420" width="30" height="30" fill="#fbbf24" />

          {/* Tree */}
          <circle cx="710" cy="430" r="20" fill="#84cc16" />
          <rect x="705" y="430" width="10" height="20" fill="#78716c" />

          {/* Dome building (Red) */}
          <rect x="720" y="400" width="60" height="50" fill="#ef4444" />
          <ellipse cx="750" cy="400" rx="30" ry="15" fill="#dc2626" />

          {/* Building 5 (Blue with windows) */}
          <rect x="100" y="380" width="70" height="70" fill="#0ea5e9" />
          <rect x="110" y="390" width="15" height="15" fill="#fff" />
          <rect x="135" y="390" width="15" height="15" fill="#fff" />
          <rect x="110" y="415" width="15" height="15" fill="#fff" />
          <rect x="135" y="415" width="15" height="15" fill="#fff" />

          {/* Power plant chimneys */}
          <rect x="660" y="350" width="30" height="100" fill="#ef4444" />
          <rect x="700" y="360" width="30" height="90" fill="#ef4444" />

          {/* Factory base */}
          <rect x="620" y="410" width="180" height="40" fill="#0ea5e9" />
          <rect x="630" y="415" width="15" height="10" fill="#fff" />
          <rect x="650" y="415" width="15" height="10" fill="#fff" />
          <rect x="670" y="415" width="15" height="10" fill="#fff" />
          <rect x="690" y="415" width="15" height="10" fill="#fff" />
          <rect x="710" y="415" width="15" height="10" fill="#fff" />
          <rect x="730" y="415" width="15" height="10" fill="#fff" />
          <rect x="750" y="415" width="15" height="10" fill="#fff" />
          <rect x="770" y="415" width="15" height="10" fill="#fff" />

          {/* Wind turbine */}
          <line x1="750" y1="450" x2="750" y2="300" stroke="#ef4444" strokeWidth="3" />
          <circle cx="750" cy="300" r="8" fill="#0ea5e9" />
          <line x1="750" y1="300" x2="720" y2="270" stroke="#ef4444" strokeWidth="3" />
          <line x1="750" y1="300" x2="780" y2="280" stroke="#ef4444" strokeWidth="3" />
          <line x1="750" y1="300" x2="765" y2="330" stroke="#ef4444" strokeWidth="3" />
        </svg>
      </div>
    </div>
  </div>
</div>





       
        <HomeCardSlider />
       





     </>
  );
};

export default Home;