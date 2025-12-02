import ApplicationHeader from "@/components/PendingApplicationViewText";
import React, { useState,useEffect } from "react";
import PopupModal from "@/components/PopupModel/PopupModal";
import { CgFileDocument } from "react-icons/cg";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { getStatus } from "@/utils/index";
import apiClient from "@/api/apiClient";
import { submitIrregularities } from "@/store/feature/PendingApplication/otherObservationSlice";
import { fetchApplicationById } from "@/store/feature/PendingApplication/selectedApplicationSlice";
import {fetchExtraLoad} from "@/store/feature/PendingApplication/loadExtraSlice"
const OtherObservations: React.FC = () => {
  const [noteExpanded, setNoteExpanded] = useState(true);
  const [listExpanded, setListExpanded] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const [saveLoading, setSaveLoading] = useState(false);
  // slice state
  const { loading, success, error } = useSelector(
    (state: RootState) => state.irregularities
  );

  // form states
  const [comment, setComment] = useState("");
  const [option, setOption] = useState("recommended");

  // get your application details from Redux
  const { selected: app, loading: appLoading } = useSelector(
    (state: RootState) => state.selectedApplication
  );
  useEffect(() => {
    const stored = getStatus();
    const roleId: any = Cookies.get("roleId");
    
    if (!app && stored) {
      dispatch(fetchApplicationById({ 
        username: "robi_ins", 
        filter: stored.filter, 
        id: stored.id,
        n_remark_by_roleid: Number(atob(roleId))
      }));
    }
  }, [dispatch, app]);






  // ---------- SUBMIT HANDLER ----------
 const handleSubmit = async () => {
  if (!app) {
    alert("Application data not loaded.");
    return;
  }

  try {
    setSaveLoading(true); // optional: if you want loading state

    const token = Cookies.get("token");
    const roleId = Cookies.get("roleId");
const userId = Cookies.get("userId");
const userName = Cookies.get("userName");
    if (!token) throw new Error("No authentication token found");

    const payload = {
      n_service_id: app.n_service_id,
      n_factory_typeid: app.n_factory_typeid,
      n_id: app.cafa_id,
      n_reference_number: app.n_reference_number,
      s_is_chemical: app.s_is_chemical,
      option,
      comments_irregularities_other: comment,
      n_uid:userId ? Number(atob(userId)) : 0,
      remark_by_name: userName ? atob(userName) : "",
      n_rid: roleId ? Number(atob(roleId)) : 0,
    };
       
    console.log("Submitting payload:", payload);

    const response = await apiClient.post(
      "/user/extraIrregularitiesSubmit",
      payload,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (response.data.success) {
      console.log("Submit successful:", response.data);
      alert("Irregularities submitted successfully!");
    } else {
      throw new Error(response.data.message || "Failed to submit irregularities");
    }

  } catch (error: any) {
    console.error("Submit error:", error);
    alert(error.message || "Failed to submit irregularities");
  } finally {
    setSaveLoading(false); // optional
  }
};




useEffect(() => {
  if (!app) return;   // <-- ADD THIS (prevents null)

  dispatch(fetchExtraLoad({
    n_service_id: app.n_service_id,
    n_factory_typeid: app.n_factory_typeid,
    n_id: app.cafa_id,
    n_reference_number: app.n_reference_number
  }));


}, [dispatch, app]);


const {data} = useSelector(
  (state: RootState) => state.extraLoad
);

useEffect(() => {
  if (data) console.log("Data from Redux:", data);
  console.log(data?.irregularities)
}, [data]);







  const [openModal, setOpenModal] = useState(false);












  return (
    <div className="bg-white p-2 rounded-md">
      <ApplicationHeader />

      {/* Status Text */}
      <p className="mb-3 font-semibold text-gray-800">
        Application is submitted at AD end
      </p>



{
  openModal && (
    <PopupModal
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
      title="View Plan Condition"
     
    >
      <div className="max-h-[70vh] overflow-y-auto">
        {/* Header Section */}
        <div className="bg-[#158E94] text-white p-3 font-semibold">
          The plans will be approved subject to the following conditions ::
        </div>

        {/* Condition 1 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            1. Approval of the design and the site or situation of the septic tank. latrines shall be obtained from the Chief Engineer, Public Health Engineering, Government of West Bengal.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-4"></div>

        {/* Condition 2 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            2. Approval shall be obtained from the West Bengal Pollution Control Board and the Public Health ENgineering Directorate, Government of West Bengal in respect of the arrangement for disposal of trade waste and effluents (including atmospheric emission).
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-4"></div>

        {/* Condition 3 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            3. Approval shall be obtained from Local authority (Municipal Corporation / Municipality, Notified Area, Authority / Anchal Panchayat etc.) in respect of safe design and construction of the buildings/sheds/structures etc.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-4"></div>

        {/* Condition 4 */}
        <div className="bg-white p-1">
          <p className="text-gray-900">
            4. Adequate ventilation by circulation of the fresh air, adequate means of escape in case of fire, safe means of access to every place of work, adequate fire fighting arrangement, effective arrangement to prevent escape of dust/fumesmoke shall be provided.
          </p>
        </div>

        {/* Divider */}
        <div className="bg-[#158E94] h-2"></div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#158E94] text-white">
                <th className="p-3 text-left font-semibold border-r border-teal-500">Sl. N</th>
                <th className="p-3 text-left font-semibold border-r border-teal-500">Designation</th>
                <th className="p-3 text-left font-semibold border-r border-teal-500">Name</th>
                <th className="p-3 text-left font-semibold border-r border-teal-500">Conditions</th>
                <th className="p-3 text-left font-semibold">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="p-3 border-r border-gray-300">0</td>
                <td className="p-3 border-r border-gray-300"></td>
                <td className="p-3 border-r border-gray-300"></td>
                <td className="p-3 border-r border-gray-300"></td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </PopupModal>
  )
}
      








      {/* Buttons */}
      <div className="mb-4 space-x-2 flex">
        <button className="border-2 border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 flex items-center space-x-1">
          <CgFileDocument size={20} />
          <span>View Notesheet</span>
        </button>
        <button  onClick={() => setOpenModal(true)} className="border-2 border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-50 flex items-center space-x-1">
          <CgFileDocument size={20} />
          <span>View Condition</span>
        </button>
      </div>

      {/* WRITE A NOTE */}
      <div className="mb-6 border border-blue-700 rounded">
        <button
          onClick={() => setNoteExpanded(!noteExpanded)}
          className="w-full bg-[#4771A7] text-white text-left px-4 py-2 font-semibold focus:outline-none flex"
        >
          {!noteExpanded ? (
            <MdArrowRight size={24} />
          ) : (
            <MdArrowDropDown size={24} />
          )}
          WRITE A NOTE
        </button>

        {noteExpanded && (
          <div className="p-4 space-y-4">
            {/* RADIO OPTIONS */}
            <div>
              <p className="font-semibold mb-1">
                (i) Please select any one <span className="text-red-600">*</span>
              </p>
              <div className="flex items-center space-x-6">
                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="recommendation"
                    value="recommended"
                    checked={option === "recommended"}
                    onChange={() => setOption("recommended")}
                  />
                  <span>Recommended</span>
                </label>

                <label className="inline-flex items-center space-x-2">
                  <input
                    type="radio"
                    name="recommendation"
                    value="not-recommended"
                    checked={option === "not-recommended"}
                    onChange={() => setOption("not-recommended")}
                  />
                  <span>Not Recommended</span>
                </label>
              </div>

              <p className="mt-2 font-bold text-sm">
                If you wish to process with irregularities, select NOT RECOMMENDED.
              </p>
            </div>

            {/* TEXTAREA */}
            <div>
              <label className="font-semibold mb-1 block">
                (ii) Other Observation <span className="text-red-600">*</span>
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 resize-y"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <p className="text-red-600 font-semibold text-sm">
              *N.B.: This observation will be added to the observation library.
            </p>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 disabled:bg-gray-500"
            >
              {loading ? "Submitting..." : "Add Observations"}
            </button>

            {success && (
              <p className="text-green-600 font-semibold">Irregularities submitted successfully.</p>
            )}
            {error && <p className="text-red-600 font-semibold">{error}</p>}
          </div>
        )}
      </div>

      {/* LIST OF OTHER OBSERVATIONS */}
      <div className="border border-blue-700 rounded">
        <button
          onClick={() => setListExpanded(!listExpanded)}
          className="w-full bg-[#4771A7] text-white text-left px-4 py-2 font-semibold flex"
        >
          {!listExpanded ? (
            <MdArrowRight size={24} />
          ) : (
            <MdArrowDropDown size={24} />
          )}
          LIST OF OTHER OBSERVATION
        </button>

       {!listExpanded && (
  <div className="p-4 overflow-x-auto">
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-teal-700 text-white">
          <th className="px-3 py-2 border border-teal-700">SL No</th>
          <th className="px-3 py-2 border border-teal-700">Other Observation</th>
          <th className="px-3 py-2 border border-teal-700">Observation by</th>
          <th className="px-3 py-2 border border-teal-700">Date</th>
          <th className="px-3 py-2 border border-teal-700">Observation Type</th>
        </tr>
      </thead>

      <tbody>
        {/* If NO DATA */}
        {!data || data.length === 0 ? (
          <tr className="bg-gray-100 text-center text-gray-600">
            <td colSpan={5} className="py-6">
              No data found!
            </td>
          </tr>
        ) : (
          /* Dummy Data Rows */
          data?.irregularities.map((item: any, index: number) => (
            <tr key={index} className="text-center border-b">
              <td className="px-3 py-2">{index + 1}</td>
              <td className="px-3 py-2">{item.s_irregularities}</td>
              <td className="px-3 py-2">{item.observationBy || "Admin"}</td>
              <td className="px-3 py-2">
                {new Date(item.dt_modified_at).toLocaleDateString()}
              </td>
              <td className="px-3 py-2">{item.s_identity_flag}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
)}

      </div>
    </div>
  );
};

export default OtherObservations;
