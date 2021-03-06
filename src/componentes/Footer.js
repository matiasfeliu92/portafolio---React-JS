import React from 'react';
import './footer.css';

class Footer extends React.Component {
    render () {
        return (
            <React.Fragment>
                <footer class="pie">
                    <div class="pie__nombre">
                        <em>Matias Mazparrote</em> 
                        <p>Full Stack Developer</p>
                    </div>
                    <div class="pie__datos">
                        <em>┬ęCopyright {new Date().getFullYear()}</em>
                    </div>
                    <div class="pie__redes">
                        <a target="_blank" href="https://www.linkedin.com/in/arq-mat%C3%ADas-mazparrote-feli%C3%BA/"><i class="bi bi-linkedin"></i></a>
                        <a target="_blank" href="https://github.com/matiasfeliu92?tab=repositories"><i class="bi bi-github"></i> </a>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer