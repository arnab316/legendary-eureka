import React, { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
const Profile: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [email, setEmail] = useState('r1@gmx.com');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [timezone, setTimezone] = useState('Asia/Kolkata');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value.length === 0) {
      setPasswordStrength('');
    } else if (value.length < 6) {
      setPasswordStrength('Weak');
    } else if (value.length < 10) {
      setPasswordStrength('Medium');
    } else {
      setPasswordStrength('Strong');
    }
  };

  const handleSave = () => {
    console.log('Saving profile settings...');
  };

  return (
    <div className=" bg-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">robi_ins</h1>
        <div className="flex gap-4 text-sm">
          <a href="#" className="text-gray-600 hover:text-gray-800">🏠 Home</a>
          <a href="#" className="text-blue-600 hover:text-blue-800">Dashboard</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto p-6">
        {/* Current Password Section */}
        <div className="bg-white rounded shadow mb-4 p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-600 mt-2">
              Enter your current password to change the E-mail address or Password.{' '}
              <a href="#" className="text-blue-600 hover:underline">
                Request new password.
              </a>
            </p>
          </div>

          {/* Email Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-mail address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-600 mt-2">
              A valid e-mail address. All e-mails from the system will be sent to this address. The e-mail address is not made public and will only be used if you wish to receive a new password or wish to receive certain news or notifications by e-mail.
            </p>
          </div>

          {/* Password Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => handlePasswordChange(e.target.value)}
              className="w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="mt-1 text-sm text-gray-600">
              Password strength: <span className="font-medium">{passwordStrength}</span>
            </div>
          </div>

          {/* Confirm Password Section */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-64 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-600 mt-2">
              To change the current user password, enter the new password in both fields.
            </p>
          </div>
        </div>

        {/* Picture Section */}
        <div className="bg-white rounded shadow mb-4">
          <div className="bg-[#4771A7] text-white px-4 py-2 font-medium">
            Picture
          </div>
          <div className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload picture
            </label>
            <input
              type="file"
              className="text-sm text-gray-600"
            />
            <p className="text-sm text-gray-600 mt-2">
              Your virtual face or picture. Pictures larger than 1024x1024 pixels will be scaled down.
            </p>
          </div>
        </div>

        {/* Locale Settings Section */}
        <div className="bg-white rounded shadow mb-4">
          <div className="bg-[#4771A7] text-white px-4 py-2 font-medium flex items-center">
            <IoMdArrowDropdown size={23}/>LOCALE SETTINGS
          </div>
          <div className="p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time zone
            </label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Asia/Kolkata">Asia/Kolkata. Tuesday, 18 November, 2025 - 18:49 +0530</option>
              <option value="America/New_York">America/New_York</option>
              <option value="Europe/London">Europe/London</option>
              <option value="Asia/Tokyo">Asia/Tokyo</option>
            </select>
            <p className="text-sm text-gray-600 mt-2">
              Select the desired local time and time zone. Dates and times throughout this site will be displayed using this time zone.
            </p>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 border border-gray-400 text-sm font-medium"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;