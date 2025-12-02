import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { fetchForwardHistory } from "@/store/feature/ApplicationStatus/ApplicationStatusSlice";
import { useLocation } from "react-router-dom";

const ForwardHistoryComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();
  const { applicationNo, referenceNo, serviceId }: any = location.state || {};

  const { data, loading, error }: any = useSelector(
    (state: RootState) => state.forwardHistory
  );

  useEffect(() => {
    dispatch(
      fetchForwardHistory({
        application_id: applicationNo,
        reference_no: referenceNo,
        service_id: serviceId,
      })
    );
  }, [dispatch, applicationNo, referenceNo, serviceId]);

  // Correct data extraction
  const historyList = data?.data || [];





const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const daySuffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";

  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  const time = date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${day}${daySuffix} ${month} ${year}, ${time}`;
};







  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-3">Forward History</h1>

      {loading && <p>Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-[#158E94] text-white">
            <th className="border p-2">Sl. No</th>
            <th className="border p-2">Forwarded By</th>
            <th className="border p-2">Remarks</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          {historyList.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center p-3">
                No data available
              </td>
            </tr>
          ) : (
            historyList.map((item: any, index: number) => (
              <tr key={item.n_id}>
                <td className="border p-2">{index + 1}</td>

                <td className="border p-2">
                  {item.s_remark_by_name}
                </td>

                <td className="border p-2">
                  {item.s_remarks}
                </td>

                <td className="border p-2">
                  {formatDate(item.dt_sending_time)}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ForwardHistoryComponent;
