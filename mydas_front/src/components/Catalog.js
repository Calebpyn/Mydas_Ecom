import React from 'react'
import {useNavigate} from 'react-router-dom'

function Catalog() {

    const navigate = useNavigate()

  return (
    <div className='h-[92vh] flex flex-col justify-around items-center '>

        <div className='h-[80vh] flex w-[80%] rounded-lg shadow-2xl'>
            <div className='bg-[url(https://i.pinimg.com/564x/81/8a/4c/818a4cd59cae94fa1d230c6f82c6ce74.jpg)] w-[30%] rounded-l-lg'></div>

            <div className='flex flex-col w-[70%] p-16 justify-between'>

                <div className='flex flex-col'>

                    <div className='flex justify-start w-full'>
                        <h1 className='font-Roboto font-bold text-2xl'>"La Sudadera EcoConsciente de Mydas"</h1>
                    </div>

                    <div className='mt-10'>
                        <p className='text-justify'>
                        Presentamos la sudadera ecológica de Mydas, una prenda que combina comodidad, estilo y sostenibilidad. Hecha de materiales 100% reciclados, esta sudadera es tan suave como resistente. Su diseño moderno y minimalista es acentuado por sutiles toques de la naturaleza, un constante recordatorio de nuestro compromiso con el medio ambiente. Con cada sudadera Mydas que compras, no solo adquieres una prenda de alta calidad, sino que también contribuyes a la protección de nuestro planeta. Viste Mydas, abraza la naturaleza.
                        </p>
                    </div>

                    <div className='mt-10 flex justify-start'>
                        <h1 className='text-slate-600'>$1,200 MXN - $60 USD</h1>
                        
                    </div>  

                </div>

                <div className='flex justify-between'>
                    <button className='text-white py-4 w-[45%] font-Roboto font-semibold tracking-wide bg-slate-950 rounded-full duration-300 shadow-xl hover:scale-110' onClick={() => navigate('/order')}>Comprar Ahora</button>
                    <button className='text-white py-4 w-[45%] font-Roboto font-semibold tracking-wide bg-slate-950 rounded-full duration-300 shadow-xl hover:scale-110' onClick={() => navigate('/order')}>Wishlist</button>
                </div>

            </div>
        </div>


    </div>
  )
}

export default Catalog