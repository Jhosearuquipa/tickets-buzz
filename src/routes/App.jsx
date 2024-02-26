import { useEffect } from "react";

import {
   Link,
   Outlet,
   NavLink,
   useLoaderData,
   Form,
   redirect,
   useNavigation,
   useSubmit
} from "react-router-dom";

import { getTickets } from "../services/WSTickets.jsx";
import GiphySelector from "../services/GiphySelector.jsx";


export async function loader({ request }) {
   const url = new URL(request.url);
   const q = url.searchParams.get("q");
   const tickets = await getTickets(q);
   return { tickets, q };
}



export default function App() {
   const { tickets, q } = useLoaderData();
   const navigation = useNavigation();
   const submit = useSubmit();

   const searching =
      navigation.location &&
      new URLSearchParams(navigation.location.search).has(
         "q"
      );

   useEffect(() => {
      document.getElementById("q").value = q;
   }, [q]);

   return (
      <>
         <div id="sidebar">
            <h1>Jhoselyn Aruquipa </h1>
            <div>
               <Form id="search-form" role="search">
                  <input
                     id="q"
                     className={searching ? "loading" : ""}
                     aria-label="Search tickets"
                     placeholder="Search"
                     type="search"
                     name="q"
                     defaultValue={q}
                     onChange={(event) => {
                        const isFirstSearch = q == null;
                        submit(event.currentTarget.form, {
                           replace: !isFirstSearch,
                        });
                     }}
                  />
                  <div
                     id="search-spinner"
                     aria-hidden
                     hidden={!searching}
                  />
                  <div
                     className="sr-only"
                     aria-live="polite"
                  ></div>
               </Form>
               <Link to={`tickets/create`}>
                  <button type="button" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Nuevo</button>
               </Link>
            </div>
            <nav>
               {tickets.length ? (
                  <ul className="divide-y divide-gray-100">
                     {tickets.map((ticket) => (
                        <li key={ticket.id} className="flex justify-between gap-x-6 py-2">
                           <NavLink
                              to={`tickets/${ticket.id}`}
                              className={({ isActive, isPending }) =>
                                 isActive
                                    ? "active"
                                    : isPending
                                       ? "pending"
                                       : ""
                              }
                           >

                              <div className="flex min-w-0 gap-x-4">
                                 <GiphySelector difficultyLevel={ticket.level_id} />
                                 <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{ticket.title}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{ticket.description}</p>
                                 </div>
                              </div>
                              <div className="mt-1 flex items-center gap-x-1.5">
                                 <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                 </div>
                                 <p className="text-xs leading-5 text-gray-500">{ticket.level_id}</p>
                              </div>

                           </NavLink>
                        </li>
                     ))}
                  </ul>
               ) : (
                  <p>
                     <i>No tickets</i>
                  </p>
               )}
            </nav>
         </div>
         <div id="detail" className={
            navigation.state === "loading" ? "loading" : ""
         }>
            <Outlet />
         </div>
      </>
   );
}