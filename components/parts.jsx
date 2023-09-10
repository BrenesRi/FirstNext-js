"use client"; //caracteristicas interactivas
import React from "react"
import Link from 'next/link'
import { useRouter } from "next/navigation";

function Parts( { parts } ) {
    const router = useRouter() //Interacción Cliente
    return (
        <ul className='list-group'>
        {parts.map((part) => (
            <li key={part.codigo}
            className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
            onClick={() => {
                router.push(`/parts/${part.codigo}`); //Fundamental
            }}
            >
              <div>
                <h4>{part.nombre} ({part.codigo})</h4>
                <p>{part.cantidad}</p>
              </div>
            <img src={part.imagen} alt={part.codigo}
            style={{ width: '200px', height: '150px'}} />
            </li>
          ))}
      </ul>     
    )
}

export default Parts