import React from 'react';
import ReactDOM from 'react-dom/client'
import {
   createBrowserRouter,
   RouterProvider,
} from "react-router-dom";

import App, {
   loader as appLoader
} from './routes/App.jsx';

import './App.css';
import ErrorPage from './ErrorPage.jsx';
import Ticket, {
   loader as ticketLoader,
} from './routes/Tickets.jsx';

import AddTicket, {
   action as addAction,
} from './routes/Add.jsx';

import EditTicket, {
   action as editAction,
} from './routes/Edit.jsx';

import {
   action as destroyAction
} from "./routes/Destroy.jsx";

import Index from './routes/Index.jsx';

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      loader: appLoader,
      children: [
         {
            errorElement: <ErrorPage />,
            children: [
               {
                  index: true,
                  element: <Index />
               },
               {
                  path: "tickets/create",
                  element: <AddTicket />,
                  action: addAction,
               },
               {
                  path: "tickets/:ticketId",
                  element: <Ticket />,
                  loader: ticketLoader,
               },
               {
                  path: "tickets/:ticketId/edit",
                  element: <EditTicket />,
                  loader: ticketLoader,
                  action: editAction,
               },
               {
                  path: "tickets/:ticketId/destroy",
                  action: destroyAction,
                  errorElement: <div>Oops! There was an error.</div>,
               },
            ]
         },
      ]
   },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>,
)
