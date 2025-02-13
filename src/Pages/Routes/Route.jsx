import { createBrowserRouter } from "react-router-dom";
import Login from "../Registration/Login";
import Addtickets from "../UserDashboard/AddUsertickets/Addtickets";
import Managetickets from "../UserDashboard/ManageTickets/Managetickets";
import Admindashboard from "../AdminDashboard/AdminDash/Admindashboard";
import Manageuser from "../AdminDashboard/ManageUsers/Manageuser";
import Managealltickets from "../AdminDashboard/ManageAllTickets/Managealltickets";
import Signup from "../Registration/Signup";
import Userdash from "../UserDashboard/UserDash/Userdash";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Login />
    },
    {
        path: "/sign-up",
        element: <Signup></Signup>
    },
    {
        path: "/user-dashboard",
        element:<Userdash/>
    },
    {
        path: "/add-tickets",
        element: <Addtickets />
    },
    {
        path: "/manage-tickets",
        element: <Managetickets />
    },
    {
        path: "/admin-dashboard",
        element: <Admindashboard></Admindashboard>
    },
    {
        path: "/manage-users",
        element: <Manageuser></Manageuser>
    },
    {
        path: "manage-all-tickets",
        element: <Managealltickets></Managealltickets>
    }
]);