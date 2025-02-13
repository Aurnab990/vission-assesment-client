import React from 'react';
import Sidebar from '../SideBar/Sidebar';

const Userdash = () => {
    return (
        <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-5 lg:ml-44">
        <h1 className="text-3xl font-bold">This is User Dashboard</h1>
        <p className="mt-2 text-black-700">Working.............</p>

        
      </div>
    </div>
    );
};

export default Userdash;