// src/api/supportingApi.ts
import apiClient from "../apiClient";

export const getSupportiveDocs = async (params: {
  cafa_id: string;
  id: number;
  n_remark_by_roleid: number;
}) => {
  return apiClient.get("/user/get-supportive_docs_approval_plan", { params });
};
