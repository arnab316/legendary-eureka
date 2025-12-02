import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

const ApplicationHeader: React.FC = () => {
  const { selected: app, loading, error } = useSelector(
    (state: RootState) => state.selectedApplication
  );

  // Utility function for formatting dates safely
  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return "Not Applicable";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "Not Applicable";
    return d.toLocaleDateString("en-GB");
  };

  return (
    <div className="bg-white py-8 px-6 border-b border-gray-200">
      {/* Title */}
      <h1 className="text-2xl font-normal text-gray-800 text-center mb-6">
        Application for Approval of Plan
      </h1>

      {/* Company Name */}
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900">
          {app?.s_factory_name || "Not Applicable"}
        </h2>
      </div>

      {/* APPLICATION DETAILS */}
      {loading ? (
        <p className="text-center text-lg text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : (
        <div className="space-y-1 text-center">
          <p className="text-gray-800 text-lg">
            <span className="font-medium">Plan Approval Number:- </span>
            {app?.s_plan_approve_identification_number || "Not Applicable"}
          </p>

          <p className="text-gray-800 text-lg">
            <span className="font-medium">Registration Number:- </span>
            {app?.s_factory_reg_number || "Not Applicable"}
          </p>

          <p className="text-gray-800 text-lg">
            <span className="font-medium">License Number:- </span>
            {app?.s_license_no || "Not Applicable"}
          </p>

          <p className="text-gray-800 text-lg">
            <span className="font-medium">License Expiring on dated:- </span>
            {formatDate(app?.d_license_expiry)}
          </p>

          <p className="text-gray-800 text-lg font-bold">
            <span className="font-bold">Application submission Date:- </span>
            {formatDate(app?.dt_created_date)}
          </p>

          <p className="text-gray-800 text-lg font-bold">
            <span className="font-bold">Application re-submission Date:- </span>
            {formatDate(app?.dt_modification_date)}
          </p>
        </div>
      )}

      {/* Note Section */}
      <div className="mt-6 pt-4">
        <p className="text-base text-gray-700 text-center">
          <span className="font-bold">N:B.</span> All inputs are provided by
          applicant only. All inputs are to be verified by officials.
        </p>
      </div>
    </div>
  );
};

export default ApplicationHeader;
