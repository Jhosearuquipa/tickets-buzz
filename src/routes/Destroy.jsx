import { redirect } from "react-router-dom";
import { deleteTicket } from "../services/WSTickets";

export async function action({ params }) {
   await deleteTicket(params.ticketId);
   return redirect("/");
}