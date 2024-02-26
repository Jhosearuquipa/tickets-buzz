import { Form, useLoaderData } from "react-router-dom";
import { getTicket } from "../services/WSTickets.jsx";

export async function loader({ params }) {
   if (Object.keys(params).length === 0) {
      const ticket = {
         title: '',
         description: '',
      };
      return { ticket };
   } else {
      const ticket = await getTicket(params.ticketId);
      return { ticket };
   }
   //  

}

export default function Ticket() {
   const { ticket } = useLoaderData();

   return (
      <div id="ticket">
         <div className="mt-6 flex items-center justify-end gap-x-6">
            <Form action="edit">
               <button className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Editar</button>
            </Form>
         </div>
         <div>
            <div className="px-4 sm:px-0">
               <h3 className="text-base font-semibold leading-7 text-gray-900">Ticket: #{ticket.id}</h3>
            </div>
            <div className="mt-6 border-t border-gray-100">
               <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt className="text-sm font-medium leading-6 text-gray-900">Nombre</dt>
                     <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ticket.title}</dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt className="text-sm font-medium leading-6 text-gray-900">Nivel de dificultad</dt>
                     <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0"><span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">{ticket.level}</span></dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                     <dt className="text-sm font-medium leading-6 text-gray-900">Descripción</dt>
                     <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{ticket.description}</dd>
                  </div>
               </dl>
            </div>
         </div>
      </div>
   );
}

