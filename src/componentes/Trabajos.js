import React from 'react';
import webArq from "../assets/images/web__arquitectura.PNG"
import webMates from "../assets/images/web__guen gaucho.PNG"
import webLibreria from "../assets/images/web__libreria tecnica.PNG"
import webForm from "../assets/images/web__registro de usuarios.PNG"
import './trabajosRealiz.css';
import { useState } from 'react';

const Trabajos = () => {

    const [show, setShow] = useState(false)

    const mostrarCont = () => {
        setShow(!show)
    }

    let contenido 

    const trabajos = [
        {titulo: "Portafolio de arquitectura", descripcion1: "Pagina web de portafolio para arquitectos, realizada como trabajo final para el curso de Desarrollo Web", descripcion2: "Tecnologias usadas: Html 5, Css 3 con Bootstrap 5, Sass y JavaScript con libreria JQuery", link: "https://arq-matias-mazparrote-feliu.netlify.app/", img: webArq, linkGit: "https://github.com/matiasfeliu92/Repositorio-Avances-Proyecto-Curso-HTML-y-CSS"},
        {titulo: "Web de venta de mates", descripcion1: "Pagina web realizada para mostrar y vender mates con distintos diseños", descripcion2: "Tecnologias usadas: Html 5, Css 3 con Bootstrap 5 y Sass", link: "https://guen-gaucho.netlify.app/", img: webMates, linkGit: "https://github.com/matiasfeliu92/Guen-Gaucho"},
        {titulo: "Web de libreria tecnica", descripcion1: "Pagina web e-commerce de una libreria, realizada como trabajo final para el curso de JavaScript", descripcion2: "Tecnologias usadas: Html 5, Css 3 y JavaScript con libreria JQuery", link: "https://libreria-tecnica.netlify.app/", img: webLibreria, linkGit: "https://github.com/matiasfeliu92/WEB-LIBRERIA-TECNICA-VERSION-FINAL"},
        {titulo: "Registro de usuario", descripcion1: "Pagina web para registro de usuarios, realizada con validacion de campos usando JavaScript", descripcion2: "Tecnologias usadas: Html 5, Css 3 y JavaScript",link: "https://registro-de-usuario.netlify.app/", img: webForm, linkGit: "https://github.com/matiasfeliu92/Validacion-de-formulario"},
    ]
    
    const Works = () => {
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
            <div class="trabajos__work">{worksItems}</div>
        )
    }

    if (show) {
        contenido = Works()
    } else contenido = null

    return (
        <React.Fragment>
            <section id="trabajosRealizados" class="trabajos">
                <div onClick= {mostrarCont} class="trabajos__titulo">
                    <i class="bi bi-folder2"></i>
                    <h2 id="titulo-trabajos">Trabajos Realizados</h2>
                </div>
                {contenido}
            </section>
        </React.Fragment>
    )
}

export default Trabajos