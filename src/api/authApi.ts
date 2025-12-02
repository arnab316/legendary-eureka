import apiClient from './apiClient';
interface LoginPayload {
  username: string;
  password: string;
}

export interface User {
  lastname: string;
  firstname: string;
  email(email: any): string;
  id: number;
  username: string;
  role_id:number;

}

export interface LoginResponse {
  status: number;
  message: string;
  user?: User;
  token?: string;
}

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const { data } = await apiClient.post<LoginResponse>("/user/login", payload);
    // console.log(data)
    // Defensive validation
    if (data.status !== 200 || !data.user || !data.token) {
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error: any) {
    console.error("Login API Error:", error);

    // Handle known API error shapes
    const message =
      error.response?.data?.message ||
      error.message ||
      "Something went wrong while logging in.";

    return {
      status: error.response?.status || 500,
      message,
    };
  }
};

export const logout = async (): Promise<{ success: boolean; message: string }> => {
  try {
    await apiClient.post("/user/logout");
    return { success: true, message: "Logged out successfully" };
  } catch (error: any) {
    console.error("Logout API Error:", error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        "Something went wrong while logging out.",
    };
  }
};