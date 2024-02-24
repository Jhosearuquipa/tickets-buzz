import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
   return (
      <div className="w-full md:w-40 bg-gray-800 text-white p-4">
         <nav>
            <ul>
               <li>
                  <Link to={`contacts/1`}>Your Name</Link>
               </li>
               <li>
                  <Link to={`contacts/2`}>Your Friend</Link>
               </li>
            </ul>
         </nav>
      </div>
   );
};

export default Sidebar;