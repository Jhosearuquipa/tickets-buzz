import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

export async function getTickets(query) {
   try {
      const response = await fetch(`http://localhost/tickets-api/public/api/issues`);
      if (!response.ok) {
         throw new Error(`Error al obtener tickets: ${response.statusText}`);
      }
      const tickets = await response.json();
      if (!tickets) tickets = [];

      if (query) {
         tickets = matchSorter(tickets, query, { keys: ["name", "description"] });
      }
      return tickets.sort(sortBy("id", "created_at"));
   } catch (error) {
      console.error("Error al obtener tickets:", error.message);
      throw error;
   }
}

export async function createTicket(newTicket) {
   try {
      const response = await fetch(`http://localhost/tickets-api/public/api/issues`, {
         method: 'POST',
         body: JSON.stringify(newTicket),
      });

      if (!response.ok) {
         const errorMessage = await response.text(); // Obtén el mensaje de error del cuerpo de la respuesta
         throw new Error(`Failed to create ticket. Status: ${response.status}. Error: ${errorMessage}`);
      }

      return await response.json();
   } catch (error) {
      console.error('Error creating ticket:', error.message);
      throw error;
   }
}

export async function getTicket(id) {
   try {
      const apiUrl = `http://localhost/tickets-api/public/api/issues/${id}`;
      const response = await fetch(apiUrl);
      if (response.ok) {
         const ticket = await response.json();
         return ticket;
      } else {
         console.error(`Error al obtener el ticket (código ${response.status}): ${response.statusText}`);
         return null;
      }
   } catch (error) {
      console.error("Error en la función getTicket:", error);
      return null;
   }
}

export async function updateTicket(id, updates) {
   try {
      const response = await fetch(`http://localhost/tickets-api/public/api/issues/${id}`, {
         method: 'PUT',
         body: JSON.stringify(updates),
      });

      if (!response.ok) {
         throw new Error(`Failed to update ticket ${id}. Status: ${response.status}`);
      }

      return await response.json();
   } catch (error) {
      console.error('Error updating ticket:', error);
      throw error;
   }
}

export async function deleteTicket(id) {
   let tickets = await localforage.getItem("tickets");
   let index = tickets.findIndex(ticket => ticket.id === id);
   if (index > -1) {
      tickets.splice(index, 1);
      await set(tickets);
      return true;
   }
   return false;
}

function set(tickets) {
   return localforage.setItem("tickets", tickets);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
   if (!key) {
      fakeCache = {};
   }

   if (fakeCache[key]) {
      return;
   }

   fakeCache[key] = true;
   return new Promise(res => {
      setTimeout(res, Math.random() * 800);
   });
}