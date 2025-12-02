// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import type { RootState, AppDispatch } from "@/store";
// import { fetchSupportiveDocs } from "@/store/feature/PendingApplication/supportiveDocsSlice";
// import { fetchApplicationById } from "@/store/feature/PendingApplication/selectedApplicationSlice";
// import { getStatus } from "@/utils/index";
// import Cookies from "js-cookie";
// import apiClient from "@/api/apiClient";
// import { Loader2 } from "lucide-react";
// import ApplicationHeader from "@/components/PendingApplicationViewText";

// const DocumentsInformations: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const navigate = useNavigate();
  
//   const { selected: app, loading: appLoading } = useSelector(
//     (state: RootState) => state.selectedApplication
//   );

//   const { docs, docsLoading, docsError } = useSelector(
//     (state: RootState) => state.supportiveDocs
//   );

//   const [checkedDocs, setCheckedDocs] = useState<{ [key: number]: boolean }>({});
//   const [checkAll, setCheckAll] = useState(false);
//   const [saveLoading, setSaveLoading] = useState(false);

//   // Fetch application data on mount/refresh
//   useEffect(() => {
//     const stored = getStatus();
//     const roleId: any = Cookies.get("roleId");
    
//     if (!app && stored) {
//       dispatch(fetchApplicationById({ 
//         username: "robi_ins", 
//         filter: stored.filter, 
//         id: stored.id,
//         n_remark_by_roleid: Number(atob(roleId))
//       }));
//     }
//   }, [dispatch, app]);

//   // Fetch supportive docs when app is available
// useEffect(() => {
//   if (app) {
//     const roleId: any = Cookies.get("roleId");

//     dispatch(
//       fetchSupportiveDocs({
//         cafa_id: app.s_plan_approve_identification_number,
//         id: app.n_id,
//         n_remark_by_roleid: Number(atob(roleId)),
//       })
//     );
//   }
// }, [dispatch, app]);

//   // Update row checkboxes when "Check All" toggles
//   useEffect(() => {
//     if (docs.length > 0) {
//       const updated = docs.reduce((acc, _, n_id) => {
//         acc[n_id] = checkAll;
//         return acc;
//       }, {} as { [key: number]: boolean });

//       setCheckedDocs(updated);
//     }
//   }, [checkAll, docs]);

//   const handleSingleCheck = (index: number) => {
//     setCheckedDocs((prev) => {
//       const updated = { ...prev, [index]: !prev[index] };

//       // If ANY unchecked → uncheck All
//       const allChecked = docs.length > 0 && Object.values(updated).every((v) => v === true);
//       setCheckAll(allChecked);

//       return updated;
//     });
//   };

//   // Handle check all toggle
//   const handleCheckAll = () => {
//     setCheckAll((prev) => !prev);
//   };

//   // Get checked documents for saving
//   const getCheckedDocuments = () => {
//     return docs
//       .filter((_, index) => checkedDocs[index])
//       .map((doc) => doc.s_document_name);
//   };

//   // Handle save
//   const handleSave = async () => {
//     if (!app) return;

//     const checkedDocuments = getCheckedDocuments();
//     console.log('Saving checked documents:', checkedDocuments);

//     try {
//       setSaveLoading(true);

//       const token = Cookies.get("token");
//       const roleId: any = Cookies.get("roleId");

//       if (!token) throw new Error("No authentication token found");

//       // Build request body - adjust according to your API requirements
//       const requestBody = {
//         u_id: app.n_uid,
//         verified_list: checkedDocuments,
//         n_service_id: app.n_service_id,
//         n_factory_typeid: app.n_factory_typeid,
//         n_id: app.cafa_id,
//         n_reference_number: app.n_reference_number,
//         n_rid: Number(atob(roleId)),
//         cafa_id:app.cafa_id,
//       };

//       console.log('Request body:', requestBody);

//       // TODO: Update the endpoint according to your API
//       const response = await apiClient.post(
//         '/user/verify-supportive_docs_approval_plan',
//         requestBody,
//         { headers: { Authorization: `${token}` } }
//       );

