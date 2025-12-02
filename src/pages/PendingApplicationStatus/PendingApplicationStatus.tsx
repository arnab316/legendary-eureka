import React from 'react';

import ApplicationHeader from '@/components/PendingApplicationViewText';
import ForwardHistoryComponent from '@/components/ApplicationStatus/ApplicationStatus';
const PendingApplicationStatus: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      {/* Application Header */}
      <ApplicationHeader />

      {/* Title */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Application is submitted at AD end
        </h2>
      </div>

      {/* Table */}
      <ForwardHistoryComponent />
      <div className="mb-10"></div>
    </div>
  );
};

export default PendingApplicationStatus;