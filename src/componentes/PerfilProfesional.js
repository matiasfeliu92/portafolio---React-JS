import React from 'react';
import './perfilProfes.css';
import foto from "../assets/images/USAR NUEVA FOTO C.V. recortada.jpg"

const Perfil = (props) => {
    return (
        <React.Fragment>
            <section id="sobreMi" className="personal">
                <div className="personal__titulo">
                    <i className="bi bi-person-square"></i>
                    <h2 className="text-center">Perfil Profesional</h2>
                </div>
                <div className="personal__contenido">
                    <div className="personal__foto">
                        <img className="personal__img" src={foto} alt="foto personal"/>
                    </div>
                
                    <div className="personal__texto">
                        <p>Soy arquitecto, me gusta la informática y me interesa programar para poder brindar soluciones a distintos problemas y necesidades.
                        Mi objetivo es perfeccionarme, poder trabajar en equipo y desarrollarme como profesional en el entorno de la programacion</p>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Perfil