//       if (response.data.success) {
//         console.log('Save successful:', response.data);
//         alert('Documents verified successfully!');
//       } else {
//         throw new Error(response.data.message || 'Failed to save documents');
//       }
//     } catch (error: any) {
//       console.error('Save error:', error);
//       alert(error.message || 'Failed to save documents');
//     } finally {
//       setSaveLoading(false);
//     }
//   };

//   // Handle back
//   const handleBack = () => {
//     navigate(-1);
//   };

//   // Loading state for app
//   if (appLoading) {
//     return (
//       <div className="p-6 flex items-center justify-center min-h-[300px]">
//         <div className="text-center">
//           <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-2" />
//           <p className="text-gray-600">Loading application data...</p>
//         </div>
//       </div>
//     );
//   }

//   // No app data state
//   if (!app) {
//     return (
//       <div className="p-6 flex items-center justify-center min-h-[300px]">
//         <div className="text-center">
//           <p className="text-gray-600 mb-4">No application data found.</p>
//           <button 
//             onClick={handleBack}
//             className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors"
//           >
//             Back to list
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-6">
//       <ApplicationHeader />
//       <h2 className="text-xl font-semibold mb-4">
//         Supportive Documents According to Application
//       </h2>

//       {docsLoading && (
//         <div className="flex items-center gap-2 text-blue-600 mb-4">
//           <Loader2 className="w-5 h-5 animate-spin" />
//           <span>Loading documents...</span>
//         </div>
//       )}
//       {docsError && <p className="text-red-600 mb-4">{docsError}</p>}

