import React from 'react';
import './skills.css';
import FrontEnd from '../../assets/front-end.png';
import BackEnd from '../../assets/back-end.png';
import BbDd from '../../assets/bbdd.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">Me dedico a...</span>
            <span className="skillDesc">El desarrollo web full stack, 
            con especial interés en la creación de interfaces de usuario. Con especial foco en los detalles, 
            me apasiona el aprendizaje constante de nuevas herramientas que faciliten la concresión de mi visión creativa.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={FrontEnd} alt="Front-end" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Desarrollo Front-end</h2>
                        <p>Manejo de HTML, CSS avanzado, Bootstrap, Javascript, Jinja y React.js</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={BackEnd} alt="Back-end" className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Desarrollo Back-end</h2>
                        <p>Manejo de Python en framework Flask</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={BbDd} alt="BBDD" className="skillBarImg" id="basedatos"/>
                    <div className="skillBarText">
                        <h2>Modelado y manejo de BBDD</h2>
                        <p>Manejo de MySql con modelado de base de datos en MySQL Workbench</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;