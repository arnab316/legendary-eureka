import React, { useState, useEffect } from "react";
import axios from "axios";

const AddUser: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedZone, setSelectedZone] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const [zones, setZones] = useState<any[]>([]);
  const [roles, setRoles] = useState<any[]>([]);
  const [showGuide, setShowGuide] = useState(false);

  // ======================
  // Fetch Zones
  // ======================
  useEffect(() => {
    const fetchZones = async () => {
      try {
        const res = await axios.get("http://localhost:4000/user/zones");
        setZones(Array.isArray(res.data?.data) ? res.data.data : []);
      } catch (err) {
        console.log("Error fetching zones:", err);
      }
    };
    fetchZones();
  }, []);

  // ======================
  // Fetch Roles
  // ======================
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const res = await axios.get("http://localhost:4000/user/roles");
        setRoles(Array.isArray(res.data?.data) ? res.data.data : []);
      } catch (err) {
        console.log("Error fetching roles:", err);
      }
    };
    fetchRoles();
  }, []);

  // ======================
  // Password Strength (Green Only + Key-by-Key Fill)
  // ======================
  const getPasswordStrength = (pwd: string) => {
    if (pwd.length === 0) return { percent: 0, label: "" };

    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasLetter = hasLower || hasUpper;
    const hasNum = /[0-9]/.test(pwd);
    const hasSymbol = /[^A-Za-z0-9]/.test(pwd);

    const isStrong =
      pwd.length >= 6 && hasLower && hasUpper && hasNum && hasSymbol;

    if (pwd.length < 6) {
      const percent = Math.floor((pwd.length / 6) * 50);
      return { percent, label: "Weak" };
    }

    if (pwd.length < 6 && !isStrong) {
      return { percent: 50, label: "Weak" };
    }

    const isGood =
      pwd.length >= 6 &&
      ((hasLetter && hasNum) ||
        (hasNum && hasSymbol) ||
        (hasLetter && hasSymbol));

    if (isGood && !isStrong) return { percent: 70, label: "Good" };
    if (!isStrong) return { percent: 80, label: "Fair" };

    return { percent: 100, label: "Strong" };
  };

  const strength = getPasswordStrength(password);

  // ======================
  // Add User Submit
  // ======================
  const handleAddUser = async () => {
    if (
      !username ||
      !password ||
      !confirmPassword ||
      !email ||
      !selectedZone ||
      !selectedRole
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Password & Confirm Password do not match");
      return;
    }

    const payload = {
      username,
      password,
      email,
      role_id: Number(selectedRole),
      zone_id: Number(selectedZone),
    };

    try {
      await axios.post("http://localhost:4000/user/create", payload);
      alert("User created successfully!");

      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setSelectedZone("");
      setSelectedRole("");
    } catch (err: any) {
      if (err?.response?.status === 400) {
        alert("User already exists!");
      } else {
        alert("Failed to create user");
      }
    }
  };

  const passwordMatch = confirmPassword.length > 0
    ? password === confirmPassword
    : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#202C71]">Add Officer</h1>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#" className="flex items-center gap-1 hover:text-gray-800">
            <span>🏠</span>
            <span>Home</span>
          </a>
          <span className="text-blue-600">Dashboard</span>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-[#F1EEF3] rounded shadow">
          <div className="px-4 py-3 border-b">
            <h2 className="text-sm font-medium text-gray-700">
              Add New Officer
            </h2>
          </div>

          <div className="p-6">
            {/* Zone */}
            <div className="mb-6">
              <label className="block text-sm font-medium bg-[#4C325D] text-white px-3 py-2 mb-2">
                Zone Name <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="">- Select -</option>
                {zones.map((z) => (
                  <option key={z.n_zone_id} value={z.n_zone_id}>
                    {z.s_zone_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Username */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center gap-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setShowGuide(true)}
                  className="w-48 bg-white border border-gray-300 rounded px-3 py-2 text-sm"
                />

                <div>
                  <div className="text-xs text-gray-600 mb-1 flex justify-between">
                    <span>Password strength:</span>
                    <span className="font-semibold">{strength.label}</span>
                  </div>

                  <div className="bg-[#C4C4C4] rounded-full h-2 w-sm">
                    <div
                      className="h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${strength.percent}%`,
                        backgroundColor: "green",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password <span className="text-red-500">*</span>
              </label>

              <div className="flex items-center gap-4">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-48 bg-white border border-gray-300 rounded px-3 py-2 text-sm"
                />

                {/* MATCH STATUS */}
                {passwordMatch !== null && (
                  <p
                    className={`text-sm font-semibold ${
                      passwordMatch ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    Passwords match: {passwordMatch ? "yes" : "no"}
                  </p>
                )}
              </div>
            </div>

            {/* Password Guide */}
            {showGuide && (
              <div className="mb-6 mt-2 border border-black rounded p-3 text-sm">
                <p className="font-semibold mb-1">
                  To make your password stronger:
                </p>
                <ul className="list-disc ml-5">
                  <li>Make it at least 6 characters</li>
                  <li>Add lowercase letters</li>
                  <li>Add uppercase letters</li>
                  <li>Add numbers</li>
                  <li>Add punctuation</li>
                </ul>
              </div>
            )}

            {/* Email */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm"
              />
            </div>

            {/* Role */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Officer Role <span className="text-red-500">*</span>
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="">- Select -</option>
                {roles.map((r) => (
                  <option key={r.n_rid} value={r.n_rid}>
                    {r.s_name}
                  </option>
                ))}
              </select>
            </div>

            {/* Add Button */}
            <div>
              <button
                onClick={handleAddUser}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium px-6 py-2 rounded text-sm"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
