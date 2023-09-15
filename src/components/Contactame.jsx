import React from 'react'
import { Header } from './Header/Header'
import { Footer } from '../Footer'


export const Contactame = () => {
  return (
    <div>
   <Header/>
   <div>   
   <h1 className='text-lg my-6 text-neutral-500'>Mis redes Sociales son :  </h1>
   <div class="flex items-center my-12 mx-10 text-neutral-500">
  <img class="w-10 h-10 rounded-full mr-4" src="https://img.freepik.com/vector-premium/vinnytsia-ucrania-27-abril-2023-icono-redes-sociales-populares-instagram-diseno-vectorial_545793-1681.jpg" alt="" />
  <h1 class="text-xl font-bold text-neutral-500">Instagram: marialu3425</h1>
</div>
<div class="flex items-center my-12 mx-10 text-neutral-500">
   <img class="w-11 h-10 rounded-full mr-4" src="https://logotipoz.com/wp-content/uploads/2021/10/logo-facebook-png.png" alt=""  />
   <h1 class="text-xl font-bold text-neutral-500">Maria Luisa Giraldo</h1> 
   </div>
   <div class="flex items-centermy my-12 mx-10 text-neutral-500">
    <img  class="w-10 h-10 rounded-full mr-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" alt="" />
    <h1 class="text-xl font-bold text-neutral-500">+57 3108661265</h1> 
   </div>
   <div class="flex items-center my-12 mx-10 text-neutral-500">
    <img  class="w-10 h-10 rounded-full mr-4" src="https://tse4.mm.bing.net/th?id=OIP.nYNeM7r42tbvz2JcSK3bNwHaHa&pid=Api&P=0&h=180" alt="" />
    <h1 class="text-xl font-bold text-neutral-500">3108661265</h1> 
   </div>
   </div>
   <Footer/>
    </div>
  )
}
