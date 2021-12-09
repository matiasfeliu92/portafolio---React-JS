import React from 'react';
import './perfilProfes.css';
import foto from "../assets/images/USAR NUEVA FOTO C.V. recortada.jpg"
import { useState } from 'react';

const Perfil = (props) => {
    const [show, setShow] = useState(false)

    const mostrarCont = () => {
        setShow(!show)
    }

    let contenido 

    if (show) {
        contenido = (<div className="personal__contenido">
        <div className="personal__foto">
            <img className="personal__img" src={foto} alt="foto personal"/>
        </div>
        <div className="personal__texto">
            <p>Soy Arquitecto, me gusta la informática, navegar por internet, tengo muy buen manejo de pc y me interesa aprender a programar.
            Mi objetivo es aprender nuevas tecnologias, buscar nuevos desafíos y desarrollarme como profesional en el entorno de la programacion.</p>
        </div>
    </div>)
    } else contenido = null

    return (
        <React.Fragment>
            <section id="sobreMi" className="personal">
                <div onClick= {mostrarCont} className="personal__titulo">
                    <i className="bi bi-person-square"></i>
                    <h2 className="text-center">Perfil Profesional</h2>
                </div>
                {contenido}
            </section>
        </React.Fragment>
    )
}

export default Perfil