//       {/* Table */}
//       <div className="overflow-x-auto border rounded shadow bg-white">
//         <table className="w-full border-collapse">
//           <thead className="bg-[#0c4562] text-white">
//             <tr>
//               <th className="p-3 border text-left">S.No</th>
//               <th className="p-3 border text-left">Document Name</th>
//               <th className="p-3 border text-center">
//                 <div className="flex items-center justify-center gap-2">
//                   <span>Action</span>
//                   <input
//                     type="checkbox"
//                     checked={checkAll}
//                     onChange={handleCheckAll}
//                     className="w-4 h-4 cursor-pointer"
//                     disabled={docs.length === 0}
//                   />
//                 </div>
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {docs.length === 0 && !docsLoading ? (
//               <tr>
//                 <td colSpan={3} className="p-4 text-center text-gray-500">
//                   No documents found
//                 </td>
//               </tr>
//             ) : (
//               docs.map((doc, index) => (
//                 <tr key={index} className="border-b hover:bg-gray-50">
//                   <td className="p-3 border">{index + 1}</td>
//                   <td className="p-3 border">{doc.s_document_name}</td>
//                   <td className="p-3 border text-center">
//                     <input
//                       type="checkbox"
//                       checked={checkedDocs[index] || false}
//                       onChange={() => handleSingleCheck(doc.n_id)}
//                       className="w-4 h-4 cursor-pointer"
//                     />
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Action Buttons */}
//       <div className="mt-4 flex justify-between items-center">
//         <button 
//           onClick={handleBack}
//           className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
//         >
//           Back to list
//         </button>
        
//         <button 
//           onClick={handleSave}
//           disabled={saveLoading || docs.length === 0}
//           className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//         >
//           {saveLoading && <Loader2 className="w-4 h-4 animate-spin" />}
//           {saveLoading ? 'Saving...' : 'Save'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DocumentsInformations;

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import ApplicationHeader from "@/components/PendingApplicationViewText";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import apiClient from "@/api/apiClient";

/* ----------------------------------------------
   STATIC JSON DATA
---------------------------------------------- */
const staticData = {
  user: {
    u_id: 341,
    n_service_id: 4,
    n_factory_typeid: 1,
    n_id: 14,
    n_reference_number: 14,
    n_rid: 9,
    cafa_id: "CAF250A759209",
  },

  documents: [
    {
      id: 25,
      document_name: "Factory Layout Plan",
      file_path: "/Documents/Uploads/CAF250A759209/factory-layout.pdf",
      checked: true,
    },
    {
      id: 27,
      document_name: "Machinery List",
      file_path: "/Documents/Uploads/CAF250A759209/machinery-list.pdf",
      checked: false,
    },
  ],
};

const DocumentsInformations: React.FC = () => {
  const navigate = useNavigate();

  const [docs] = useState(staticData.documents);
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});
  const [checkAll, setCheckAll] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  /* ---------------------------------------------------
     SET DEFAULT CHECK VALUES FROM STATIC JSON
  --------------------------------------------------- */
  useEffect(() => {
    const initial = docs.reduce((acc, doc) => {
      acc[doc.id] = doc.checked;
      return acc;
    }, {} as Record<number, boolean>);

    setCheckedDocs(initial);
    setCheckAll(Object.values(initial).every(Boolean));
  }, [docs]);

  /* ---------------------------------------------------
     Toggle single checkbox
  --------------------------------------------------- */
  const handleSingleCheck = (id: number) => {
    setCheckedDocs((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      setCheckAll(Object.values(updated).every(Boolean));
      return updated;
    });
  };

  /* ---------------------------------------------------
     Toggle Check All
  --------------------------------------------------- */
  const handleCheckAll = () => {
    const value = !checkAll;
    setCheckAll(value);

    const updated = docs.reduce((acc, doc) => {
      acc[doc.id] = value;
      return acc;
    }, {} as Record<number, boolean>);

    setCheckedDocs(updated);
  };

  /* ---------------------------------------------------
     FIXED: API PAYLOAD EXACTLY AS BACKEND EXPECTS
  --------------------------------------------------- */
  const buildPayload = () => {
    const verifiedList = docs
      .filter((doc) => checkedDocs[doc.id])
      .map((doc) => doc.id);

    return {
      u_id: staticData.user.u_id,
      verified_list: verifiedList,
      n_service_id: staticData.user.n_service_id,
      n_factory_typeid: staticData.user.n_factory_typeid,
      n_id: staticData.user.n_id,
      n_reference_number: staticData.user.n_reference_number,
      n_rid: staticData.user.n_rid,
      cafa_id: staticData.user.cafa_id,
    };
  };

  /* ---------------------------------------------------
     SAVE → POST API
  --------------------------------------------------- */
  const handleSave = async () => {
    const payload = buildPayload();
    console.log("PAYLOAD SENT:", payload);

    try {
      setSaveLoading(true);

      const token = Cookies.get("token");
      if (!token) throw new Error("Authentication token missing");

      const response = await apiClient.post(
        "/user/verify-supportive_docs_approval_plan",
        payload,
        { headers: { Authorization: token } }
      );

      if (response.data.success) {
        alert("Documents successfully verified!");
      } else {
        alert(response.data.message || "Failed to save");
      }
    } catch (err: any) {
      setSaveLoading(false);
    }
  };

  const handleBack = () => navigate(-1);

  /* ---------------------------------------------------
     UI
  --------------------------------------------------- */
  return (
    <div className="p-6">
      <ApplicationHeader />

      <h2 className="text-xl font-semibold mb-4">
        Supportive Documents According to Application
      </h2>

      <div className="overflow-x-auto border rounded shadow bg-white">
        <table className="w-full border-collapse">
          <thead className="bg-[#0c4562] text-white">
            <tr>
              <th className="p-3 border">S.No</th>
              <th className="p-3 border text-left">Document Name</th>
              <th className="p-3 border text-center">
                <div className="flex justify-center items-center gap-2">
                  <span>Action</span>
                  <input
                    type="checkbox"
                    checked={checkAll}
                    onChange={handleCheckAll}
                    className="w-4 h-4 cursor-pointer"
                  />
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {docs.map((doc, index) => (
              <tr key={doc.id} className="hover:bg-gray-50 border-b">
                <td className="p-3 border">{index + 1}</td>
                <td className="p-3 border">{doc.document_name}</td>
                <td className="p-3 border text-center">
                  <input
                    type="checkbox"
                    checked={checkedDocs[doc.id] || false}
                    onChange={() => handleSingleCheck(doc.id)}
                    className="w-4 h-4 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handleBack}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back to list
        </button>

        <button
          onClick={handleSave}
          disabled={saveLoading}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 disabled:opacity-50 flex items-center gap-2"
        >
          {saveLoading && <Loader2 className="w-4 h-4 animate-spin" />}
          {saveLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </div>
  );
};

export default DocumentsInformations;

