import { useState } from 'react'
import { Home } from "./components/Layouts/Home/Home";
import './App.css'
import NotFound from './components/NotFound';
import {Useref} from './components/NavBar/Useref';
import { Routes, Route } from 'react-router-dom'
import { Proyectos } from './Proyectos';
import { Contactame } from './components/Contactame';
import { Producto } from './components/marketPlace/producto.jsx';



  function App() {
    // Estado para controlar el modo (por defecto, modo claro)
    const [darkMode, setDarkMode] = useState(false);
  
    // Función para cambiar el modo
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    // Clases CSS condicionales según el modo seleccionado
    const appClasses = `App ${darkMode ? 'dark-mode' : ''}`;
    return (
      <>
        <div className={appClasses} >

      {/* Botón para cambiar el modo */}
      <button onClick={toggleDarkMode} className='malu'>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Useref" element={<Useref/>}/>
      <Route path="/Proyectos" element={<Proyectos/>}/>
      <Route path="/Contactame" element={<Contactame/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/market-place" element={<Producto/>}/>
     </Routes>

    </div>
  
    </>
  )
}

export default App
