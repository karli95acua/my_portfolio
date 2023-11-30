import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import bg from '../../assets/introimg.png';
import CvPdf from '../../assets/CV_KARLA_A_2023:S-EN.pdf';


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hola,</span>
                <span className="introText"> Soy <span className="introName"> Karli Acuña</span> <br />Full Stack Developer</span>
                <p className="introPara">
                    Soy una desarrolladora web,
                    apasionada por la programación y <br/> la creación de proyectos atractivos y con buen desempeño.</p> 
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>
                        <button className="btn"><img src={contactImg} alt="contactImg" className="btnImg"/>Contáctame!</button>
                    </Link>
                    <a href={CvPdf} download>
                        <button className="btn2">Descarga mi CV</button>
                    </a> 
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default Intro;