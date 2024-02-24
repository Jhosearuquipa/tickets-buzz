import React, { useState } from 'react';

export default function TicketItem({ issue, deleteIssue, updateIssue }) {

   const [modeEdit, setModeEdit] = useState(false);
   const [item, setItem] = useState(issue);

   const toggle = () => {
      setModeEdit(!modeEdit);
      setItem(issue);
   };

   const handleTitleChange = (ev) => {
      setItem({ ...item, title: ev.target.value });
   };

   const handleDescriptionChange = (ev) => {
      setItem({ ...item, description: ev.target.value });
   };

   const edit = () => {
      updateIssue(item);
      setModeEdit(false);
   }

   return (
      <>
         <li className="flex justify-between gap-x-6 py-5" key={issue.id}>
            <div className="flex min-w-0 gap-x-4">
               <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{issue.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{issue.description}</p>
               </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
               <p className="text-sm leading-6 text-gray-900">Business Relations</p>
               <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                     <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p className="text-xs leading-5 text-gray-500">{issue.level}</p>
               </div>
            </div>
         </li>
      </>
   )
}
