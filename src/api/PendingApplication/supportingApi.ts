// src/api/PendingApplication/supportingApi.ts
import apiClient from "@/api/apiClient";

export const getSupportiveDocs = async (params: {
  service_id: number;
  factory_type_id: number;
  application_id: number;
  role_id: number;
  userid: number;
  reference_no: number;
  cafa_id: string;
}) => {
  return apiClient.get("/user/get-supportive_docs_approval_plan", {
    params,
  });
};
