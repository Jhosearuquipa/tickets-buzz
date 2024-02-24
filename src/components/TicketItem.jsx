import React from 'react'

export default function TicketItem() {
   return (
      <>
         <li class="flex justify-between gap-x-6 py-5">
            <div class="flex min-w-0 gap-x-4">
               <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
               <div class="min-w-0 flex-auto">
                  <p class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                  <p class="mt-1 truncate text-xs leading-5 text-gray-500">leslie.alexander@example.com</p>
               </div>
            </div>
            <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
               <p class="text-sm leading-6 text-gray-900">Business Relations</p>
               <div class="mt-1 flex items-center gap-x-1.5">
                  <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                     <div class="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                  </div>
                  <p class="text-xs leading-5 text-gray-500">Online</p>
               </div>
            </div>
         </li>
      </>
   )
}
