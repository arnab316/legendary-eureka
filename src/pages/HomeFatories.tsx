import { Link } from "react-router-dom";

const HomeFactories: React.FC = () => {
  return (
    <div className="bg-white pb-5">
      {/* Hero Section */}
      <div className="relative h-52 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/./Images/about-us-banner-img.avif')" }}
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Factories</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline cursor-pointer">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Factories</span>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full px-4 sm:px-14 pt-4">
        <span className="text-[27px] text-[#002153] font-bold mb-6 block">
          Factory List for Third-party Verifications
        </span>

        <form className="flex flex-col sm:flex-row sm:flex-wrap gap-4 rounded-md">
          {/* Registration No */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
            <label className="text-[14px] text-[#777777]">Registration No.</label>
            <input
              type="text"
              className="border border-gray-400 px-2 py-1  focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 placeholder:text-[14px] w-full sm:w-auto"
              placeholder="Enter Registration No."
            />
          </div>

          {/* Licence No */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
            <label className="text-[14px] text-[#777777]">Licence No.</label>
            <input
              type="text"
              className="border border-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 placeholder:text-[14px] w-full sm:w-auto"
              placeholder="Enter Licence No."
            />
          </div>

          {/* Factory Name */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-1">
            <label className="text-[14px] text-[#777777]">Factory Name</label>
            <input
              type="text"
              className="border border-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 placeholder:text-[14px] w-full sm:w-auto"
              placeholder="Name of Factory"
            />
          </div>

          {/* Search Button */}
      <div className="w-full sm:w-auto">
  <button
    type="submit"
    className="bg-[#ececec] border border-gray-400 sm:border-black px-4 py-2 hover:bg-[#E5E5E5] transition-colors text-[14px] w-full sm:w-auto"
  >
    Search
  </button>
</div>


        </form>
      </div>
    </div>
  );
};

export default HomeFactories;
