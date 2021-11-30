import React from 'react';
import './hab.css';

class Habilidades extends React.Component {
    render () {
        const iconosHab = [
            {nombre: "Html 5", class: "fab fa-html5"},
            {nombre: "Css 3", class: "fab fa-css3-alt"},
            {nombre: "Sass", class: "fab fa-sass"},
            {nombre: "Bootstrap 5", class: "fab fa-bootstrap"},
            {nombre: "Git", class: "fab fa-git"},
            {nombre: "GitHub", class: "fab fa-github"},
            {nombre: "JavaScript", class: "fab fa-js"},
            {nombre: "React Js", class: "fab fa-react"},
        ]

        const ItemsHab= () => {
            const habItems = iconosHab.map((icon) => 
                <div class="compet__habText col-md-2">
                    <i class={icon.class}></i>
                    <h4 class="text-center">{icon.nombre}</h4> 
                </div>
            )

            return (
                <div class="compet__hab">{habItems}</div>
            )
        }

        return (
            <React.Fragment>
                <section id="habilidades" class="compet">
                    <div class="tituloHab">
                        <i class="bi bi-star"></i>
                        <h2 id="titulo-habilidades">Habilidades</h2>
                    </div>
                    <ItemsHab/>
                </section>
            </React.Fragment>
        )
    }
}

export default Habilidades