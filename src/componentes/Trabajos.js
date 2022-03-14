import React from 'react';
import webArq from "../assets/images/web__arquitectura.PNG"
import appCanciones from "../assets/images/appDeCanciones.PNG"
import webMates from "../assets/images/web__guen gaucho.PNG"
import webLibreria from "../assets/images/web__libreria tecnica.PNG"
import webForm from "../assets/images/web__registro de usuarios.PNG"
import webPort from "../assets/images/web__portafolio + cv.PNG"
import './trabajosRealiz.css';

const Trabajos = () => {

    const trabajos = [
        {titulo: "App de disney", descripcion1: "Consiste en una app realizada para Alkemy, donde se pueden guardar y editar los personajes de Disney", descripcion2: "Tecnologias usadas: Node Js, Express y MySql", link: "", img: "", linkGit: "https://github.com/matiasfeliu92/Challenge-Backend-Alkemy--Node-Js"},
        {titulo: "App de canciones", descripcion1: "Consiste en una lista de musica, donde se pueden guardar y editar las canciones favoritas.", descripcion2: "Tecnologias usadas: Node Js, Express y MySql", link: "", img: appCanciones, linkGit: "https://github.com/matiasfeliu92/Proyecto-1-bootcamp-Node-Js-Fundamentals"},
        {titulo: "Web de libreria tecnica", descripcion1: "Pagina web e-commerce de una libreria, realizada como trabajo final para el curso de JavaScript", descripcion2: "Tecnologias usadas: Html 5, Css 3 y JavaScript con libreria JQuery", link: "https://libreria-tecnica.netlify.app/", img: webLibreria, linkGit: "https://github.com/matiasfeliu92/WEB-LIBRERIA-TECNICA-VERSION-FINAL"},
        {titulo: "Portafolio de arquitectura", descripcion1: "Pagina web de portafolio para arquitectos, realizada como trabajo final para el curso de Desarrollo Web", descripcion2: "Tecnologias usadas: Html 5, Css 3 con Bootstrap 5, Sass y JavaScript con libreria JQuery", link: "https://arq-matias-mazparrote-feliu.netlify.app/", img: webArq, linkGit: "https://github.com/matiasfeliu92/Repositorio-Avances-Proyecto-Curso-HTML-y-CSS"},
        {titulo: "Web de venta de mates", descripcion1: "Pagina web realizada para mostrar y vender mates con distintos diseños", descripcion2: "Tecnologias usadas: Html 5, Css 3 con Bootstrap 5 y Sass", link: "https://guen-gaucho.netlify.app/", img: webMates, linkGit: "https://github.com/matiasfeliu92/Guen-Gaucho"},
        {titulo: "Registro de usuario", descripcion1: "Pagina web para registro de usuarios, realizada con validacion de campos usando JavaScript", descripcion2: "Tecnologias usadas: Html 5, Css 3 y JavaScript",link: "https://registro-de-usuario.netlify.app/", img: webForm, linkGit: "https://github.com/matiasfeliu92/Validacion-de-formulario"},
        {titulo: "Portafolio con CV", descripcion1: "Pagina web para ,mostrar mi CV, perfil profesional, mis habilidades y mis trabajos que realice como desarrollador", descripcion2: "Tecnologias usadas: JavaScript y React Js",link: "https://portafolio-react.netlify.app/", img: webPort, linkGit: "https://github.com/matiasfeliu92/portafolio---React-JS"},
    ]
    
    const worksItems = trabajos.map ((item) => 
        <div className="trabajos__webs">
            <h4 className="text-center">{item.titulo}</h4>
            <a className="linkGit" target="_blank" href={item.linkGit}>Link al GitHub</a>
            <p className="text-center">{item.descripcion1}</p>
            <p className="text-center">{item.descripcion2}</p>
            <a target="_blank" href={item.link}>
                <img className="trabajos__img text-center" src={item.img} />
            </a>
        </div>
    )

    return (
        <React.Fragment>
            <section id="trabajosRealizados" class="trabajos">
                <div class="trabajos__titulo">
                    <i class="bi bi-folder2"></i>
                    <h2 id="titulo-trabajos">Trabajos Realizados</h2>
                </div>
                <div class="trabajos__work">{worksItems}</div>
            </section>
        </React.Fragment>
    )
}

export default Trabajos