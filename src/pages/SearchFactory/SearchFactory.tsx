// import React, { useState } from "react";

// const SearchFactory: React.FC = () => {
//   const [formData, setFormData] = useState({
//     factoryName: "",
//     applicationNumber: "",
//     eService: "",
//     status: "",
//     fromDate: "",
//     toDate: "",
//     planApprovalNumber: "",
//     registrationNumber: "",
//     licenseNumber: "",
//     validFrom: "",
//     validTo: "",
//     process: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleReset = () => {
//     setFormData({
//       factoryName: "",
//       applicationNumber: "",
//       eService: "",
//       status: "",
//       fromDate: "",
//       toDate: "",
//       planApprovalNumber: "",
//       registrationNumber: "",
//       licenseNumber: "",
//       validFrom: "",
//       validTo: "",
//       process: "",
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Search Data:", formData);
//   };

//   return (
//     <div className="p-4 sm:p-6 md:p-8">
//       <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4">
//         Search Factory
//       </h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-gray-50 p-4 sm:p-6 md:p-8 rounded-lg shadow-sm border border-gray-200"
//       >
//         {/* Grid layout — responsive */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//           {/* Factory Name */}
//           <div>
//             <label className="block text-sm font-medium mb-1">Factory Name</label>
//             <input
//               type="text"
//               name="factoryName"
//               value={formData.factoryName}
//               onChange={handleChange}
//               placeholder="Factory Name"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Application Number */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Application Number
//             </label>
//             <input
//               type="text"
//               name="applicationNumber"
//               value={formData.applicationNumber}
//               onChange={handleChange}
//               placeholder="Application Number"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* e-Services */}
//           <div>
//             <label className="block text-sm font-medium mb-1">e-Services</label>
//             <select
//               name="eService"
//               value={formData.eService}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select service</option>
//               <option value="registration">Registration</option>
//               <option value="renewal">Renewal</option>
//               <option value="license">License</option>
//             </select>
//           </div>

//           {/* Application Status */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Application Status
//             </label>
//             <select
//               name="status"
//               value={formData.status}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="">Select Status</option>
//               <option value="approved">Approved</option>
//               <option value="pending">Pending</option>
//               <option value="rejected">Rejected</option>
//             </select>
//           </div>

//           {/* From Date */}
//           <div>
//             <label className="block text-sm font-medium mb-1">From Date</label>
//             <input
//               type="date"
//               name="fromDate"
//               value={formData.fromDate}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* To Date */}
//           <div>
//             <label className="block text-sm font-medium mb-1">To Date</label>
//             <input
//               type="date"
//               name="toDate"
//               value={formData.toDate}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Plan Approval Number */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Plan Approval Number
//             </label>
//             <input
//               type="text"
//               name="planApprovalNumber"
//               value={formData.planApprovalNumber}
//               onChange={handleChange}
//               placeholder="Plan Approval Number"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Registration Number */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Registration Number
//             </label>
//             <input
//               type="text"
//               name="registrationNumber"
//               value={formData.registrationNumber}
//               onChange={handleChange}
//               placeholder="Registration Number"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* License Number */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               License Number
//             </label>
//             <input
//               type="text"
//               name="licenseNumber"
//               value={formData.licenseNumber}
//               onChange={handleChange}
//               placeholder="License Number"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Valid License From */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Valid License From
//             </label>
//             <input
//               type="date"
//               name="validFrom"
//               value={formData.validFrom}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Valid License To */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Valid License To
//             </label>
//             <input
//               type="date"
//               name="validTo"
//               value={formData.validTo}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Manufacturing Process */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Manufacturing Process
//             </label>
//             <input
//               type="text"
//               name="process"
//               value={formData.process}
//               onChange={handleChange}
//               placeholder="Manufacturing Process"
//               className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
//           <button
//             type="submit"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-md transition-all"
//           >
//             Search
//           </button>
//           <button
//             type="button"
//             onClick={handleReset}
//             className="bg-gray-700 hover:bg-gray-800 text-white font-semibold px-5 py-2 rounded-md transition-all"
//           >
//             Reset
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchFactory;
    


