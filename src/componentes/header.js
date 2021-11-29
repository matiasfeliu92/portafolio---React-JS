import React from "react";
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="Portada">
                    <div class="portada__presentacion">
                        <div data-aos="flip-left" data-aos-duration="3000" class="portada__texto">
                            <blockquote>
                                <i class="bi bi-display"></i>
                                <h1>Matias Mazparrote Feliu</h1>
                                <small>Desarrollo Front End</small>
                                <a target="_blank" href="./CV - Matias Mazparrote.pdf">Descargar CV</a>
                            </blockquote>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header