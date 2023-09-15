import React from 'react'
import { Header } from '../Header/Header'
import { Footer } from '../../Footer'


export const Usuario = () => {
  return (
    <div>
        <Header/>
        <h3>Estudios</h3>
        <div className='studies'>
          <img clas src="data:image/png;base64,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"  className="sena" alt="sena"  />
        <h2> Estudio en el sena desde el 2022-2024 </h2>
        <p>Programa de formacion  analisis y desarrollo de software</p>
        </div>
        <div className='studies'>
          <img src="https://www.uniquindio.edu.co/info/uniquindio/media/bloque2.png" className="sena"  alt="" />
          <h2>Estudio en la universidad del Quindio desde el 2020</h2>
          <p> ingenieria de sistemas</p>
        </div>
        <Footer/>
    </div>

  )
}


