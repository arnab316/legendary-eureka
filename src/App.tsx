
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./components/Login";
import SearchFactory from "./pages/SearchFactory/SearchFactory";
import CrossedOffFactories from "./pages/CrossedOffFactories/CrossedOffFactories";
import PendingApprovalList from "./pages/PendingApproval/PendingApprovalList";
function App() {
 

  return (
    <>
  <BrowserRouter>
      <Routes>
        {/* for public route */}
          <Route path="/login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/custom-factory-search" element={<SearchFactory />} />
          <Route path="/CROSSED_OFF" element={<CrossedOffFactories />} />
          <Route path="/pending-approvals" element={<PendingApprovalList />} />



          {/* <Route path="/about" element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
