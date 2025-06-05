import React from "react";
import { useDispatch } from "react-redux";
import { logout } from '../../redux/slices/loginSlice';

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();



   const handleLogout = () => {
    dispatch(logout());
  };
 
  return (
    <div className="bg-gray-900 text-white h-full flex flex-col w-64">
      <div className="px-4 py-6 flex items-center">
   
        </div>

  
      <div className="p-4 border-t border-blue-800">
        <button
           onClick={handleLogout}
          className="flex items-center text-blue-100 hover:text-white w-full"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="ml-3">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
