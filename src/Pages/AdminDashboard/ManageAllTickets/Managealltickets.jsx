import React, { useEffect, useState } from "react";
import Adminsidebar from "../AdminSidebar/Adminsidebar";


const Managealltickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tickets")
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to DELETE?");
    if (proceed) {
      fetch(`http://localhost:3000/tickets/${id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then(() => {
          setTickets(tickets.filter(ticket => ticket._id !== id));
        });
    }
  };

  const handleUpdate = (id, newStatus) => {
    fetch(`http://localhost:3000/tickets/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then(() => {
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket._id === id ? { ...ticket, status: newStatus } : ticket
          )
        );
      })
      .catch((error) => console.error("Error updating status:", error));
  };


  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-500";
      case "Resolved":
        return "bg-green-500";
      case "Closed":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Adminsidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-10">
        <h1 className="text-3xl font-bold">Manage Your Tickets</h1>
        <p className="mt-2 text-gray-700">View, update, and delete your tickets.</p>

        <div className="mt-6 space-y-4">
          {tickets.length > 0 ? (
            tickets.map((ticket) => (
              <div key={ticket.id} className="block lg:flex justify-between items-center bg-white p-4 shadow-md rounded-lg border">
                {/* Ticket Info */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">🎟️ {ticket.subject}</h2>
                  <p className="text-gray-600 mt-1">📝 {ticket.description}</p>
                </div>
                <div className="block lg:flex space-x-2 mt-5 lg:mt-0">
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-white px-3 py-1 rounded-lg text-sm ${getStatusColor(ticket.status)}`}
                    >
                      {ticket.status}
                    </span>

                    <select
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md border border-gray-300"
                      defaultValue={ticket.status}
                      onChange={(e) => handleUpdate(ticket._id, e.target.value)}
                    >
                      <option value="Open">Open</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
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

export default Managealltickets;
