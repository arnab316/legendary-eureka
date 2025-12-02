import ApplicationHeader from "@/components/PendingApplicationViewText";
import React, { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";

const Forward: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const [action, setAction] = useState("");

  return (
    <div className="bg-white p-4 rounded-md">

      {/* Header */}
      <ApplicationHeader />

      {/* Top Bold Text */}
      <p className="mb-4 font-semibold text-gray-900 text-lg">
        Application is submitted at AD end
      </p>

      {/* Buttons */}
      <div className="mb-6 flex space-x-3">
        <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 flex items-center space-x-2">
          <CgFileDocument size={20} />
          <span>View Notesheet</span>
        </button>
        <button className="border border-blue-500 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 flex items-center space-x-2">
          <CgFileDocument size={20} />
          <span>View Condition</span>
        </button>
      </div>

      {/* FORWARD ACCORDION */}
      <div className="border border-blue-700 rounded">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full bg-[#4771A7] text-white text-left px-4 py-2 font-semibold flex items-center"
        >
          {!expanded ? <MdArrowRight size={24} /> : <MdArrowDropDown size={24} />}
          <span className="ml-1">FORWARD</span>
        </button>

        {expanded && (
          <div className="p-4 space-y-6">

            {/* Necessary Action Dropdown */}
            <div>
              <label className="font-semibold text-gray-900 block mb-1">
                Necessary action to be taken---: <span className="text-red-600">*</span>
              </label>

              <select
                className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
                value={action}
                onChange={(e) => setAction(e.target.value)}
              >
                <option>- Select -</option>
                <option value="dd">Forward to Deputy Director</option>
                <option value="zone">Send to specific zone Inspector</option>
                
              </select>
            </div>

            {/* CONDITIONAL FIELDS: Only visible when "Send to specific zone Inspector" is selected */}
            {action === "zone" && (
              <>
                {/* Select Zone Field */}
                <div>
                  <label className="font-semibold text-gray-900 block mb-1">
                    Select Specific zone for this application: <span className="text-red-600">*</span>
                  </label>

                  <select className="w-full border border-gray-300 rounded px-3 py-2 bg-white">
  <option>- Select Zone -</option>
  <option>None of them</option>
  <option>CA</option>
  <option>CB</option>
  <option>CC</option>
  <option>CD</option>
  <option>CE</option>
  <option>CF</option>
  <option>CG</option>
  <option>CH</option>
  <option>CI</option>
  <option>CJ</option>
  <option>CK</option>
  <option>CL</option>
  <option>CM</option>
  <option>HA</option>
  <option>HB</option>
  <option>HC</option>
  <option>HD</option>
  <option>HE</option>
  <option>Asansol</option>
  <option>Barrackpore</option>
  <option>Durgapur</option>
  <option>Haldia</option>
  <option>Jalpaiguri-A</option>
  <option>Jalpaiguri-B</option>
  <option>Kalyani</option>
  <option>Serampore</option>
</select>

                </div>

                {/* Notesheet Textarea */}
                <div>
                  <label className="font-semibold text-gray-900 block mb-1">
                    Notesheet to AD of respective zone: <span className="text-red-600">*</span>
                  </label>

                  <textarea
                    rows={5}
                    className="w-full border border-gray-300 rounded px-3 py-2 resize-y"
                  />
                </div>

                {/* Submit button */}
                <div className="flex justify-end">
                  <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900">
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* Back to List Button */}
      <div className="mt-6">
        <button className="bg-[#09274C] text-white px-6 py-2 rounded shadow hover:bg-[#0b2f5d]">
          Back to list
        </button>
      </div>
    </div>
  );
};

export default Forward;
