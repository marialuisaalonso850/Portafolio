import React from 'react'
import { Header } from './components/Header/Header'
import { Proyecto } from './assets/proyects'
import { NavLink } from 'react-router-dom'
import './index.css'
import { Footer } from './Footer'


export const Proyectos = () => {
  return (
    <div>
     <Header/>
     
     <div className='major '>
      <img className='img1' src="https://tse1.mm.bing.net/th?id=OIP.bwOvpTGpiLAt_BiySDYzjQHaFj&pid=Api&P=0&h=180" alt="" />
      <div className='part3'>
      <p className='my-20 text-[25px] text-left mx-5   '>Aquí puedes encontrar los productos para navegar y aumentar la cantidad de productos cuando los añadas al carrito</p>   
      <button className='w-48 h-16  my-48  m-[100px] mx-6  '><NavLink to='/market-place'>MARKETPLACE</NavLink></button>
      </div>
     </div>
     
    <div className='grid grid-cols-2 '>
        {Proyecto.map((proyecto) => (
          <div key={proyecto.id} className='card bg-neutral-600 p-4 rounded-lg shadow-md my-10 w-96 h-80 mx-48'>
            <img className='w-64 h-52 object-cover mx-auto' src={proyecto.img} alt={proyecto.nombre} />
            <h2 className='text-xl font-semibold mt-2 text-white'>{proyecto.nombre}</h2>
            <a className='text-yellow-500 hover:underline ' href={proyecto.url} target='_blank' rel='noopener noreferrer'>
              Ver proyecto
            </a>
          </div>
        ))}
    </div>
    <Footer/>
    </div>
    
  );
}
