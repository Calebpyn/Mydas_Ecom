import logo from './logo.svg';
import './App.css';
import {Route, Routes, HashRouter, BrowserRouter} from 'react-router-dom'
import Header from './components/Header';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Form from './components/Form'

function App() {
  return (
      <HashRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/buy' element={<Catalog/>}/>
          <Route path='/order' element={<Form title='Lista de Espera'/>}/>
          <Route path='/contacto' element={<Form title='Contáctanos'/>}/>
        </Routes>

      </HashRouter>
  );
}

export default App;
