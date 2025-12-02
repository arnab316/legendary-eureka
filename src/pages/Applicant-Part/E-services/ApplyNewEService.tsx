import React, { useState } from "react";
import { Home } from "lucide-react";
import PopupModal from "@/components/PopupModel/PopupModal";
import { FaHandPointRight } from "react-icons/fa";
const ApplyNewEService = () => {
  const [factoryType, setFactoryType] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");
  const [usesPower, setUsesPower] = useState("");
  const [workerCount10, setWorkerCount10] = useState("");
  const [manufacturesChemical, setManufacturesChemical] = useState("");
  const [workerCount20, setWorkerCount20] = useState("");

  const handleFactoryTypeChange = (type: React.SetStateAction<string>) => {
    setFactoryType(type);
    setSelectedService("");
    setSelectedSubService("");
    setUsesPower("");
    setWorkerCount10("");
    setManufacturesChemical("");
    setWorkerCount20("");
  };

  const handleServiceChange = (service: React.SetStateAction<string>) => {
    setSelectedService(service);
    setSelectedSubService("");
    setUsesPower("");
    setWorkerCount10("");
    setManufacturesChemical("");
    setWorkerCount20("");
  };

  const handlePowerChange = (value: React.SetStateAction<string>) => {
    setUsesPower(value);
    setWorkerCount10("");
    setManufacturesChemical("");
    setWorkerCount20("");
  };


  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full px-6 py-6 ">




    {
  openModal && (
    <PopupModal
      isOpen={openModal}
      onClose={() => setOpenModal(false)}
      title="View Chemical Products"
    >
      <div className="max-h-[70vh] overflow-y-auto">

        {/* Header */}
        {/* <div className="bg-[#158E94] text-white p-3 font-semibold text-lg">
          View Chemical Products
        </div> */}

        {/* Table Section */}
        <div className="overflow-x-auto mt-2">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#14848A] text-white">
                <th className="p-3 text-left font-semibold border-r border-gray-300 w-[80px]">
                  Sl. No
                </th>
                <th className="p-3 text-left font-semibold">
                  Chemical Processes List
                </th>
              </tr>
            </thead>

            <tbody>

              <tr className="bg-white">
                <td className="p-3 border-r border-gray-300">1</td>
                <td className="p-3">
                  Manufacture of rubber and plastic products
                </td>
              </tr>

              <tr className="bg-gray-100">
                <td className="p-3 border-r border-gray-300">2</td>
                <td className="p-3">
                  Manufacturing process involving repair of Motor Vehicles and Motor Cycles
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 border-r border-gray-300">3</td>
                <td className="p-3">
                  Manufacturing process using or producing explosive or highly inflammable articles or substances
                </td>
              </tr>

              <tr className="bg-gray-100">
                <td className="p-3 border-r border-gray-300">4</td>
                <td className="p-3">
                  Fire-works manufacturing and its packaging units
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 border-r border-gray-300">5</td>
                <td className="p-3">
                  Manufacturing of Leather goods
                </td>
              </tr>

              <tr className="bg-gray-100">
                <td className="p-3 border-r border-gray-300">6</td>
                <td className="p-3">
                  Manufacturing of Ice using ammonia as refrigerant
                </td>
              </tr>

              <tr className="bg-white">
                <td className="p-3 border-r border-gray-300">7</td>
                <td className="p-3">
                  Pesticides formulation units
                </td>
              </tr>

              <tr className="bg-gray-100">
                <td className="p-3 border-r border-gray-300">8</td>
                <td className="p-3">
                  Manufacturing, handling & processing of asbestos & its products
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </PopupModal>
  )
}

















      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold text-[#0A2A6B]">
          Online Application for Registration and grant or Renewal of License of Factories
        </h1>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Home size={16} />
          <a href="/applicant-dashboard" className="hover:text-gray-700">Home</a>
          <span>{">"}</span>
          <span className="text-blue-600">Dashboard</span>
        </div>
      </div>

      {/* White Box */}
      <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm mb-12">

        {/* Yellow Header */}
        <div className="bg-[#FEF7E6] border-b-4 border-yellow-400 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Questionnaire / Wizard to check eligibility for e-Services
          </h2>
        </div>

        <div className="px-6 py-6 space-y-6">

          {/* Factory Type */}
          <div>
            <label className="block text-base font-semibold text-gray-800 mb-3">
              Choose Type of Factory ? <span className="text-red-500">*</span>
            </label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="factoryType"
                  value="new"
                  checked={factoryType === "new"}
                  onChange={() => handleFactoryTypeChange("new")}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">New/ Proposed Factory/ Greenfield Project</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="factoryType"
                  value="registered"
                  checked={factoryType === "registered"}
                  onChange={() => handleFactoryTypeChange("registered")}
                  className="w-4 h-4 text-blue-600"
                />
                <span className="text-gray-700">Registered Factory / Project</span>
              </label>
            </div>
          </div>

          {/* Registered Factory Message */}
          {factoryType === "registered" && (
            <div className="border border-red-300 bg-red-50 rounded px-4 py-4">
              <p className="text-red-600 text-md leading-relaxed">
                Find out your factory on the dashboard and apply for any enlisted service
                <br />
                Or click ADD REGISTERED FACTORY and create your factory profile{" "}
                <a href="/applicant-dashboard" className="text-blue-600 hover:underline font-medium flex items-center gap-2">
                  <FaHandPointRight />Go to Dashboard
                </a>
              </p>
            </div>
          )}

          {/* NEW FACTORY FLOW */}
          {factoryType === "new" && (
            <>

              {/* Row 1 (Service + Power Question for Registration) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Service */}
                <div>
                  <label className="block text-base font-semibold mb-2">
                    Select service <span className="text-red-500">*</span>
                  </label>

                  <select
                    value={selectedService}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="w-full px-3 py-2 border rounded"
                  >
                    <option value="">- Select -</option>
                    <option value="approval">Approval of Plan</option>
                    <option value="registration">Factory Registration & License</option>
                  </select>
                </div>

                {/* Power Question - Shows for Registration service */}
                {selectedService === "registration" && (
                  <div>
                    <label className="block text-base font-semibold mb-3">
                      Does Your Factory Use Power (Electrical / Mechanical / Both)? <span className="text-red-500">*</span>
                    </label>

                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="usesPower"
                          value="yes"
                          checked={usesPower === "yes"}
                          onChange={() => handlePowerChange("yes")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Yes</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="usesPower"
                          value="no"
                          checked={usesPower === "no"}
                          onChange={() => handlePowerChange("no")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Sub-service for Approval */}
                {selectedService === "approval" && (
                  <div>
                    <label className="block text-base font-semibold mb-2">
                      Select sub-service <span className="text-red-500">*</span>
                    </label>

                    <select
                      value={selectedSubService}
                      onChange={(e) => setSelectedSubService(e.target.value)}
                      className="w-full px-3 py-2 border rounded"
                    >
                      <option value="">- Select -</option>
                      <option value="newplan">New Plan</option>
                    </select>
                  </div>
                )}

              </div>

              {/* FOR REGISTRATION SERVICE - Worker & Chemical Questions when Power = Yes */}
              {selectedService === "registration" && usesPower === "yes" && (
                <>
                  {/* Worker Count 10+ Question */}
                  <div>
                    <label className="block text-base font-semibold mb-3">
                      Are the number of Workers likely to be employed including contractual workers or staff on any day 10 or more? <span className="text-red-500">*</span>
                    </label>

                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="workerCount10"
                          value="yes"
                          checked={workerCount10 === "yes"}
                          onChange={() => setWorkerCount10("yes")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Yes</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="workerCount10"
                          value="no"
                          checked={workerCount10 === "no"}
                          onChange={() => setWorkerCount10("no")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  {/* Chemical Product Question */}
                  <div>
                    <label className="block text-base font-semibold mb-3">
                      Do You Manufacture Any Chemical Product from the given list ? <a href="#"  onClick={() => setOpenModal(true)} className="text-blue-500 hover:underline">View Chemical Product List</a> <span className="text-red-500">*</span>
                    </label>

                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="manufacturesChemical"
                          value="yes"
                          checked={manufacturesChemical === "yes"}
                          onChange={() => setManufacturesChemical("yes")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Yes</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="manufacturesChemical"
                          value="no"
                          checked={manufacturesChemical === "no"}
                          onChange={() => setManufacturesChemical("no")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </>
              )}

              {/* FOR REGISTRATION SERVICE - Worker 20+ Question when Power = No */}
              {selectedService === "registration" && usesPower === "no" && (
                <div>
                  <label className="block text-base font-semibold mb-3">
                    Are the number of Workers likely to be employed including contractual workers or staff on any day 20 or more? <span className="text-red-500">*</span>
                  </label>

                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workerCount20"
                        value="yes"
                        checked={workerCount20 === "yes"}
                        onChange={() => setWorkerCount20("yes")}
                        className="w-4 h-4"
                      />
                      <span>Yes</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="workerCount20"
                        value="no"
                        checked={workerCount20 === "no"}
                        onChange={() => setWorkerCount20("no")}
                        className="w-4 h-4"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Power Question for Approval Plan */}
              {selectedService === "approval" && selectedSubService === "newplan" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Left Column - Power Question */}
                  <div>
                    <label className="block text-base font-semibold mb-3">
                      Does Your Factory Use Power (Electrical / Mechanical / Both)? <span className="text-red-500">*</span>
                    </label>

                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="usesPower"
                          value="yes"
                          checked={usesPower === "yes"}
                          onChange={() => handlePowerChange("yes")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>Yes</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="usesPower"
                          value="no"
                          checked={usesPower === "no"}
                          onChange={() => handlePowerChange("no")}
                          className="w-4 h-4 text-blue-600"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  {/* Right Column - Worker Count (10+) - Shows when Power = Yes */}
                  {usesPower === "yes" && (
                    <div>
                      <label className="block text-base font-semibold mb-3">
                        Are the number of Workers likely to be employed including contractual workers or staff on any day 10 or more? <span className="text-red-500">*</span>
                      </label>

                      <div className="flex gap-6">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="workerCount10"
                            value="yes"
                            checked={workerCount10 === "yes"}
                            onChange={() => setWorkerCount10("yes")}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span>Yes</span>
                        </label>

                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="workerCount10"
                            value="no"
                            checked={workerCount10 === "no"}
                            onChange={() => setWorkerCount10("no")}
                            className="w-4 h-4 text-blue-600"
                          />
                          <span>No</span>
                        </label>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Chemical Product Question - Shows when Approval Plan & Power = Yes */}
              {selectedService === "approval" && usesPower === "yes" && (
                <div>
                  <label className="block text-base font-semibold mb-3">
                    Do You Manufacture Any Chemical Product from the given list ? <a href="#"  onClick={() => setOpenModal(true)} className="text-blue-500 hover:underline">View Chemical Product List</a> <span className="text-red-500">*</span>
                  </label>

                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="manufacturesChemical"
                        value="yes"
                        checked={manufacturesChemical === "yes"}
                        onChange={() => setManufacturesChemical("yes")}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>Yes</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="manufacturesChemical"
                        value="no"
                        checked={manufacturesChemical === "no"}
                        onChange={() => setManufacturesChemical("no")}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Workers 20+ question appears in RIGHT SIDE - Shows when Approval Plan & Power = No */}
              {selectedService === "approval" && usesPower === "no" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* EMPTY LEFT COLUMN → FOR ALIGNMENT */}
                  <div></div>

                  {/* RIGHT COLUMN */}
                  <div>
                    <label className="block text-base font-semibold mb-3">
                      Are the number of Workers likely to be employed including contractual workers or staff on any day 20 or more? <span className="text-red-500">*</span>
                    </label>

                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="workerCount20"
                          value="yes"
                          checked={workerCount20 === "yes"}
                          onChange={() => setWorkerCount20("yes")}
                          className="w-4 h-4"
                        />
                        <span>Yes</span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="workerCount20"
                          value="no"
                          checked={workerCount20 === "no"}
                          onChange={() => setWorkerCount20("no")}
                          className="w-4 h-4"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                </div>
              )}

              {/* Green Message Box - No Power, No 20+ Workers - FOR REGISTRATION */}
              {selectedService === "registration" && (workerCount20 === "no" || workerCount10 === "no") && (
                <div>
                  <div className="bg-green-500 text-white font-medium px-4 py-3 rounded w-fit mb-3">
                    Your Factory is categorised under <b>Section 85</b>
                  </div>
                  <button
                    className="bg-[#1C1F23] text-white px-6 py-2 rounded hover:bg-black transition uppercase"
                  >
                    APPLY REGISTRATION
                  </button>
                </div>
              )}

              {/* Section 2m(ii) - Yes 20+ or 10+ Workers - FOR REGISTRATION */}
              {selectedService === "registration" && (workerCount20 === "yes" || workerCount10 === "yes") && (
                <div>
                  <div className="bg-green-500 text-white font-medium px-4 py-3 rounded w-fit mb-3">
                    Your Factory is categorised under <b>Section 2m(ii)</b>
                  </div>
                  <div className="border border-red-400 bg-red-50 px-4 py-3 rounded">
                    <p className="text-red-600 text-sm leading-relaxed">
                      Your factory under this category so you need to first apply for approval of plan after approval of plan you can apply for registration. Find out your factory from dashboard and apply for Registration.
                    </p>
                  </div>
                </div>
              )}

              {/* Green Message Box - No Power, No 20+ Workers - FOR APPROVAL PLAN */}
              {selectedService === "approval" && (workerCount20 === "no" || workerCount10 === "no") && (
                <div className="border border-green-600 bg-green-500 text-white px-4 py-4 rounded">
                  Your Factory is categorised under <b>Section 85</b>. You do not require to apply for Approval of Plan,
                  select other service.
                </div>
              )}

              {/* Section 2m(ii) - No Power, Yes 20+ Workers - FOR APPROVAL PLAN */}
              {selectedService === "approval" && (workerCount20 === "yes" || workerCount10 === "yes") && (
                <div className="mt-4">
                  <div className="bg-green-500 text-white font-medium px-4 py-3 rounded w-fit">
                    Your Factory is categorised under <b>Section 2m(ii)</b>
                  </div>

                  <button
                    className="mt-3 bg-[#1C1F23] text-white px-6 py-2 rounded hover:bg-black transition"
                  >
                    APPLY NEW PLAN
                  </button>
                </div>
              )}

            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ApplyNewEService;