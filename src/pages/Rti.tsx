import React from 'react';
import { Link } from 'react-router-dom'
const Rti: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-52 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/./Images/about-us-banner-img.avif')" }}
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">RTI</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline cursor-pointer">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">RTI</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-20 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 uppercase">
          Name of SPIO and First Appellate Authority under RTI Act, 2005
        </h2>
        <div className="w-20 h-1 bg-cyan-500 mb-8"></div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 - Shri Anirban Shome */}
          <div className="bg-gray-100 p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-500 mb-3">
              Shri Anirban Shome
            </h3>
            <p className="text-gray-700 font-medium mb-2">
              Sr. Deputy Secretary,
            </p>
            <p className="text-gray-600 mb-2">
              Directorate of Factories, Labour Department, Govt. of West Bengal
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Notification:</span>{' '}
              <a href="#" className="text-cyan-500 hover:underline">
                Labr/2002/Estt. dated 12.06.2024
              </a>
            </p>
            <p className="text-gray-600 mb-1">
              Labour Departmnent, New Secretariat Buildings, 12<sup>th</sup> Floor
            </p>
            <p className="text-gray-600">
              No.1, K. S. Roy Road, Kolkata-700001
            </p>
          </div>

          {/* Card 2 - Shri Amarnath Mallick */}
          <div className="bg-gray-100  p-5 shadow-sm">
            <h3 className="text-xl font-semibold text-cyan-500 mb-3">
              Shri Amarnath Mallick
            </h3>
            <p className="text-gray-700 font-medium mb-2">
              OSD & Ex-Officio Secyretary
            </p>
            <p className="text-gray-600 mb-2">
              Directorate of Factories, Labour Department, Govt. of West Bengal
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Notification:</span>{' '}
              <a href="#" className="text-cyan-500 hover:underline">
                Labr/741/Estt. dated 16.04.2024
              </a>
            </p>
            <p className="text-gray-600 mb-1">
              Labour Department, New Secretariat Buildings, 12<sup>th</sup> Floor
            </p>
            <p className="text-gray-600">
              No.1, K. S. Roy Road, Kolkata-700001
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Rti;