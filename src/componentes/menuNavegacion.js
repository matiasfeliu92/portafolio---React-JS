import React from 'react';
import './menuNavegacion.css';

class Navegacion extends React.Component {
    render () {
        // const itemsNav = ["Portada", "Sobre Mi", "Profesional", "Habilidades", "Trabajos Realizados"]
        const itemsNav = [
            {itemName: "Portada", itemLink: "#"},
            {itemName: "Sobre Mi", itemLink: "#"},
            {itemName: "Profesional", itemLink: "#"},
            {itemName: "Habilidades", itemLink: "#"},
            {itemName: "Trabajos Realizados", itemLink: "#"},
        ]
        const ItemsMenu= () => {
            const listItems = itemsNav.map((item) => 
            <li className="text-center p-1"> <a className="navItem" href={item.itemLink}> {item.itemName} </a> </li> 
            )

            return (
                <ul class="navbar-nav align-items-center">
                    {listItems}
                </ul>
            )
        }

        return (
            <React.Fragment>
                <nav className="sticky-top navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid nav__bar">
                        <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ItemsMenu></ItemsMenu>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navegacion