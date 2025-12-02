import React from 'react';
import { GoDash } from "react-icons/go";
import { Link } from 'react-router-dom';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background */}
      <div className="relative h-52 bg-black overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/./Images/about-us-banner-img.avif')" }}
        />
        
        {/* Content */}
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link className="hover:underline cursor-pointer" to="/">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">About Us</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-gray-600 leading-relaxed text-justify mb-8">
          The Directorate of Factories, under the Department of Labour, Govt. of West Bengal is mainly responsible for implementation and administration of the Factories Act in the State. It is primarily engaged in fulfilment of goals in respect of safety, health & welfare of the factory workers inside the factory premises by preventing possibility of accidents, and occupational health hazards such that any person can work inside the factory without fear. Mitigating deprivation of factory workers by attending complaints, elimination of occupational diseases and industrial disasters are also the major goals of this Directorate. It is the apex body for registration, approval of plan and issuance of licence for the factories in the state under the Factories Act. Besides, the Directorate also administers different labour related Acts & Rules, conducting seminars, safety related training programmes and industrial hygiene related surveys. This Directorate is also working hard for ensuring Safety and Health conditions of the Building and Other Construction Workers in the state of West Bengal under the Building and Other Construction Workers (Regulation of employment and Conditions of Service) Act, 1996.
        </p>

        {/* Activities Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Activities</h2>
          <div className="flex text-blue-600  mb-4">
            <GoDash />
            <GoDash />
          </div>
          
          <p className="text-gray-600 leading-relaxed text-justify mb-3">
            The Directorate is responsible for administration of the following Acts and Rules:
          </p>
          <div className="space-y-3 text-gray-600">
            <p className="leading-relaxed text-justify">
              (1) The Factories Act, 1948 and the Rules framed there under (The West Bengal Factories Rules, 1958), [The West Bengal Factories (Exemption) Rules, 1982], [The West Bengal Factories (Welfare Officers) Rules, 1971], [The West Bengal Factories (Safety Officers) Rules, 1978].
            </p>
            <p className="leading-relaxed text-justify">
              (2) The Payment of Wages Act, 1936 and the West Bengal Payment of Wages Rules, 1958.
            </p>
            <p className="leading-relaxed text-justify">
              (3) The Maternity Benefit Act, 1961 and the West Bengal Maternity Benefit Rules, 1965.
            </p>
            <p className="leading-relaxed text-justify">
              (4) The Manufacture, Storage and Import of Hazardous Chemical Rules, 1989.
            </p>
            <p className="leading-relaxed text-justify">
              (5) The Chemical Accidents (Emergency planning preparedness and Response) Rules, 1996.
            </p>
            <p className="leading-relaxed text-justify">
              (6) The Child Labour (Prohibition and Regulation) Act, 1986 and the West Bengal Child Labour (Prohibition and Regulation) Rules, 1995.
            </p>
            <p className="leading-relaxed text-justify">
              (7) Rules under Part-III (Safety & Health) of the West Bengal Building & Other Construction Workers (Regulation of Employment & Conditions of Service) Rules, 2004.
            </p>
          </div>
        </div>

        {/* Functions Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Functions</h2>
          <div className="flex text-blue-600  mb-4">
            <GoDash />
            <GoDash />
          </div>
          <div className="space-y-3 text-gray-600">
            <p className="leading-relaxed text-justify">
              1. Approval of factory plans.
            </p>
            <p className="leading-relaxed text-justify">
              2. Registration and Licensing of factories.
            </p>
            <p className="leading-relaxed text-justify">
              3. Inspection of factories in order to find out the compliance with the provisions of the Acts & Rules
            </p>
            <p className="leading-relaxed text-justify">
              4. Investigation of Accidents and Dangerous occurrences, complaints.
            </p>
            <p className="leading-relaxed text-justify">
              5. Identification of Major Accident Hazards factories (MAH) and advising these factories for preparing on - site emergency plans, safety reports etc.
            </p>
            <p className="leading-relaxed text-justify">
              6. Surveys of work environment to evaluate the occupational stress parameters.
            </p>
            <p className="leading-relaxed text-justify">
              7. Medical surveillance of the workers.
            </p>
            <p className="leading-relaxed text-justify">
              8. Safety training.
            </p>
            <p className="leading-relaxed text-justify">
              9. Helping the management in preparation of Material Safety Data Sheet (MSDS), safety reports, Hazards analysis reports and in holding mock drill to determine efficacy of on-site emergency plan.
            </p>
            <p className="leading-relaxed text-justify">
              10. Conduct off-site emergency drill in coordination with Local administration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;