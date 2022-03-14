import React from "react";
import './header.css';
import cv from "../assets/CV - Matias Mazparrote.pdf"

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header id="Portada">
                    <div class="portada__presentacion">
                        <div data-aos="fade-down" data-aos-duration="3000" class="portada__texto">
                            <blockquote>
                                <i class="bi bi-display"></i>
                                <h1>Matias Mazparrote Feliu</h1>
                                <small>Full Stack & BlockChain Developer</small>
                                <a target="_blank" href={cv}>Descargar CV</a>
                            </blockquote>
                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header