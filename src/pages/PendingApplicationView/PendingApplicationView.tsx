import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
// Tab routes
const routes = [
  { name: "CAF Information", path: "factory-caf-information" },
  { name: "Documents Informations", path: "factory-document-information" },
  { name: "Observations", path: "factory-irregularities-information" },
  { name: "Other Observations", path: "extra-irregularities-ad" },
  { name: "Forward", path: "factory-send-authority" },
];

const PendingApplicationView: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the active route from the URL
  const activeRoute = location.pathname.split("/").pop() || routes[0].path;

  const handleNavigation = (path: string) => {
    navigate(path); // this updates the URL and React Router will render the correct child route
  };

  return (
    <div className="min-h-screen bg-[#F1EEF3] m-1.5">
      {/* Header */}
      <div className="bg-white shadow-sm py-3 px-6 flex justify-between items-center">
  <div className="ml-auto flex items-center space-x-4">
    <Link to="/user/dashboard" className="text-gray-600 cursor-pointer hover:text-gray-800">Home</Link>
    <span className="text-gray-400">›</span>
    <span className="text-blue-600 font-medium">Dashboard</span>
  </div>
</div>


      {/* Tab Navigation */}
      <div className="bg-gray-100">
        <div className="flex justify-center pl-2 pr-2">
          {routes.map((route) => (
            <button
              key={route.path}
              onClick={() => handleNavigation(route.path)}
              className={`px-8 py-2 m-[10px] font-medium text-base transition-all relative${
                activeRoute === route.path
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-700"
              }`}
              style={
                activeRoute === route.path
                  ? {
  borderBottom: "4px solid #CC9171",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0px 4px 0px rgba(255, 132, 72, 0.5), 0px 5px 18px rgba(255, 132, 72, 0.05)"
}

                  : {}
              }
            >
              {route.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
     

        {/* Child Route Content */}
        <div className="bg-white shadow-sm rounded-b-lg border border-t-0 border-gray-200 p-6 mb-6">
          <Outlet />
        </div>
      </div>
    
  );
};

export default PendingApplicationView;
