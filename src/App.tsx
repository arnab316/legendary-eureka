import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import FirstTopBar from "./components/First-topbar";
import SecTopBar from "./components/Second-topbar";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Rti from "./pages/Rti";
import Faq from "./pages/Faq";
import Zone from "./pages/Zone";
import HomeFactories from "./pages/HomeFatories";
import EmergencyResponseProcedure from "./pages/EmergencyResponseProcedure";
import SilicosisPolicyApplicationForm from "./pages/SilicosisPolicyApplicationForm";
import ActsAndRules from "./pages/ActsAndRules";
import MainLayout from "@/layouts/MainLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

import SearchFactory from "./pages/SearchFactory/SearchFactory";
import CrossedOffFactories from "./pages/CrossedOffFactories/CrossedOffFactories";
import PendingApprovalList from "./pages/PendingApproval/PendingApprovalList";
import OtherTypeLetterReport from "./pages/OtherTypeLetterReport/OtherTypeLetterReport";
import NoticeOfAccident from "./pages/NoticeOfAccident/NoticeOfAccident";
import ProtectedRoute from "./components/ProtectedRoute";
import Scrap from "./pages/scrap/Scrap";
import RegistrationList from "./pages/Dashboard-registration/RegistrationList";
import UnderProcessRegistrationList from "./pages/Dashboard-registration/UnderProcessRegistrationList";
import BackToRegistration from "./pages/Dashboard-registration/BackToRegistration";
import IssuedApplication from "./pages/Dashboard-registration/IssuedApplication";
import RejectedApplication from "./pages/Dashboard-registration/RejectedApplication";
import PendingApplicationRenewal from "./pages/Dashboard-renewal/PendingApplication";
import UnderProcessApplicationRenewal from "./pages/Dashboard-renewal/UnderProcessApplication";
import BackForRectificationRenewal from "./pages/Dashboard-renewal/BackForRectification";
import IssuedApplicationRenewal from "./pages/Dashboard-renewal/IssuedApplication";
import RejectedApplicationRenewal from "./pages/Dashboard-renewal/RejectedApplication";
import AutoRenewalApplicationRenewal from "./pages/Dashboard-renewal/AutoRenewalApplication";
import {useAutoLogout} from '@/hooks/useAutoLogout'
import ForgotPassword from "./pages/ForgotPassword";
import Feedback from "./components/Feedback";
import PendingApplicationView from "./pages/PendingApplicationView/PendingApplicationView";
import DocumentsInformations from "./pages/PendingApplicationView/DocumentsInformations";
import Observations from "./pages/PendingApplicationView/Observations";
import OtherObservations from "./pages/PendingApplicationView/OtherObservations";
import Forward from "./pages/PendingApplicationView/Forward";
import CAFInformation from "./pages/PendingApplicationView/CAFInformation";
import PendingApplicationStatus from "./pages/PendingApplicationStatus/PendingApplicationStatus";
import UserManual from "./pages/UserManual";
import InspectionReport from "./pages/InspectionReport/InspectionReport";
import Profile from "./pages/Profile/Profile";






import PreviousAnnualReport from "./pages/Reports/PreviousAnnualReport";
import PreviousMonthlyReport from "./pages/Reports/PreviousMonthlyReport";
import AddUser from "./pages/CMS pages/Office Data/AddUser";
import ChangePassword from "./pages/CMS pages/Change Password/ChangePassword";
import ApplicationSummaryReport from "./pages/Reports/ApplicationSummaryReport";
import ApplicantDashboard from "./pages/Applicant-Part/ApplicantDashboard";
import ApplyNewEService from "./pages/Applicant-Part/E-services/ApplyNewEService";
import DangerousOccurence from "./pages/Applicant-Part/E-services/DangerousOccurence";
import NoticeOfPoisoning from "./pages/Applicant-Part/E-services/NoticeOfPoisoning";
import AnnualReturn from "./pages/Applicant-Part/E-services/AnnualReturn";
import ApplicantChangePassword from "./pages/Applicant-Part/ApplicantChangePassword";
import ApplicantNoticeOfAccident from "./pages/Applicant-Part/E-services/ApplicantNoticeOfAccident";









function Layout() {
  const location = useLocation();
  // useAutoLogout()

  // Define routes where top bars & footer should be hidden
  const hideLayoutPaths = ["/user/login", "/user/dashboard","/custom-factory-search","/CROSSED_OFF",
    "/pending-approvals","/other-type-letr-rept-ord","/inspector-form18-list","/registration-list","/underprocess-registration-list",
  "/backto-registration-list","/inspector-registration-issued-rejected-list/2","/inspector-rejected-registration-list",
"/inspector-renewal-list","/underprocess-registration-list/3","/backto-registration-list/3","/renewal-issued-rejected-list",
"/renewal-rejected-applications-list","/auto-renewal-issued-applications-list","/applicant/remarks_view","/inspector-letr-rept-ord/other-type-letr-rept-ord",
"/user/edit","/add-user","/password-update-to-default","/applicant-dashboard","/change-password"];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname) || location.pathname.startsWith("/admin") || location.pathname.startsWith("/statcell_rpt") || location.pathname.startsWith("/applicant");
 const hideFeedbackPaths = ["/user/login", "/user/register", "/user/password","/"];
