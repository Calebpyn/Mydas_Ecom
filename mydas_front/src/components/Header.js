import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {

    const naviagte = useNavigate()

  return (

    <div className='flex justify-between px-10 py-4 bg-slate-950 items-center'>

        <div>
            <h1 className='font-Roboto text-3xl font-bold text-white italic'>Mydas</h1>
        </div>

        <div>

            <button onClick={() => {
                naviagte('/')
            }} className='text-white font-Roboto mr-10 hover:border-b-2 border-white'>Sobre Nosotros</button>
            <button className='text-white font-Roboto mr-10 hover:border-b-2 border-white' onClick={() => {
                naviagte('/contacto')
            }} >Contacto</button>
            {/* <button className='text-white font-Roboto hover:bg-slate-800 px-4 py-2 rounded-xl'></button> */}

        </div>

    </div>
  )
}

export default Header