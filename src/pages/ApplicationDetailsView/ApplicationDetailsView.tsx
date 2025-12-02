import React, { useState } from 'react';
import { ArrowLeft, FileText, Eye } from 'lucide-react';

// Types
interface FactoryInformation {
  factoryName: string;
  previousFactoryName: string;
  gstinNumber: string;
  udyogAadhaarNo: string;
  tradeLicenseNo: string;
  energyMeterNo: string;
  cinNo: string;    
}

interface LocationOfFactory {
  factoryZone: string;
  factoryAddress: string;
  nearestLandmark: string;
  tehsil: string;
}

interface WorkerInformation {
  maleWorker: number;
  femaleWorker: number;
  maleAdolescents: number;
  femaleAdolescents: number;
  maleChildren: number;
  femaleChildren: number;
}

interface ApplicationHeader {
  applicationType: string;
  companyName: string;
  planApprovalNumber: string;
  registrationNumber: string;
  licenseNumber: string;
  licenseExpiring: string;
  submissionDate: string;
  resubmissionDate: string;
  forwardedTo: string;
}

interface ApplicationDetailsProps {
  applicationNo: string;
  cafaId: number;
  onBack: () => void;
}

// Tab Component
interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 font-semibold text-sm transition-all ${
      isActive
        ? 'bg-white text-orange-600 border-b-4 border-orange-500 rounded-t-lg'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
    }`}
  >
    {label}
  </button>
);

// Section Component
interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="bg-gray-700 text-white px-4 py-2 font-bold text-lg mb-0">
      {title}
    </h3>
    <div className="bg-white">{children}</div>
  </div>
);

// Field Row Component
interface FieldRowProps {
  label: string;
  value: string | number;
  isAlternate?: boolean;
  hasCheckbox?: boolean;
}

const FieldRow: React.FC<FieldRowProps> = ({ 
  label, 
  value, 
  isAlternate = false,
  hasCheckbox = false 
}) => (
  <div className={`flex ${isAlternate ? 'bg-gray-100' : 'bg-white'}`}>
    <div className="w-1/3 px-4 py-3 border-b border-r border-gray-300">
      <span className="font-semibold text-gray-800">{label}</span>
    </div>
    <div className="w-2/3 px-4 py-3 border-b border-gray-300 flex justify-between items-center">
      <span className="text-gray-700">{value || '-'}</span>
      {hasCheckbox && (
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-600 border-gray-300 rounded"
        />
      )}
    </div>
  </div>
);

// Mock Data
const mockApplicationData: ApplicationHeader = {
  applicationType: "Application for Extension of Existing Plan",
  companyName: "DREAM BAKE PRIVATE LIMITED",
  planApprovalNumber: "19 dated on 11th Jan 2010",
  registrationNumber: "33-HW/X/10 dated on 04th Jan 2010",
  licenseNumber: "17580, dated on 29th Dec 2021",
  licenseExpiring: "31st Dec 2021",
  submissionDate: "22-10-2025",
  resubmissionDate: "22-10-2025",
  forwardedTo: "DD end"
};

const mockFactoryInfo: FactoryInformation = {
  factoryName: "DREAM BAKE PRIVATE LIMITED",
  previousFactoryName: "",
  gstinNumber: "AABCD1189R1Z0",
  udyogAadhaarNo: "",
  tradeLicenseNo: "2418",
  energyMeterNo: "",
  cinNo: "U15419WB1998PTC088239"
};

const mockLocationInfo: LocationOfFactory = {
  factoryZone: "HA",
  factoryAddress: "Kandua, Block - Sankrail, Howrah Sadar, PS - Sankrail, PO - Kendua B.O, Howrah, PIN- 711302, West Bengal PLOT NO F1 & F2,WBIDC, PHASE-II, KANDUAH FOOD PARK, PO+PS SANKRAIL, DIST HOWRAH PIN 711302",
  nearestLandmark: "SANKRAIL",
  tehsil: "Industrial Estate"
};

const mockWorkerInfo: WorkerInformation = {
  maleWorker: 0,
  femaleWorker: 0,
  maleAdolescents: 0,
  femaleAdolescents: 0,
  maleChildren: 0,
  femaleChildren: 0
};

// Main Component
const ApplicationDetailsView: React.FC<ApplicationDetailsProps> = ({ 
  applicationNo, 
  onBack 
}) => {
  const [activeTab, setActiveTab] = useState('caf');

  const tabs = [
    { id: 'caf', label: 'CAF Information' },
    { id: 'documents', label: 'Documents Informations' },
    { id: 'observations', label: 'Observations' },
    { id: 'other', label: 'Other Observations' },
    { id: 'forward', label: 'Forward' }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-gray-200 mb-3 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Back to list</span>
          </button>
          <h1 className="text-2xl font-bold">Application Details</h1>
          <p className="text-teal-100 mt-1">Application No: {applicationNo}</p>
        </div>
      </div>

      {/* Application Summary */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            {mockApplicationData.applicationType}
          </h2>
          <div className="text-center space-y-1 text-gray-700">
            <p className="text-xl font-bold text-gray-900">{mockApplicationData.companyName}</p>
            <p><span className="font-semibold">Plan Approval Number:</span> {mockApplicationData.planApprovalNumber}</p>
            <p><span className="font-semibold">Registration Number:</span> {mockApplicationData.registrationNumber}</p>
            <p><span className="font-semibold">License Number:</span> {mockApplicationData.licenseNumber}</p>
            <p><span className="font-semibold">License Expiring on dated:</span> {mockApplicationData.licenseExpiring}</p>
            <p><span className="font-semibold">Application submission Date:</span> {mockApplicationData.submissionDate}</p>
            <p><span className="font-semibold">Application re-submission Date:</span> {mockApplicationData.resubmissionDate}</p>
          </div>
          <p className="text-sm text-gray-600 text-center mt-4 italic">
            N:B. All inputs are provided by applicant only. All inputs are to be verified by officials.
          </p>
          <div className="mt-4 pt-4 border-t">
            <p className="font-semibold text-gray-800">
              Application is forwarded to {mockApplicationData.forwardedTo}
            </p>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors">
              <FileText className="w-4 h-4" />
              View Notesheet
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border-2 border-teal-600 text-teal-600 rounded-md hover:bg-teal-50 transition-colors">
              <Eye className="w-4 h-4" />
              View Condition
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-lg shadow-md overflow-hidden">
          <div className="flex flex-wrap gap-1 bg-gray-200 p-2">
            {tabs.map(tab => (
              <Tab
                key={tab.id}
                label={tab.label}
                isActive={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'caf' && (
              <div>
                {/* Factory Information */}
                <Section title="FACTORY INFORMATION">
                  <FieldRow 
                    label="Factory Name" 
                    value={mockFactoryInfo.factoryName}
                    hasCheckbox
                  />
                  <FieldRow 
                    label="Previous Factory Name" 
                    value={mockFactoryInfo.previousFactoryName}
                    isAlternate
                    hasCheckbox
                  />
                  <FieldRow 
                    label="GSTIN Number" 
                    value={mockFactoryInfo.gstinNumber}
                    hasCheckbox
                  />
                  <FieldRow 
                    label="Udyog Aadhaar No" 
                    value={mockFactoryInfo.udyogAadhaarNo}
                    isAlternate
                    hasCheckbox
                  />
                  <FieldRow 
                    label="Trade License No" 
                    value={mockFactoryInfo.tradeLicenseNo}
                    hasCheckbox
                  />
                  <FieldRow 
                    label="Energy Meter No" 
                    value={mockFactoryInfo.energyMeterNo}
                    isAlternate
                    hasCheckbox
                  />
                  <FieldRow 
                    label="CIN No" 
                    value={mockFactoryInfo.cinNo}
                    hasCheckbox
                  />
                </Section>

                {/* Location of Factory */}
                <Section title="LOCATION OF FACTORY">
                  <FieldRow 
                    label="Factory Zone" 
                    value={mockLocationInfo.factoryZone}
                    hasCheckbox
                  />
                  <FieldRow 
                    label="Factory Address" 
                    value={mockLocationInfo.factoryAddress}
                    isAlternate
                    hasCheckbox
                  />
                  <FieldRow 
                    label="Nearest Landmark" 
                    value={mockLocationInfo.nearestLandmark}
                    hasCheckbox
                  />
                  <FieldRow 
                    label="Tehsil" 
                    value={mockLocationInfo.tehsil}
                    isAlternate
                    hasCheckbox
                  />
                </Section>

                {/* Worker Information */}
                <Section title="WORKER INFORMATION">
                  <FieldRow 
                    label="No. of Male Worker" 
                    value={mockWorkerInfo.maleWorker}
                    hasCheckbox
                  />
                  <FieldRow 
                    label="No. of Female Worker" 
                    value={mockWorkerInfo.femaleWorker}
                    isAlternate
                    hasCheckbox
                  />
                  <div className="flex bg-white">
                    <div className="w-1/3 px-4 py-3 border-b border-r border-gray-300">
                      <div>
                        <span className="font-semibold text-gray-800">No. of Male Adolescents Worker</span>
                        <p className="text-xs text-red-500">(over 15 but under 18 years of age)</p>
                      </div>
                    </div>
                    <div className="w-2/3 px-4 py-3 border-b border-gray-300 flex justify-between items-center">
                      <span className="text-gray-700">{mockWorkerInfo.maleAdolescents}</span>
                      <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded" />
                    </div>
                  </div>
                  <FieldRow 
                    label="No. of Female Adolescents Worker" 
                    value={mockWorkerInfo.femaleAdolescents}
                    isAlternate
                    hasCheckbox
                  />
                  <div className="flex bg-white">
                    <div className="w-1/3 px-4 py-3 border-b border-r border-gray-300">
                      <div>
                        <span className="font-semibold text-gray-800">No. of Male Children Worker</span>
                        <p className="text-xs text-red-500">(over 14 but under 15 years of age)</p>
                      </div>
                    </div>
                    <div className="w-2/3 px-4 py-3 border-b border-gray-300 flex justify-between items-center">
                      <span className="text-gray-700">{mockWorkerInfo.maleChildren}</span>
                      <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded" />
                    </div>
                  </div>
                  <FieldRow 
                    label="No. of Female Children Worker" 
                    value={mockWorkerInfo.femaleChildren}
                    isAlternate
                    hasCheckbox
                  />
                </Section>

                {/* Action Buttons */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={onBack}
                    className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-medium"
                  >
                    Back to list
                  </button>
                  <button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors font-medium">
                    Save
                  </button>
                </div>
              </div>
            )}

            {activeTab !== 'caf' && (
              <div className="text-center py-12 text-gray-500">
                <p className="text-lg">Content for {tabs.find(t => t.id === activeTab)?.label} tab</p>
                <p className="text-sm mt-2">This section is under development</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsView;



// import React, { useState } from "react";
// import { ArrowLeft, FileText, Eye } from "lucide-react";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Tabs,
//   TabsList,
//   TabsTrigger,
//   TabsContent,
// } from "@/components/ui/tabs";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Separator } from "@/components/ui/separator";

// interface FactoryInformation {
//   factoryName: string;
//   previousFactoryName: string;
//   gstinNumber: string;
//   udyogAadhaarNo: string;
//   tradeLicenseNo: string;
//   energyMeterNo: string;
//   cinNo: string;
// }

// interface LocationOfFactory {
//   factoryZone: string;
//   factoryAddress: string;
//   nearestLandmark: string;
//   tehsil: string;
// }

// interface WorkerInformation {
//   maleWorker: number;
//   femaleWorker: number;
//   maleAdolescents: number;
//   femaleAdolescents: number;
//   maleChildren: number;
//   femaleChildren: number;
// }

// interface ApplicationHeader {
//   applicationType: string;
//   companyName: string;
//   planApprovalNumber: string;
//   registrationNumber: string;
//   licenseNumber: string;
//   licenseExpiring: string;
//   submissionDate: string;
//   resubmissionDate: string;
//   forwardedTo: string;
// }

// interface ApplicationDetailsProps {
//   applicationNo: string;
//   onBack: () => void;
// }

// const mockApplicationData: ApplicationHeader = {
//   applicationType: "Application for Extension of Existing Plan",
//   companyName: "DREAM BAKE PRIVATE LIMITED",
//   planApprovalNumber: "19 dated on 11th Jan 2010",
//   registrationNumber: "33-HW/X/10 dated on 04th Jan 2010",
//   licenseNumber: "17580, dated on 29th Dec 2021",
//   licenseExpiring: "31st Dec 2021",
//   submissionDate: "22-10-2025",
//   resubmissionDate: "22-10-2025",
//   forwardedTo: "DD end",
// };

// const mockFactoryInfo: FactoryInformation = {
//   factoryName: "DREAM BAKE PRIVATE LIMITED",
//   previousFactoryName: "",
//   gstinNumber: "AABCD1189R1Z0",
//   udyogAadhaarNo: "",
//   tradeLicenseNo: "2418",
//   energyMeterNo: "",
//   cinNo: "U15419WB1998PTC088239",
// };

// const mockLocationInfo: LocationOfFactory = {
//   factoryZone: "HA",
//   factoryAddress:
//     "Kandua, Block - Sankrail, Howrah Sadar, PS - Sankrail, PO - Kendua B.O, Howrah, PIN- 711302, West Bengal PLOT NO F1 & F2,WBIDC, PHASE-II, KANDUAH FOOD PARK, PO+PS SANKRAIL, DIST HOWRAH PIN 711302",
//   nearestLandmark: "SANKRAIL",
//   tehsil: "Industrial Estate",
// };

// const mockWorkerInfo: WorkerInformation = {
//   maleWorker: 0,
//   femaleWorker: 0,
//   maleAdolescents: 0,
//   femaleAdolescents: 0,
//   maleChildren: 0,
//   femaleChildren: 0,
// };

// const FieldRow = ({
//   label,
//   value,
//   hasCheckbox = false,
// }: {
//   label: string;
//   value: string | number;
//   hasCheckbox?: boolean;
// }) => (
//   <div className="flex justify-between items-center border-b py-2 px-3 text-sm">
//     <span className="font-medium text-gray-800">{label}</span>
//     <div className="flex items-center gap-3">
//       <span className="text-gray-700">{value || "-"}</span>
//       {hasCheckbox && <Checkbox />}
//     </div>
//   </div>
// );

// const ApplicationDetailsView: React.FC<ApplicationDetailsProps> = ({
//   applicationNo,
//   onBack,
// }) => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-6 py-4 shadow-sm">
//         <div className="max-w-6xl mx-auto">
//           <Button
//             variant="ghost"
//             onClick={onBack}
//             className="text-white hover:text-gray-200 flex items-center gap-2 mb-2"
//           >
//             <ArrowLeft className="w-4 h-4" />
//             Back to list
//           </Button>
//           <h1 className="text-2xl font-bold">Application Details</h1>
//           <p className="text-teal-100 mt-1">Application No: {applicationNo}</p>
//         </div>
//       </div>

//       {/* Application Summary */}
//       <div className="max-w-6xl mx-auto px-6 py-8 space-y-6">
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-center text-lg font-bold">
//               {mockApplicationData.applicationType}
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-1 text-center text-gray-700">
//             <p className="text-xl font-bold text-gray-900">
//               {mockApplicationData.companyName}
//             </p>
//             <p>
//               <b>Plan Approval Number:</b> {mockApplicationData.planApprovalNumber}
//             </p>
//             <p>
//               <b>Registration Number:</b> {mockApplicationData.registrationNumber}
//             </p>
//             <p>
//               <b>License Number:</b> {mockApplicationData.licenseNumber}
//             </p>
//             <p>
//               <b>License Expiring:</b> {mockApplicationData.licenseExpiring}
//             </p>
//             <p>
//               <b>Submission Date:</b> {mockApplicationData.submissionDate}
//             </p>
//             <p>
//               <b>Resubmission Date:</b> {mockApplicationData.resubmissionDate}
//             </p>

//             <Separator className="my-3" />

//             <p className="font-semibold">
//               Application forwarded to {mockApplicationData.forwardedTo}
//             </p>

//             <div className="flex justify-center gap-3 mt-4">
//               <Button variant="outline">
//                 <FileText className="w-4 h-4 mr-2" />
//                 View Notesheet
//               </Button>
//               <Button variant="outline">
//                 <Eye className="w-4 h-4 mr-2" />
//                 View Condition
//               </Button>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Tabs */}
//         <Tabs defaultValue="caf" className="bg-white rounded-lg shadow">
//           <TabsList className="flex flex-wrap bg-gray-100 p-2">
//             <TabsTrigger value="caf">CAF Information</TabsTrigger>
//             <TabsTrigger value="documents">Documents</TabsTrigger>
//             <TabsTrigger value="observations">Observations</TabsTrigger>
//             <TabsTrigger value="other">Other Observations</TabsTrigger>
//             <TabsTrigger value="forward">Forward</TabsTrigger>
//           </TabsList>

//           <TabsContent value="caf" className="p-4">
//             <Card className="mb-4">
//               <CardHeader>
//                 <CardTitle>Factory Information</CardTitle>
//               </CardHeader>
//               <CardContent className="divide-y">
//                 <FieldRow label="Factory Name" value={mockFactoryInfo.factoryName} hasCheckbox />
//                 <FieldRow label="Previous Factory Name" value={mockFactoryInfo.previousFactoryName} hasCheckbox />
//                 <FieldRow label="GSTIN Number" value={mockFactoryInfo.gstinNumber} hasCheckbox />
//                 <FieldRow label="Trade License No" value={mockFactoryInfo.tradeLicenseNo} hasCheckbox />
//                 <FieldRow label="CIN No" value={mockFactoryInfo.cinNo} hasCheckbox />
//               </CardContent>
//             </Card>

//             <Card className="mb-4">
//               <CardHeader>
//                 <CardTitle>Location of Factory</CardTitle>
//               </CardHeader>
//               <CardContent className="divide-y">
//                 <FieldRow label="Factory Zone" value={mockLocationInfo.factoryZone} hasCheckbox />
//                 <FieldRow label="Factory Address" value={mockLocationInfo.factoryAddress} hasCheckbox />
//                 <FieldRow label="Nearest Landmark" value={mockLocationInfo.nearestLandmark} hasCheckbox />
//                 <FieldRow label="Tehsil" value={mockLocationInfo.tehsil} hasCheckbox />
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle>Worker Information</CardTitle>
//               </CardHeader>
//               <CardContent className="divide-y">
//                 <FieldRow label="No. of Male Worker" value={mockWorkerInfo.maleWorker} hasCheckbox />
//                 <FieldRow label="No. of Female Worker" value={mockWorkerInfo.femaleWorker} hasCheckbox />
//                 <FieldRow label="No. of Male Adolescents" value={mockWorkerInfo.maleAdolescents} hasCheckbox />
//                 <FieldRow label="No. of Female Adolescents" value={mockWorkerInfo.femaleAdolescents} hasCheckbox />
//                 <FieldRow label="No. of Male Children" value={mockWorkerInfo.maleChildren} hasCheckbox />
//                 <FieldRow label="No. of Female Children" value={mockWorkerInfo.femaleChildren} hasCheckbox />
//               </CardContent>
//             </Card>

//             <div className="flex justify-between mt-6">
//               <Button variant="secondary" onClick={onBack}>
//                 Back to list
//               </Button>
//               <Button>Save</Button>
//             </div>
//           </TabsContent>

//           <TabsContent value="documents" className="p-10 text-center text-gray-500">
//             Documents tab under development.
//           </TabsContent>
//           <TabsContent value="observations" className="p-10 text-center text-gray-500">
//             Observations tab under development.
//           </TabsContent>
//           <TabsContent value="other" className="p-10 text-center text-gray-500">
//             Other Observations tab under development.
//           </TabsContent>
//           <TabsContent value="forward" className="p-10 text-center text-gray-500">
//             Forward tab under development.
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default ApplicationDetailsView;
