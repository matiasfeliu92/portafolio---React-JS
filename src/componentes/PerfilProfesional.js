import React from 'react';
import './perfilProfes.css';
import foto from "../assets/images/USAR NUEVA FOTO C.V. recortada.jpg"

class Perfil extends React.Component {
    render () {
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
                            <p>Soy Arquitecto, actualmente estoy enfocado en el Desarrollo Front End, me gusta la informática, navegar por internet, tengo muy buen manejo de pc y me interesa el desarrollo las paginas web. Mi objetivo es desempeñarme como desarrollador
                            front end.</p>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Perfil