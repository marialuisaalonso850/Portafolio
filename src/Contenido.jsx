import React from 'react'
import FirstContenido from './FirstContenido'
import SecondContenido from './components/SecondContenido'
import { Footer } from './Footer'
import './index.css'

const Contenido = () => {
  return (
    <div>
       <div className='general'>
      <div className="part1">
        <FirstContenido />
      </div>
      <div className="part2">
        <SecondContenido />
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default Contenido
