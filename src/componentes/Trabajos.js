import React from 'react';
import webArq from "../assets/images/web__arquitectura.PNG"
import webMates from "../assets/images/web__guen gaucho.PNG"
import webLibreria from "../assets/images/web__libreria tecnica.PNG"
import webForm from "../assets/images/web__registro de usuarios.PNG"
import './trabajosRealiz.css';

class Trabajos extends React.Component {
    render () {
        const trabajos = [
            {titulo: "Portafolio de arquitectura", descripcion1: "Pagina web de portafolio para arquitectos, realizada como trabajo final para el curso de Desarrollo Web", descripcion2: "Tecnologias usadas: Html 5, Css 3 con Bootstrap 5, Sass y JavaScript con libreria JQuery", link: "https://arq-matias-mazparrote-feliu.netlify.app/", img: webArq},
            {titulo: "Web de venta de mates", descripcion1: "Pagina web realizada para mostrar y vender mates con distintos diseños", descripcion2: "Tecnologias usadas: Html 5, Css 3 con Bootstrap 5 y Sass", link: "https://guen-gaucho.netlify.app/", img: webMates},
            {titulo: "Web de libreria tecnica", descripcion1: "Pagina web e-commerce de una libreria, realizada como trabajo final para el curso de JavaScript", descripcion2: "Tecnologias usadas: Html 5, Css 3 y JavaScript con libreria JQuery", link: "https://libreria-tecnica.netlify.app/", img: webLibreria},
            {titulo: "Registro de usuario", descripcion1: "Pagina web para registro de usuarios, realizada con validacion de campos usando JavaScript", descripcion2: "Tecnologias usadas: Html 5, Css 3 y JavaScript",link: "https://registro-de-usuario.netlify.app/", img: webForm},
        ]
        
        const Works = () => {
            const worksItems = trabajos.map ((item) => 
                <div className="trabajos__webs">
                    <h4 className="text-center">{item.titulo}</h4>
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

        return (
            <React.Fragment>
                <section id="trabajosRealizados" class="trabajos">
                    <div class="trabajos__titulo">
                        <i class="bi bi-folder2"></i>
                        <h2 id="titulo-trabajos">Trabajos Realizados</h2>
                    </div>
                    <Works/>
                </section>
            </React.Fragment>
        )
    }
}

export default Trabajos