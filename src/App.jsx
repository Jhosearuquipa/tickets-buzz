import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";


import './App.css'
import Sidebar from './components/Sidebar';
import TicketList from './pages/TicketList';

export default function App() {

   const [issues, setIssues] = useState([
      { id: 1, title: 'issue1', description: 'lorem issue' },
      { id: 2, title: 'issue1', description: 'lorem issue' },
      { id: 3, title: 'issue1', description: 'lorem issue' },
      { id: 4, title: 'issue1', description: 'lorem issue' },
      { id: 5, title: 'issue1', description: 'lorem issue' },
      { id: 6, title: 'issue1', description: 'lorem issue' },
      { id: 7, title: 'issue1', description: 'lorem issue' },
      { id: 8, title: 'issue1', description: 'lorem issue' },
   ]);

   return (
      <>
         <div className="container mx-auto p-4" id="detail">
            <div className='text-right'>
               <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-right text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <Link to={`create`}>+ Agregar</Link>
               </button>
            </div>
         </div>
         <TicketList />

         <div className="container mx-auto p-4" id="detail">
            <Outlet />
         </div>
      </>
   )
}