import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../redux/userSlice";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, searchTerm } = useSelector((state) => state.users);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleView = (userId) => {
    navigate(`/goals/${userId}`);
  };

  const filteredUsers = users.filter((user) => {
    const propertyValue = user.property || "";
    return propertyValue.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="min-h-screen p-8 bg-slate-200 shadow-2xl rounded-lg">
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg border-collapse border border-slate-300">
          <thead className="border-b bg-indigo-300 border-gray-300">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-left font-semibold">Email</th>
              <th className="px-4 py-3 text-left font-semibold">View Goal</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b last:border-none hover:bg-gray-50">
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleView(user.id)}
                      className="px-4 py-2 rounded-md border border-blue-300 hover:bg-blue-500 shadow-sm hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center text-gray-500 py-6">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
