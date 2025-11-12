
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./components/Login";
import SearchFactory from "./pages/SearchFactory/SearchFactory";
import CrossedOffFactories from "./pages/CrossedOffFactories/CrossedOffFactories";
import PendingApprovalList from "./pages/PendingApproval/PendingApprovalList";
import OtherTypeLetterReport from "./pages/OtherTypeLetterReport/OtherTypeLetterReport";
import NoticeOfAccident from "./pages/NoticeOfAccident/NoticeOfAccident";
import ProtectedRoute from "./components/ProtectedRoute";
import Scrap from "./pages/scrap/Scrap";

function App() {

  return (
    <>
  <BrowserRouter>
      <Routes>
        {/* for public route */}
          <Route path="/login" element={<Login />} />
          {/* for protected Routes */}
          <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/custom-factory-search" element={<SearchFactory />} />
          <Route path="/CROSSED_OFF" element={<CrossedOffFactories />} />
          <Route path="/pending-approvals" element={<PendingApprovalList />} />
          <Route path="/other-type-letr-rept-ord" element={<OtherTypeLetterReport />} />
          <Route path="/inspector-form18-list" element={<NoticeOfAccident />} />
          {/* for testing enviroment */}
          <Route path="/scrap" element={<Scrap />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
