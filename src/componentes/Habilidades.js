import React from 'react';
import './hab.css';
import { useState } from 'react';

const Habilidades  = () => {

    const iconosHab = [
        {nombre: "Html 5", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"},
        {nombre: "Css 3", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"},
        {nombre: "Sass", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"},
        {nombre: "Bootstrap 5", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"},
        {nombre: "Git", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"},
        {nombre: "GitHub", src: "https://cdn-icons-png.flaticon.com/512/25/25231.png"},
        {nombre: "JavaScript", src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
        {nombre: "TypeScript", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"},
        {nombre: "React Js", src: "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"},
        {nombre: "Node Js", src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png"},
        {nombre: "Python", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png"},
        {nombre: "MySql", src: "http://assets.stickpng.com/images/58481057cef1014c0b5e4951.png"},
        {nombre: "MongoDb", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"}
    ]

    const habItems = iconosHab.map((icon) => 
        <div class="compet__habText col-md-2 flex-column justify-content-between">
            <img width={"85 vw"} height={"auto"} src={icon.src} alt="" />
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