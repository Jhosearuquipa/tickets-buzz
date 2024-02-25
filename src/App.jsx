import { useState } from 'react'
import { Link, Outlet } from "react-router-dom";


import './App.css'
import TicketList from './pages/TicketList';

export default function App() {

   const [issues, setIssues] = useState([
      {
         "id": 1,
         "name": "Error de conexión",
         "description": "Problemas para conectarse a la red",
         "level": "Alto"
      },
      {
         "id": 2,
         "name": "Error en la aplicación",
         "description": "La aplicación se cierra inesperadamente",
         "level": "Medio"
      },
      {
         "id": 3,
         "name": "Problema con la impresora",
         "description": "No se puede imprimir desde la impresora",
         "level": "Alto"
      },
      {
         "id": 4,
         "name": "Contraseña olvidada",
         "description": "El usuario olvidó la contraseña de su cuenta",
         "level": "Bajo"
      },
      {
         "id": 5,
         "name": "Error en la página web",
         "description": "La página no se carga correctamente",
         "level": "Medio"
      },
      {
         "id": 6,
         "name": "Problema con la actualización del software",
         "description": "No se puede completar la actualización del software",
         "level": "Alto"
      },
      {
         "id": 7,
         "name": "Fallo en la base de datos",
         "description": "Error al acceder a la base de datos",
         "level": "Alto"
      },
      {
         "id": 8,
         "name": "Problema con la configuración del correo electrónico",
         "description": "Configuración incorrecta del correo electrónico",
         "level": "Medio"
      },
      {
         "id": 9,
         "name": "Error en el sistema operativo",
         "description": "El sistema operativo muestra mensajes de error",
         "level": "Alto"
      },
      {
         "id": 10,
         "name": "Inconveniente con la aplicación móvil",
         "description": "La aplicación móvil no responde correctamente",
         "level": "Medio"
      }
   ]);

   return (
      <>
         <div className="container mx-auto p-4" id="detail">
            <div className='text-right'>
               <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-right text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  <Link to={`create`}>+ Agregar</Link>
               </button>
            </div>
         </div>
         <TicketList issues={issues} setIssues={setIssues} />

         <div className="container mx-auto p-4" id="detail">
            <Outlet />
         </div>
      </>
   )
}