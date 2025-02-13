import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";

const AddTickets = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const subject = form.subject.value;
    const description = form.description.value;
    const status = "pending";

    const ticketData = {subject,description,status};

    fetch('http://localhost:3000/tickets',{
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(ticketData)
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      alert("Ticket successfully Added");
    })
    .catch(error=>{
      alert('Failed!');
      console.log(error);
    })
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-5 lg:ml-44">
        <h1 className="text-3xl font-bold">Add a New Ticket</h1>
        <p className="mt-2 text-black-700">Submit your complaint or request here.</p>

        <div className="mt-6 w-full lg:w-2/3 bg-green-400 p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg text-white font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter subject"
                required
              />
            </div>

            <div>
              <label className="block text-lg text-white font-medium">Description</label>
              <textarea
                name="description"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter ticket description"
                rows="4"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTickets;
