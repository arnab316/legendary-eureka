// src/api/occupierApi.ts
import apiClient from "../apiClient";
import Cookies from "js-cookie";

export const getOccupierDetails = async (params: {
  app_id: number;
  personnel_type: string;
}) => {
  const token = Cookies.get("token");

  return apiClient.get("/user/get_personnel_details", {
    params,
    headers: {
      Authorization: `${token}`,
    },
  });
};
