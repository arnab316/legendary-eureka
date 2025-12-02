// src/api/irregularitiesApi.ts
import apiClient from "../apiClient";
import Cookies from "js-cookie";

export const submitIrregularitiesApi = async (payload: any) => {
  const token = Cookies.get("token");

  return apiClient.post("/user/extraIrregularitiesSubmit", payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
