// src/pages/InstructionPage.tsx
import React from "react";
import CardItem from "../components/UserManualCard";

const UserManual: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <CardItem
          image="/Images/approve.png"
          heading="Standard Operating Procedure for Creating New User Registration"
          buttonText="CLICK HERE FOR INSTRUCTION MANUAL"
          colorCode="#E41F7B"
        />

        <CardItem
          image="/Images/registration.png"
          heading="Standard Operating Procedure for Approval of Plan"
          buttonText="CLICK HERE FOR INSTRUCTION MANUAL"
          colorCode="#FF9900"
        />

        <CardItem
          image="/Images/renew.png"
          heading="Standard Operating Procedure for Registration & Grant of License"
          buttonText="CLICK HERE FOR INSTRUCTION MANUAL"
          colorCode=""
        />

        {/* This card falls to next row automatically */}
        <CardItem
          image="/Images/amendment.png"
          heading="Standard Operating Procedure for Auto Renewal"
          buttonText="CLICK HERE FOR INSTRUCTION MANUAL"
          colorCode=""
        />

      </div>
    </div>
  );
};

export default UserManual;
