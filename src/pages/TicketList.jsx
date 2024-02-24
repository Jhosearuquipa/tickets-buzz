import React from 'react'
import TicketItem from '../components/TicketItem'

export default function TicketList({ issues, setIssues }) {

   const deleteIssue = (id) => {
      const newIssue = issues.filter(issue => id !== issue.id);
      setIssues(newIssue);
   }

   const updateIssue = (newIssue) => {

      setIssues(
         issues.map(issue => issue.id === newIssue.id ? newIssue : issue)
      );
   }

   return (
      <div className="container mx-auto p-8">
         <p>Listado de tickets</p>
         <ul role="list" className="divide-y divide-gray-100">
            {issues.map((issue) => {
               return (
                  <TicketItem key={issue.id} updateIssue={updateIssue} issue={issue} deleteIssue={deleteIssue} />
               );
            })}
         </ul>
      </div>
   )
}