const shouldHideFeedback =
  hideFeedbackPaths.includes(location.pathname) || location.pathname.startsWith("/main");
 // Example condition for hiding Feedback
  return (
    <>
      {!shouldHideLayout && <FirstTopBar />}
      {!shouldHideLayout && <SecTopBar />}
      {!shouldHideLayout && <Navbar />}
      {shouldHideFeedback && <Feedback />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
         <Route path="/user/password" element={<ForgotPassword />} />
        <Route path="/main/about_us" element={<AboutUs />} />
        <Route path="/main/contact_us" element={<ContactUs />} />
        <Route path="/main/RTI" element={<Rti />} />
        <Route path="/main/FAQ" element={<Faq />} />
        <Route path="/main/factory_zone" element={<Zone />} />
        <Route path="main/user_manual" element={<UserManual />} />
        <Route
          path="/main/factory/third_party_verify"
          element={<HomeFactories />}
        />
        <Route
          path="/main/emergency_response_procedure"
          element={<EmergencyResponseProcedure />}
        />
        <Route
          path="/main/silicosis_policy_application_forms"
          element={<SilicosisPolicyApplicationForm />}
        />
        <Route path="/main/acts_rules" element={<ActsAndRules />} />





       <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/custom-factory-search" element={<SearchFactory />} />
          <Route path="/CROSSED_OFF" element={<CrossedOffFactories />} />
          <Route path="/pending-approvals" element={<PendingApprovalList />} />
          <Route path="/inspector-letr-rept-ord/other-type-letr-rept-ord" element={<OtherTypeLetterReport />} />
          <Route path="/inspector-form18-list" element={<NoticeOfAccident />} />
          {/* for testing enviroment */}




           <Route path="/registration-list" element={<RegistrationList />} />
           <Route path="/underprocess-registration-list" element={<UnderProcessRegistrationList />} />
            <Route path="/backto-registration-list" element={<BackToRegistration />} />
            <Route path="/inspector-registration-issued-rejected-list/2" element={<IssuedApplication />} />
            <Route path="/inspector-rejected-registration-list" element={<RejectedApplication />} />



            {/* dashboard-renewal routes */}
           <Route path="/inspector-renewal-list" element={< PendingApplicationRenewal/>} />
           <Route path="/underprocess-registration-list/3" element={<UnderProcessApplicationRenewal />} />
           <Route path="/backto-registration-list/3" element={<BackForRectificationRenewal />} />
            <Route path="/renewal-issued-rejected-list" element={<IssuedApplicationRenewal />} />
           <Route path="/renewal-rejected-applications-list" element={<RejectedApplicationRenewal />} />
           <Route path="/auto-renewal-issued-applications-list" element={<AutoRenewalApplicationRenewal />} />


          <Route path="/scrap" element={<Scrap />} />


         <Route path="/admin" element={<PendingApplicationView />}>
          {/* Default tab */}
          <Route index element={<CAFInformation />} />

          {/* Child routes */}
         <Route path="factory-caf-information/:applicationId?" element={<CAFInformation />} />
          <Route path="factory-document-information/:applicationId?" element={<DocumentsInformations />} />
          <Route path="factory-irregularities-information" element={<Observations />} />
          <Route path="extra-irregularities-ad" element={<OtherObservations />} />
          <Route path="factory-send-authority" element={<Forward />} />
          
        </Route>




         {/* route for report  */}

          <Route path="/statcell_rpt" >
          {/* Default tab */}
          {/* <Route index element={<CAFInformation />} /> */}

          {/* Child routes */}
         <Route path="annual" element={<PreviousAnnualReport />} />
         <Route path="monthly" element={<PreviousMonthlyReport />} />
          <Route path="all_appln" element={<ApplicationSummaryReport />} />
          <Route path="other-type-letr-rept-ord-list" element={<OtherTypeLetterReport />} />
          {/* <Route path="factory-document-information/:applicationId?" element={<DocumentsInformations />} />
          <Route path="factory-irregularities-information" element={<Observations />} />
          <Route path="extra-irregularities-ad" element={<OtherObservations />} />
          <Route path="factory-send-authority" element={<Forward />} /> */}
        
        </Route>







             
        {/* super admin route is here */}
           <Route path="/add-user" element={<AddUser />} />
           <Route path="/password-update-to-default" element={<ChangePassword />} />




             

           {/* applicant route part is starting from here */}
           <Route path="/applicant-dashboard" element={<ApplicantDashboard />}/>

           <Route path="/applicant">
           <Route path="decission" element={<ApplyNewEService />} />
           <Route path="form19-list" element={<DangerousOccurence />} />
           <Route path="form18-list" element={<ApplicantNoticeOfAccident />} />
            <Route path="form20-list" element={<NoticeOfPoisoning />} />
            <Route path="annual-return-list" element={<AnnualReturn />} />
           </Route>


           <Route path="/change-password" element={<ApplicantChangePassword />}/>





        <Route path="/applicant/remarks_view" element={<PendingApplicationStatus />}/>
         <Route path="/user/edit" element={<Profile />} />


          </Route>
        </Route>

         
         

      </Routes>

      {!shouldHideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
