import * as React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  children: React.ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <div className="shadow-xl bg-white hover:shadow-2xl hover:scale-110 transition-all ease-in-out duration-500 flex flex-col">
      {children}
    </div>
  );
}

interface CardContentProps {
  logo?: string;
  title?: string;
  description?: string;
  titleColor?: string;
  className?: string;
  applyLink?: string;
}

export function CardContent({ logo, title, description, titleColor = "text-gray-900", className = "", applyLink }: CardContentProps) {
  const navigate = useNavigate();
    const handleClick = (link?: string) => {
    if (!link) return;

    if (link.startsWith("https://") || link.startsWith("http://")) {
      // Open external links in new tab
      window.open(link, "_blank");
    } else {
      // Navigate internal links
      navigate(link);
    }
  };
  return (
    <div className={`p-6 flex flex-col items-center text-center h-full ${className}`}>
      {/* Logo/Icon Section */}
      {logo && (
        <div className="mb-6 h-24 flex items-center justify-center">
          <img src={logo} alt={title} className="max-h-full w-auto object-contain" />
        </div>
      )}
      
      {/* Title Section */}
      {title && (
        <p className={`text-xl font-bold mb-4 min-h-[3.5rem] flex flex-wrap items-center justify-center ${titleColor}`}>
          {title}
        </p>
      )}

      {/* Description Section */}
      {description && (
        <p className="text-gray-600 text-sm mb-6 flex-grow min-h-[3rem]">
          {description}
        </p>
      )}
      
      {/* Buttons Section */}
      <div className="flex gap-3 mt-auto text-sm w-full text-[12px] justify-center">
        <button className="bg-cyan-500   hover:bg-cyan-400  py-2 px-3 rounded transition-colors duration-200">
          READ MORE
        </button>
        <button  onClick={() => handleClick(applyLink)} className="bg-cyan-500 hover:bg-cyan-400 py-2 px-3 rounded transition-colors duration-200">
          APPLY ONLINE
        </button>
      </div>
    </div>
  );
}