import React, { useState } from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const SearchFactory: React.FC = () => {
  const [formData, setFormData] = useState({
    factoryName: "",
    applicationNumber: "",
    eService: "",
    status: "",
    fromDate: "",
    toDate: "",
    planApprovalNumber: "",
    registrationNumber: "",
    licenseNumber: "",
    validFrom: "",
    validTo: "",
    process: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleReset = () => {
    setFormData({
      factoryName: "",
      applicationNumber: "",
      eService: "",
      status: "",
      fromDate: "",
      toDate: "",
      planApprovalNumber: "",
      registrationNumber: "",
      licenseNumber: "",
      validFrom: "",
      validTo: "",
      process: "",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Search Data:", formData);
  };

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <FieldTitle className="text-blue-900 mb-4 text-xl sm:text-2xl md:text-3xl font-bold">
        Search Factory
      </FieldTitle>

      <form onSubmit={handleSubmit}>
        <FieldSet className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 md:p-8">
          <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Factory Name */}
            <Field>
              <FieldLabel>Factory Name</FieldLabel>
              <FieldContent>
                <Input
                  placeholder="Factory Name"
                  value={formData.factoryName}
                  onChange={(e) => handleChange("factoryName", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* Application Number */}
            <Field>
              <FieldLabel>Application Number</FieldLabel>
              <FieldContent>
                <Input
                  placeholder="Application Number"
                  value={formData.applicationNumber}
                  onChange={(e) => handleChange("applicationNumber", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* e-Service */}
            <Field>
              <FieldLabel>e-Service</FieldLabel>
              <FieldContent>
                <Select
                  value={formData.eService}
                  onValueChange={(v) => handleChange("eService", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="registration">Registration</SelectItem>
                    <SelectItem value="renewal">Renewal</SelectItem>
                    <SelectItem value="license">License</SelectItem>
                  </SelectContent>
                </Select>
              </FieldContent>
            </Field>

            {/* Application Status */}
            <Field>
              <FieldLabel>Application Status</FieldLabel>
              <FieldContent>
                <Select
                  value={formData.status}
                  onValueChange={(v) => handleChange("status", v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </FieldContent>
            </Field>

            {/* From Date */}
            <Field>
              <FieldLabel>From Date</FieldLabel>
              <FieldContent>
                <Input
                  type="date"
                  value={formData.fromDate}
                  onChange={(e) => handleChange("fromDate", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* To Date */}
            <Field>
              <FieldLabel>To Date</FieldLabel>
              <FieldContent>
                <Input
                  type="date"
                  value={formData.toDate}
                  onChange={(e) => handleChange("toDate", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* Plan Approval Number */}
            <Field>
              <FieldLabel>Plan Approval Number</FieldLabel>
              <FieldContent>
                <Input
                  placeholder="Plan Approval Number"
                  value={formData.planApprovalNumber}
                  onChange={(e) => handleChange("planApprovalNumber", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* Registration Number */}
            <Field>
              <FieldLabel>Registration Number</FieldLabel>
              <FieldContent>
                <Input
                  placeholder="Registration Number"
                  value={formData.registrationNumber}
                  onChange={(e) => handleChange("registrationNumber", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* License Number */}
            <Field>
              <FieldLabel>License Number</FieldLabel>
              <FieldContent>
                <Input
                  placeholder="License Number"
                  value={formData.licenseNumber}
                  onChange={(e) => handleChange("licenseNumber", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* Valid From */}
            <Field>
              <FieldLabel>Valid From</FieldLabel>
              <FieldContent>
                <Input
                  type="date"
                  value={formData.validFrom}
                  onChange={(e) => handleChange("validFrom", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* Valid To */}
            <Field>
              <FieldLabel>Valid To</FieldLabel>
              <FieldContent>
                <Input
                  type="date"
                  value={formData.validTo}
                  onChange={(e) => handleChange("validTo", e.target.value)}
                />
              </FieldContent>
            </Field>

            {/* Manufacturing Process */}
            <Field>
              <FieldLabel>Manufacturing Process</FieldLabel>
              <FieldContent>
                <Input
                  placeholder="Manufacturing Process"
                  value={formData.process}
                  onChange={(e) => handleChange("process", e.target.value)}
                />
              </FieldContent>
            </Field>
          </FieldGroup>

          <FieldSeparator className="my-6" />

          <div className="flex flex-col sm:flex-row justify-end gap-3">
            <Button type="submit" variant="default" className="bg-blue-600 hover:bg-blue-700">
              Search
            </Button>
            <Button type="button" variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </FieldSet>
      </form>
    </div>
  );
};

export default SearchFactory;
