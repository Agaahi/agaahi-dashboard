import React, { useState } from "react";
import { updatePassword } from "aws-amplify/auth";

const Settings = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleUpdatePassword() {
    try {
      await updatePassword({ oldPassword, newPassword });
      setMessage("Password successfully updated");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      console.error(err);
      setMessage(err.message);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-xl font-semibold mb-4">Change Password</h1>
      {message && (
        <div className="mb-4 text-center text-sm font-medium text-green-600">
          {message}
        </div>
      )}
      <div className="mb-4">
        <label
          htmlFor="oldPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Old Password
        </label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-gray-700"
        >
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleUpdatePassword}
        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Change Password
      </button>
    </div>
  );
};

export default Settings;
