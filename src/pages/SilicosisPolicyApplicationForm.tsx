import React from "react";
import { Link } from "react-router-dom";

const SilicosisPolicyApplicationForm: React.FC = () => {
  return (
    <div className="pb-8 bg-white">
      {/* Hero Section */}
      <div className="relative h-52 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/./Images/about-us-banner-img.avif')" }}
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Silicosis Policy Application Forms</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline cursor-pointer">
              Home
            </Link>
            <span>/</span>
            <span className="text-cyan-400">Silicosis Policy Application Forms</span>
          </div>
        </div>
      </div>

      {/* Application Forms Section */}
      <div className="max-w-3xl mx-15 py-12 px-4">
        

        <div className="space-y-1">
          {/* Header */}
          <div className="flex flex-col sm:flex-row font-semibold text-gray-500  px-1 py-3 border-b border-black">

            <div className="flex-1 text-center">Application Forms</div>
            <div className="w-full sm:w-32 text-center">Download</div>
            <div className="w-full sm:w-32 text-center">Download</div>
          </div>

          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center  rounded-md px-1 py-1  transition">
            <div className="flex-1 text-gray-500">
              Silicosis Application Forms – For Workers
            </div>
            <a target="_blank"  rel="noopener noreferrer" href="/files/contents/silicosis/silicosis-appl-form-worker-with-annex-i-n-ii.pdf" className="w-full sm:w-32 text-center text-blue-400 font-medium cursor-pointer hover:underline">
              English
            </a>
            <a target="_blank"  rel="noopener noreferrer" href="/files/contents/silicosis/silicosis-appl-form-worker-with-annex-i-n-ii.pdf" className="w-full sm:w-32 text-center text-blue-400 font-medium cursor-pointer hover:underline">
              Bengali
            </a>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center  rounded-md px-1 py-1  transition">
            <div className="flex-1 text-gray-500">
              Silicosis Application Forms – For Next of Kin / Nominee
            </div>
            <a target="_blank"  rel="noopener noreferrer" href="/files/contents/silicosis/silicosis-appl-form-nominnee-annex-iii.pdf" className="w-full sm:w-32 text-center text-blue-400 font-medium cursor-pointer hover:underline">
              English
            </a>
            <a target="_blank"  rel="noopener noreferrer" href="/files/contents/silicosis/silicosis-appl-form-worker-with-annex-i-n-ii.pdf" className="w-full sm:w-32 text-center text-blue-400 font-medium cursor-pointer hover:underline">
              Bengali
            </a>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center  rounded-md px-1 py-1  transition">
            <div className="flex-1 text-gray-500">
              Silicosis Life Certificate & Recommendations by Officials
            </div>
            <a target="_blank"  rel="noopener noreferrer" href="/files/contents/silicosis/silicosis-life-certificate-n-recommendations.pdf" className="w-full sm:w-32 text-center text-blue-400 font-medium cursor-pointer hover:underline">
              English
            </a>
            <div className="w-full sm:w-32 text-center text-gray-400 italic">
              {/* Empty for Bengali */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SilicosisPolicyApplicationForm;
