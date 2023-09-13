import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../../Footer'


export const Usuario = () => {
  return (
    <div>
        <Header/>
        <h3>Estudios</h3>
        <div className='studies'>
          <img clas src="./public/sena.png"  className="sena" alt="sena"  />
        <h2> Estudio en el sena desde el 2022-2024 </h2>
        <p>Programa de formacion  analisis y desarrollo de software</p>
        </div>
        <div className='studies'>
          <img src="./public/uniquindio.png" className="sena"  alt="" />
          <h2>Estudio en la universidad del Quindio desde el 2020</h2>
          <p> ingenieria de sistemas</p>
        </div>
        <Footer/>
    </div>

  )
}


