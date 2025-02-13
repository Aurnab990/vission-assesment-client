import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`w-64 bg-gray-900 text-white p-5 space-y-4 fixed h-full transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-64"} md:relative md:translate-x-0`}>
                <h2 className="text-2xl font-bold">User Dashboard</h2>
                <ul className="space-y-2">
                    <li className="hover:bg-gray-700 p-2 rounded-md">
                        <Link to={"/user-dashboard"}>
                        <a href="" className="flex items-center gap-2">
                            <span className="text-lg">🏠</span> Home
                        </a>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded-md">
                        <Link to={"/add-tickets"}>
                        <a href="" className="flex items-center gap-2">
                            <span className="text-lg">📋</span> Add tickets
                        </a>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700 p-2 rounded-md">
                        <Link to={"/manage-tickets"}>
                        <a href="" className="flex items-center gap-2">
                            <span className="text-lg">⚙️</span> Manage tickets
                        </a>
                        </Link>
                    </li>
                    <li className="hover:bg-red-700 p-2 rounded-md">
                        <a href="#" className="flex items-center gap-2 text-red-400">
                            <span className="text-lg">🚪</span> Logout
                        </a>
                    </li>
                </ul>
            </div>
            
            {/* Burger Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="absolute top-5 left-5 md:hidden text-gray-900 bg-gray-200 p-2 rounded-md">
                ☰
            </button>
            
        </div>
    );
};

export default Sidebar;
