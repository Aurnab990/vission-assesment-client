import React, { useEffect, useState } from "react";
import Adminsidebar from "../AdminSidebar/Adminsidebar";
import { Link } from "react-router-dom";

const Admindashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);
  const [openTickets, setOpenTickets] = useState(0);
  const [resolvedTickets, setResolvedTickets] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUserCount(data.length-1));

    fetch("http://localhost:3000/tickets")
      .then((res) => res.json())
      .then((data) => {
        setTicketCount(data.length);
        setOpenTickets(data.filter(ticket => ticket.status === "Open").length);
        setResolvedTickets(data.filter(ticket => ticket.status === "Resolved").length);
      });
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Adminsidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:ml-10">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="mt-2 text-gray-700">Overview of users and tickets.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="bg-white p-5 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p className="text-2xl font-bold">{userCount}</p>
          </div>

          <div className="bg-white p-5 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">Total Tickets</h2>
            <p className="text-2xl font-bold">{ticketCount}</p>
          </div>

          <div className="bg-white p-5 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">Open Tickets</h2>
            <p className="text-2xl font-bold">{openTickets}</p>
          </div>

          <div className="bg-white p-5 shadow rounded-lg text-center">
            <h2 className="text-xl font-semibold">Resolved Tickets</h2>
            <p className="text-2xl font-bold">{resolvedTickets}</p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/manage-users" className="block bg-blue-500 text-white text-center p-4 rounded-lg hover:bg-blue-600">
            Manage Users
          </Link>
          <Link to="/manage-all-tickets" className="block bg-green-500 text-white text-center p-4 rounded-lg hover:bg-green-600">
            Manage Tickets
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Admindashboard;
