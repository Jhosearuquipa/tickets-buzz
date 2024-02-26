import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { createTicket } from "../services/WSTickets";

export async function action({ request }) {
   const formData = await request.formData();
   const newTicket = Object.fromEntries(formData);
   const ticket = await createTicket(newTicket);
   return redirect(`/`);
}
export default function AddTicket() {
   const navigate = useNavigate();

   return (
      <Form method="post" id="ticket-add-form">
         <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
               <h3 className="text-base font-semibold leading-7 text-gray-900">Nuevo ticket</h3>

               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-full">
                     <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Nombre</label>
                     <div className="mt-2">
                        <input type="text" name="title" id="title" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                     </div>
                  </div>
                  <div className="col-span-full">
                     <label htmlFor="level" className="block text-sm font-medium leading-6 text-gray-900">Nivel de dificultad</label>

                     <div className="mt-2">
                        <select id="level_id" name="level_id" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                           <option value="">Elegir...</option>
                           <option value={1}>Alto</option>
                           <option value={2}>Medio</option>
                           <option value={3}>Bajo</option>
                        </select>
                     </div>
                  </div>
                  <div className="col-span-full">
                     <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Descripción</label>
                     <div className="mt-2">
                        <textarea id="description" name="description" rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => {
               navigate(-1);
            }}>Cancelar</button>
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Guardar</button>
         </div>
      </Form>
   );
}