import React from 'react';
import { Mail } from 'lucide-react';
import { FaLocationArrow } from 'react-icons/fa';
import { IoCompass, IoCallSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-52 bg-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/./Images/about-us-banner-img.avif')" }}
        />
        <div className="relative h-full w-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="hover:underline cursor-pointer">Home</Link>
            <span>/</span>
            <span className="text-cyan-400">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 ml-11 uppercase">
          List of Offices Under Directorate of Factories
        </h2>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-12 pt-0">

          {/* Cards */}
          {[
            {
              location: "Technical team member, For technical difficulties in e-Services (Online services only), mail on the details below with a problem description and screenshots.",
              phone: "1800 103 0009 ( From 6 AM - 10 PM only )",
              email: "wblabourportaldevelopment@gmail.com",
            },
            {
              location: "New Secretariat Buildings 8th Floor 1, K. S. Ray Road, Kolkata-1",
              area: "CJ, CK, CL, CM, HA, HB, HC, HD, HE, District of Howrah, Part of South 24 Parganas",
              phone: "033-22103274",
            },
            {
              location: "Extension Office I 146/1, B.B. Ganguly Street Kol-12",
              area: "Extension Office I 146/1, B.B. Ganguly Street Kol-12",
              phone: "033-2227446/7/8, Fax - 033-227-4445",
            },
            {
              location: "Extension Office II 620, Diamond Harbour Road, Kolkata-34",
              phone: "033-23976421",
            },
            {
              location: "Office of the Dy. Chief Inspector of Factories, Saheed Mongal Panday Sarani, P.O. Barrackpore, Dist. North 24 Parganas, Pin:70012",
              area: "Part of North 24 Parganas",
              phone: "033-25920043, Fax - 033-25920727",
            },
            {
              location: "Office of the Inspector of Factories, D.C. Building Suit No. 10 (2nd Floor), Kalyani, Nadia. Pin - 741235",
              area: "Nadia, Murshidabad, Malda",
              phone: "033-25829415",
            },
            {
              location: "Office of the Inspector of Factories, 57/A/2/1, G.T. Road P.O. Serampore, Dist. Hooghly, Pin - 712201",
              area: "Hooghly",
              phone: "033-26522262",
            },
            {
              location: "Office of the Inspector of Factories, Haldia Administrative Building, P.O. Durgachak, Dist. Purba Medinipur, Pin-721602",
              area: "Purba & Paschim Medinipur",
              phone: "03224-274105",
            },
            {
              location: "Office of the Inspector of Factories, Administrative Building, City Centre (3rd Floor), P.O. Durgapur, Dist. Burdwan, Pin-713216",
              area: "Durgapur Subdivision under Burdwan District, Bankura District",
              phone: "0343-2546010",
            },
            {
              location: "Office of the Dy. Chief Inspector of Factories, Shramik Bhawan, Ground Floor, Kalyanpur Satellite Township, Asansol, District- Paschim Bardhaman, Pincode-713305.",
              area: "Purulia, Birbhum, Burdwan District except Durgapur Subdivision",
              phone: "0341-2252644",
            },
            {
              location: "Office of the Inspector of Factories, Vill & P.O. Jalpaiguri, Dist. Jalpaiguri, Pin-735101",
              area: "Darjeeling, Jalpaiguri, Coochbehar, Uttar Dinajpur, Dakshin Dinajpur",
              phone: "03561-230139",
            },
          ].map((office, i) => (
            <div
              key={i}
              className="bg-[#F9F9F9] rounded-md shadow-sm p-5 pt-5 pb-5 hover:shadow-md transition-shadow"
            >
              <div className="text-gray-700 text-base md:text-md space-y-1 leading-relaxed">
                {/* Location */}
                {office.location && (
                  <div className="flex items-start gap-3">
                    <FaLocationArrow className="text-gray-500 mt-1 flex-shrink-0" size={18} />
                    <p>{office.location}</p>
                  </div>
                )}

                {/* Area */}
                {office.area && (
                  <div className="flex items-start gap-3">
                    <IoCompass className="text-gray-500 mt-1 flex-shrink-0" size={18} />
                    <p>{office.area}</p>
                  </div>
                )}

                {/* Phone */}
                {office.phone && (
                  <div className="flex items-center gap-3">
                    <IoCallSharp className="text-gray-500 flex-shrink-0" size={18} />
                    <p className="leading-none">{office.phone}</p>
                  </div>
                )}

                {/* Email */}
                {office.email && (
                  <div className="flex items-center gap-3">
                    <Mail className="text-gray-500 flex-shrink-0" size={18} />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-blue-600 hover:underline break-all"
                    >
                      {office.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
