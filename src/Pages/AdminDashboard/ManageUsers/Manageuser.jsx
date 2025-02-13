import React, { useEffect, useState } from "react";
import Adminsidebar from "../AdminSidebar/Adminsidebar";

const ManageUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to DELETE?");
    if(proceed){
      fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          alert("User deleted successfully!");
          setUsers(users.filter(user => user._id !== id));
        });
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Adminsidebar />

      {/* Main Content */}
      <div className="flex-1 p-10 ml-5 lg:ml-10">
        <h1 className="text-3xl font-bold">Manage your users here</h1>
        <p className="mt-2 text-black-700">You can delete users from here.</p>

        {/* User List */}
        <div className="mt-5 bg-white p-4 rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-black">
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b">
                  <td className="p-3">{user.username}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && <p className="text-gray-500 mt-3">No users found.</p>}
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
