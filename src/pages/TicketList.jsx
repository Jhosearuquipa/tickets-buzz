import React from 'react'
import TicketItem from '../components/TicketItem'

export default function TicketList() {
   return (
      <div className="container mx-auto p-8">
         <p>Listado de tickets</p>
         <ul role="list" class="divide-y divide-gray-100">
            <TicketItem />
         </ul>
      </div>
   )
}
