// PopupModal.tsx
import React from "react";

interface PopupModalProps {
  isOpen: boolean;
  title:string;
  onClose: () => void;
  children: React.ReactNode;
}

const PopupModalOwner: React.FC<PopupModalProps> = ({ isOpen,title, onClose, children }) => {
  if (!isOpen) return null;

  return (
   <div className="fixed inset-0 bg-white bg-opacity-20 flex justify-center items-center z-50">

  <div className="bg-white w-[70%] max-w-6xl max-h-[85vh] border border-1 border-black shadow-xl p-1 overflow-y-auto">
    
    {/* TABLE OR CHILD CONTENT HERE */}
    {children}

    <div className="flex justify-end mt-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
</div>

  );
};

export default PopupModalOwner;
