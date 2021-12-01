import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navegacion from './componentes/menuNavegacion';
import Header from './componentes/header';
import Perfil from './componentes/PerfilProfesional';
import Habilidades from './componentes/Habilidades';
import Works from './componentes/Trabajos';
import Footer from './componentes/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Navegacion />
    <Header />
    <Perfil />
    <hr/>
    <Habilidades />
    <hr/>
    <Works />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
