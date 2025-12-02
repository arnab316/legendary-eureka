import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { IoMdArrowDropdown } from "react-icons/io";

interface DropdownItem {
  label: string;
  path: string;
   isExternal?: boolean;
  children?: DropdownItem[];
}

interface DropdownDataProps {
  title: string;
  items: DropdownItem[];
  className?: string;
}

// Recursive component for nested menu items
const NestedMenuItem: React.FC<{ item: DropdownItem; level: number }> = ({ item, level }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  // Background color adjustment by level
  const bgColor =
    level === 0
      ? "bg-white hover:bg-gray-100 hover:text-blue-500"
      : level === 1
      ? "bg-[#404040] px-3 py-3 text-white hover:bg-[#575757]"
      : "bg-gray-200 hover:bg-gray-300";

  return (
    <div
      className="relative"
      onMouseEnter={() => hasChildren && setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {item.path.startsWith("http") ||  item.isExternal ? (
        <a
    href={item.path}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-between px-3 py-2 transition-colors text-sm text-black border-b border-gray-200 last:border-b-0 ${bgColor}`}
  >
    {item.label}
    {hasChildren && <IoMdArrowDropdown size={14} className="-rotate-90 text-gray-600" />}
  </a>):(
  <Link
        to={item.path}
        className={`flex items-center justify-between px-3 py-2 transition-colors text-sm text-black border-b border-gray-200 last:border-b-0 ${bgColor}`}
      >
        {item.label}
        {hasChildren && <IoMdArrowDropdown size={14} className="-rotate-90 text-gray-600" />}
      </Link>

  
      )}
     
      {/* Recursively render children */}
      {hasChildren && isOpen && (
        <div
          className={`absolute left-full top-0 shadow-md min-w-48 z-50  ${bgColor}`}
        >
          {item.children!.map((child, index) => (
            <NestedMenuItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const DropdownData: React.FC<DropdownDataProps> = ({ title, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Trigger */}
      <button
        className={`hover:text-blue-500 transition duration-300 py-3 px-1.5 border-r-1 border-black flex items-center gap-1 ${
          className || "text-white hover:text-blue-500"
        }`}
      >
        {title}
        <ChevronDown size={16} />
      </button>

      {/* First Level Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full hover:text-blue-500 bg-white shadow-lg min-w-64  z-50 border border-gray-300">
          {items.map((item, index) => (
            <NestedMenuItem key={index} item={item} level={0} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownData;
