import React, { useState, useEffect, useRef } from "react";
import { FaClock } from "react-icons/fa";
import "../assets/styles/marque.css";

declare global {
  interface Window {
    google?: any;
  }
}

const FirstTopBar: React.FC = () => {
  const [languagePopup, setLanguagePopup] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [darkTheme, setDarkTheme] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setLanguagePopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Load Google Translate script
  useEffect(() => {
    const addGoogleTranslate = () => {
      if (document.getElementById("google-translate-script")) return;

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      (window as any).googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", includedLanguages: "en,bn,hi", layout: 0 },
          "google_translate_element"
        );
      };
    };
    addGoogleTranslate();
  }, []);

  const handleLanguageChange = (lang: string) => {
    setSelectedLang(lang);
    const select = document.querySelector<HTMLSelectElement>(
      "select.goog-te-combo"
    );
    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
    setLanguagePopup(false);
  };


  return (
    <div className="bg-[#00445a] text-white flex flex-wrap md:flex-nowrap justify-between items-center px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium gap-3 sm:gap-4">
      {/* ---------- LEFT SECTION ---------- */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 w-full md:w-auto relative">
        <span className="font-semibold">Language:</span>
        <button
          onClick={() => setLanguagePopup(!languagePopup)}
          className="border border-white rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-bold"
        >
          {selectedLang.toUpperCase()}
        </button>

        {languagePopup && (
          <div
            ref={popupRef}
            className="absolute top-full left-0 mt-1 bg-white text-black rounded shadow-md z-50 flex flex-col"
          >
            <button
              onClick={() => handleLanguageChange("en")}
              className="px-4 py-1 hover:bg-gray-200"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange("bn")}
              className="px-4 py-1 hover:bg-gray-200"
            >
              Bengali
            </button>
            <button
              onClick={() => handleLanguageChange("hi")}
              className="px-4 py-1 hover:bg-gray-200"
            >
              Hindi
            </button>
          </div>
        )}

        {/* Font size buttons */}
        <div className="flex items-center gap-1 ml-1 sm:ml-2">
          <button className="bg-gray-400 text-white px-2 py-0.5 rounded text-[10px] sm:text-xs">
            A+
          </button>
          <button className="bg-gray-400 text-white px-2 py-0.5 rounded text-[10px] sm:text-xs">
            A−
          </button>
          <button className="bg-gray-400 text-white px-2 py-0.5 rounded text-[10px] sm:text-xs">
            A
          </button>
          <button
           
            className="bg-black text-white px-2 py-0.5 rounded text-[10px] sm:text-xs"
          >
            A
          </button>
        </div>

        <span className="text-sky-400 font-medium ml-2 sm:ml-3 hover:text-blue-300 hover:underline cursor-pointer whitespace-nowrap">
          Screen Reader
        </span>
      </div>

      {/* ---------- CENTER SECTION (MARQUEE TEXT) ---------- */}
      <div className="w-full md:flex-1 flex justify-center items-center order-3 md:order-none mt-1 md:mt-0 overflow-hidden">
        <span className="animate-marquee whitespace-nowrap text-xs sm:text-sm text-center px-2">
          বিনামূল্যে সরকারি পরিষেবা পেতে চলুন বাংলা সহায়তা কেন্দ্রে অথবা লগ ইন করুন{" "}
          <a
            href="https://www.bsk.wb.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 hover:underline cursor-pointer"
          >
            www.bsk.wb.gov.in
          </a>
        </span>
      </div>

      {/* ---------- RIGHT SECTION ---------- */}
      <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-3 w-full md:w-auto text-[11px] sm:text-sm">
        <FaClock className="text-red-400 text-sm sm:text-base" />
        <span className="font-semibold">Total Visitors:</span>
        <span className="font-normal">423,493</span>
      </div>

      {/* Hidden div for Google Translate */}
      <div id="google_translate_element" className="hidden"></div>
    </div>
  );
};

export default FirstTopBar;
