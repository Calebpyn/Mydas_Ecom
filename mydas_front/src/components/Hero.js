import React from 'react'
import { useNavigate } from 'react-router-dom'

function Hero() {

    const navigate = useNavigate()


  return (
    <div className='bg-[url(https://i.ibb.co/7Y28053/pexels-eric-sanman-1365425.jpg)] h-[92vh] bg-cover bg-center flex flex-col justify-around'>

        <div className='bg-white w-[35%] flex flex-col justify-between py-24 px-11 h-full shadow-2xl'>
            <h1 className='font-bold italic text-8xl text-center'>Nuestra Misión</h1>

            <div className='flex w-full justify-around'>
                <button onClick={() => navigate('/buy')} className='text-white py-4 w-[45%] font-Roboto font-semibold tracking-wide bg-slate-950 rounded-full duration-300 shadow-xl hover:scale-110'>Comprar</button>
            </div>

            <p className='text-justify'>Mydas, uniendo moda y compromiso con el medio ambiente. Cada pieza de ropa creada por Mydas no solo te viste con estilo, sino que también aboga por la preservación de la naturaleza, los ecosistemas y la fauna. Al elegir Mydas, eliges una moda que respeta y celebra nuestro mundo."</p>
        </div>

    </div>
  )
}

export default Hero