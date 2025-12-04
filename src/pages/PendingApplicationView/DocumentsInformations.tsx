import React, { useEffect, useState } from "react";
import { Loader2, ExternalLink } from "lucide-react";
import ApplicationHeader from "@/components/PendingApplicationViewText";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import apiClient from "@/api/apiClient";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchSupportiveDocs } from "@/store/feature/PendingApplication/supportiveDocsSlice";
import type { RootState, AppDispatch } from "@/store/index";

const DocumentsInformations: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { selected: app, loading, error } = useSelector(
    (state: RootState) => state.selectedApplication
  );

  /* -----------------------------------------
     STATIC USER INPUT (Replace later)
  ----------------------------------------- */
  const roleId = Cookies.get("roleId")
    ? atob(Cookies.get("roleId") as string)
    : null;
  const roleIdUser = roleId ? Number(roleId) : 0;
  const params = {
    service_id: app.n_service_id,
    factory_type_id: app.n_factory_typeid,
    application_id: app.n_tm_factory_id,
    role_id: roleIdUser,
    userid: app.n_uid,
    reference_no: app.n_reference_number,
    cafa_id:
      app.s_plan_approve_identification_number ||
      app.s_factory_plan_approval_number,
  };

  /* -----------------------------------------
     REDUX STATE - PROPERLY TYPED
  ----------------------------------------- */
  const { docs, docsLoading, docsError } = useSelector(
    (state: RootState) => state.supportiveDocs
  );

  /* -----------------------------------------
     LOCAL CHECKBOX STATE
  ----------------------------------------- */
  const [checkedDocs, setCheckedDocs] = useState<Record<number, boolean>>({});
  const [checkAll, setCheckAll] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);

  /* -----------------------------------------
     FETCH DOCUMENTS FROM API (Thunk)
  ----------------------------------------- */
  useEffect(() => {
    dispatch(fetchSupportiveDocs(params));
  }, [dispatch]);

  /* -----------------------------------------
     Once docs loaded → Initialize checkbox state
  ----------------------------------------- */
  useEffect(() => {
    if (docs.length > 0) {
      const initial = docs.reduce((acc: Record<number, boolean>, doc) => {
        acc[doc.n_doc_master_id] = doc.isChecked;
        return acc;
      }, {});
      setCheckedDocs(initial);
      setCheckAll(Object.values(initial).every(Boolean));
    }
  }, [docs]);

  /* -----------------------------------------
     Toggle single checkbox (only if not disabled)
  ----------------------------------------- */
  const handleSingleCheck = (id: number, isDisabled: boolean) => {
    if (isDisabled) return; // Don't allow checking if disabled

    setCheckedDocs((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      console.log("updated ",updated);
      
      setCheckAll(Object.values(updated).every(Boolean));
      return updated;
    });
  };

  /* -----------------------------------------
     Toggle Check All (only for non-disabled docs)
  ----------------------------------------- */
  const handleCheckAll = () => {
    const value = !checkAll;
    setCheckAll(value);

    const updated = docs.reduce((acc: Record<number, boolean>, doc) => {
      // Only update if not disabled
      if (!doc.disable) {
        acc[doc.n_doc_master_id] = value;
      } else {
        acc[doc.n_doc_master_id] = checkedDocs[doc.n_doc_master_id] || false;
      }
      return acc;
    }, {});
    setCheckedDocs(updated);
  };

  /* -----------------------------------------
     Handle Document Click - Open file if path exists
  ----------------------------------------- */
  const handleDocumentClick = (filePath: string | null) => {
    if (!filePath) return;

    // Convert Windows path to URL-friendly format
    // Example: C:\Users\user\Documents\Uploads\file.pdf
    // You'll need to configure this based on your server setup
    const fileUrl = `/api/files/${encodeURIComponent(filePath)}`;
    
    // Open in new window/tab
    window.open(fileUrl, "_blank");
  };

  /* -----------------------------------------
     Build SAVE Payload
  ----------------------------------------- */
  const buildPayload = () => {
    const verifiedList = docs
      .filter((doc) => checkedDocs[doc.n_doc_master_id])
      .map((doc) => doc.n_doc_master_id);

    return {
      u_id: params.userid,
      verified_list: verifiedList,
      n_service_id: params.service_id,
      n_factory_typeid: params.factory_type_id,
      n_id: params.application_id,
      n_reference_number: params.reference_no,
      n_rid: params.role_id,
      cafa_id: params.cafa_id,
    };
  };

  /* -----------------------------------------
     SAVE API CALL (Not Redux — only a POST action)
  ----------------------------------------- */
  const handleSave = async () => {
    const payload = buildPayload();
    console.log("PAYLOAD SENT:", payload);

    try {
      setSaveLoading(true);

      const token = Cookies.get("token");
      if (!token) throw new Error("Token missing");

      const response = await apiClient.post(
        "/user/verify-supportive_docs_approval_plan",
        payload,
        { headers: { Authorization: token } }
      );

      setSaveLoading(false);

      if (response.data.success) {
        alert("Documents successfully verified!");
      } else {
        alert(response.data.message || "Failed to save");
      }
    } catch (err) {
      setSaveLoading(false);
      console.error("Error while saving:", err);
      alert("Error while saving");
    }
  };

  const handleBack = () => navigate(-1);

  /* -----------------------------------------
     UI
  ----------------------------------------- */
  return (
    <div className="p-6">
      <ApplicationHeader />

      <h2 className="text-xl font-semibold mb-4">
        Supportive Documents According to Application
      </h2>

      {/* ERROR MESSAGE */}
      {docsError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          Error: {docsError}
        </div>
      )}

      {/* LOADING UI */}
      {docsLoading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="w-8 h-8 animate-spin text-teal-600" />
        </div>
      ) : docs.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          No documents found
        </div>
      ) : (
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
              {docs.map((doc, index) => {
                const hasFile = doc.s_file_path && doc.s_file_path.trim() !== "";
                // const isDisabled = doc.disable || false;
               const isDisabled = true
                return (
                  <tr key={doc.n_doc_master_id} className="hover:bg-gray-50 border-b"
                  
                  >
                    <td className="p-3 border">{index + 1}</td>
                    
                    {/* Document Name - Clickable if file exists */}
                    <td className="p-3 border">
                      {hasFile ? (
                        <button
                          onClick={() => handleDocumentClick(doc.s_file_path)}
                          className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2 transition-colors"
                        >
                          <span>{doc.s_document_name}</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <span className="text-gray-700">
                          {doc.s_document_name}
                        </span>
                      )}
                    </td>

                    {/* Checkbox - Disabled if disable flag is true */}
                    <td className="p-3 border text-center">
                      {/* <input
                        type="checkbox"
                        checked={checkedDocs[doc.n_id.n_doc_master_id] || false}
                        onChange={() => handleSingleCheck(doc.n_id.n_doc_master_id, isDisabled)}
                        disabled={isDisabled}
                        className={`w-4 h-4 ${
                          !isDisabled
                            ? "cursor-not-allowed opacity-50"
                            : "cursor-pointer"
                        }`}
                        title={isDisabled ? "This document cannot be modified" : ""}
                      /> */}
                      <input
  type="checkbox"
  checked={checkedDocs[doc.n_doc_master_id] || false}
  onChange={() => handleSingleCheck(doc.n_doc_master_id, false)}
  className="w-4 h-4 cursor-pointer"
/>


                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* BUTTONS */}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handleBack}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Back to list
        </button>

        <button
          onClick={handleSave}
          disabled={saveLoading || docs.length === 0}
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