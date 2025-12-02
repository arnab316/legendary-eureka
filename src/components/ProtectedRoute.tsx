import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  const token = Cookies.get("token");
console.log(token);
  // If token does NOT exist, redirect to login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // If token exists, allow access
  return <Outlet />;
};

export default ProtectedRoute;
