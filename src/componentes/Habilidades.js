import React from 'react';
import './hab.css';
import { useState } from 'react';

const Habilidades  = () => {

    const iconosHab = [
        {nombre: "Html 5", class: "fab fa-html5"},
        {nombre: "Css 3", class: "fab fa-css3-alt"},
        {nombre: "Sass", class: "fab fa-sass"},
        {nombre: "Bootstrap 5", class: "fab fa-bootstrap"},
        {nombre: "Git", class: "fab fa-git"},
        {nombre: "GitHub", class: "fab fa-github"},
        {nombre: "JavaScript", class: "fab fa-js"},
        {nombre: "TypeScript", class: "fa-brands fa-ethereum"},
        {nombre: "React Js", class: "fab fa-react"},
        {nombre: "Node Js", class: "fab fa-node"},
        {nombre: "Python", class: "fab fa-python"},
        {nombre: "MySql", class: "fas fa-database"},
        {nombre: "MongoDb", class: "fas fa-database"}
    ]

    const habItems = iconosHab.map((icon) => 
        <div class="compet__habText col-md-2">
            <i class={icon.class}></i>
            <h4 class="text-center">{icon.nombre}</h4> 
        </div>
    )

    return (
        <React.Fragment>
            <section id="habilidades" class="compet" data-aos="fade-up" data-aos-duration="3000">
                <div class="tituloHab">
                    <i class="bi bi-star"></i>
                    <h2 id="titulo-habilidades">Habilidades</h2>
                </div>
                <div class="compet__hab">{habItems}</div>
            </section>
        </React.Fragment>
    )
}

export default Habilidades