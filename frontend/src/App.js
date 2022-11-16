import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Registro from './Paginas/registrarse';
import Iniciarsesion from './Paginas/iniciarsesion';
import Empleos from './Paginas/empleos';
import Perfil from './Paginas/perfil';
import Perfilcomercial from './Paginas/perfilcomercial';
import Registrarsecomoempresa from './Paginas/registrarsecomoempresa';
import EditarPerfil from './Paginas/editarperfil';
import Aplicarempleo from './Paginas/aplicarempleo';
import Aplicas from './Paginas/aplicas';
import Aplica from './Paginas/aplica';
import Trabaja from './Paginas/trabaja';
import Trabajar from './Paginas/trabajar';



function App() {
  return (
     <Router>
      <Routes>

        <Route exact path='/' element={<Inicio/>}/> 
        <Route exact path='/Perfil' element={<Perfil/>}/> 
        <Route exact path='/Iniciarsesion' element={<Iniciarsesion/>}/> 
        <Route exact path='/Registrarse' element={<Registro/>}/>
        <Route exact path='/Empleos' element={<Empleos/>}/>
        <Route exact path='/Perfilcomercial' element={<Perfilcomercial/>}/>
        <Route exact path='/aplicarempleo' element={<Aplicarempleo/>}/>
        <Route exact path='/Aplica' element={<Aplica/>}/>
        <Route exact path='/Aplicas' element={<Aplicas />}/>
        <Route exact path='/Registrarsecomoempresa' element={<Registrarsecomoempresa/>}/>
        <Route exact path='/Editarperfil' element={<EditarPerfil/>}/>
        <Route exact path='/Trabaja' element={<Trabaja/>}/>
        <Route exact path='/Trabajar' element={<Trabajar/>}/>
      </Routes> 
     </Router>
  );
}

export default App;
