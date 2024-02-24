import { Outlet, Link } from "react-router-dom";

export default function Root() {
   return (
      <>
         <div id="sidebar">
            <h1>React Router Contacts</h1>
            <div>

            </div>
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
         <div className="flex-1 p-4" id="detail">
            <Outlet />
         </div>
      </>
   );
}