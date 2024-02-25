import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function TicketForm({ issues, setIssues }) {
   const navigate = useNavigate();

   const initialIssues = {
      id: '',
      name: '',
      description: '',
      level: '',
   };

   const [issue, setIssue] = useState(initialIssues);

   const addIssue = (ev) => {
      ev.preventDefault();

      if (issue.name.trim() === "" || issue.description.trim() === "") { return }

      setIssues([...issues, { ...issue, id: issues.length + 1 }]);
      setIssue(initialIssues);

      setIssue(initialIssues);

      navigate('/');

   };

   return (
      <form onSubmit={addIssue} key={issue.id}>
         <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
               <h2 className="text-base font-semibold leading-7 text-gray-900">Información del ticket </h2>
               <p className="mt-1 text-sm leading-6 text-gray-600">Todos los campos son obligatorios.</p>

               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                     <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                     <div className="mt-2">
                        <input type="text" name="name" id="name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                     </div>
                  </div>

                  <div className="col-span-full">
                     <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                     <div className="mt-2">
                        <textarea id="description" name="description" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                     </div>
                  </div>

                  <div className="sm:col-span-3">
                     <label htmlFor="level" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                     <div className="mt-2">
                        <select id="level" name="level" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                           <option>Elegir...</option>
                           <option>Alto</option>
                           <option>Medio</option>
                           <option>Bajo</option>
                        </select>
                     </div>
                  </div>


               </div>
            </div>
         </div>

         <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
               <Link to={`/`}>Cancelar</Link>
            </button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
         </div>
      </form>
   )
}
