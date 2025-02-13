import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar/Sidebar";

const ManageTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to DELETE?");
    if(proceed){
      fetch(`http://localhost:3000/tickets/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setTickets(tickets.filter(ticket => ticket._id !== id));
      });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-green-500";
      case "Resolved":
        return "bg-blue-500";
      case "Closed":
        return "bg-gray-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-10">
        <h1 className="text-3xl font-bold">Manage Your Tickets</h1>
        <p className="mt-2 text-gray-700">View, update, and delete your tickets.</p>

        <div className="mt-6 space-y-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <div key={ticket.id} className="block lg:flex justify-between items-center bg-white p-4 shadow-md rounded-lg border">
                
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">🎟️ {ticket.subject}</h2>
                  <p className="text-gray-600 mt-1">📝 {ticket.description}</p>
                </div>

                
                <span className={`text-white px-3 py-1 rounded-lg text-sm ${getStatusColor(ticket.status)}`}>
                  {ticket.status}
                </span>

        
                <div className="block lg:flex space-x-2 mt-5 lg:mt-0">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    ✏️ Edit
                  </button>
                  <button 
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={() => handleDelete(ticket._id)}
                  >
                    ❌ Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No tickets available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageTickets;
