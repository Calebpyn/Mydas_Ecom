import React, {useRef} from 'react'
import { useNavigate} from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Form(props) {

  const navigate = useNavigate()

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_drp8p1e', 'template_3nggxcd', form.current, 'X-Rr4znriQbEVzxCg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    navigate('/')
  };

  return (
    <div className='h-[92vh] flex flex-col items-center bg-[url(https://i.ibb.co/1QQLXVp/pexels-guduru-ajay-bhargav-1076081.jpg)] bg-center bg-cover'>

        <div className='h-[5vh] flex justify-start w-full'>
          <button className='p-4 text-white italic font-bold hover:scale-105 duration-300' onClick={() => {
            navigate('/buy')
          }}>Regresar</button>
        </div>

        <div className='flex flex-col justify-between h-[75vh] items-center'>

          <div className='h-[10%]'>
            <h3 className='pt-5 italic font-Roboto tracking-wide text-white font-black text-3xl'>{props.title}</h3>
          </div>

          <form className='flex h-[80%] w-[60%] shadow-xl bg-white' ref={form} onSubmit={sendEmail}>

            <div className='bg-slate-950 w-1/2 p-10 flex flex-col justify-between'>

              <p className='text-white text-justify'>
              Nuestra Eco Hoodie representa una fusión de estilo, confort y compromiso con la sostenibilidad. Fabricada con materiales ecológicos, cada pieza es un testimonio de nuestra dedicación hacia la protección del medio ambiente. Al hacer un pedido, su nombre se incorporará a nuestra lista de espera. Este método de producción responsable nos permite minimizar residuos y asegurar la calidad superior de cada hoodie. Solicite su Eco Hoodie y forme parte de nuestro movimiento hacia una moda respetuosa con el entorno.
              </p>

              <h6 className='text-white font-bold italic text-end mb-2'>Mydas.</h6>
              
            </div>

            <div className='flex flex-col justify-between p-10 pt-12 items-center w-1/2'>

              <input className='border-b-2 w-full duration-150 focus:border-slate-950 outline-none mt-4' placeholder='Nombre' name='name'></input>

              <input className='border-b-2 w-full duration-150 focus:border-slate-950 outline-none' placeholder='Teléfono' name='tel'></input>

              <input className='border-b-2 w-full duration-150 focus:border-slate-950 outline-none' placeholder='Correo' name='email'></input>

              <input className='hidden' name='asunto' value={props.title}></input>

              <input className='text-white py-2 w-[45%] font-Roboto font-semibold tracking-wide bg-slate-950 rounded-full duration-300 shadow-xl hover:scale-110' type='submit' ></input>

            </div>


          </form>


        </div>

    </div>
  )
}

export default Form