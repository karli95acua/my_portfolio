import React, { useEffect } from 'react';
import { Button } from 'reactstrap'; // Importa Button desde 'reactstrap'
import "./works.css";
import VidContador from "../../assets/contador.mp4";
import VidAjedrez from "../../assets/ajedrez.mp4";
import VidHtml from "../../assets/html.mp4";
import MiProyecto from "../../assets/MiProyecto.png";
import PosterContador from "../../assets/fotocontador.png";
import PosterAjedrez from "../../assets/fotoajedrez.png";
import PosterHtml from "../../assets/fotohtml.png";

const Works = () => {
    useEffect (() => {
        const script = document.createElement('script');
        script.src = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);
    return (
        <section id="works">
            <h2 className="worksTitle">Mi Portafolio</h2>
            <span className="worksDesc">Proyectos que he desarrollado y que me gustaría que conozcas</span>
            <div className="worksImgs">
                <div>
                    <a href='https://comprarefaccionada-karliacua.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <img src={MiProyecto} alt='carrito-compras' className="worksImg"/>
                    </a>
                    <div className='project-buttons'>
                        <a href='https://github.com/karli95acua/proyecto-carrito' target="_blank" rel="noopener noreferrer">
                            <Button>
                                Ver código
                            </Button>
                        </a>
                    </div>
                </div>
                <div>
                    <video className="worksImg" controls muted controlsList='nodownload' playsInline poster={PosterContador}>
                        <source src={VidContador} type="video/mp4" />
                    </video>
                    <div className='project-buttons'>
                        <a href='https://github.com/karli95acua/contador' target="_blank" rel="noopener noreferrer">
                            <Button>
                                Ver código
                            </Button>
                        </a>
                    </div>
                </div>
                <div>
                    <p className="codepen" data-height="250px" data-default-tab="html,result" data-slug-hash="wvNgVOx" data-user="karli95acua" style={{height: '250px', boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid', margin: '1em', padding: '1em'}}>
                        <span className="worksImg">See the Pen <a href="https://codepen.io/karli95acua/pen/wvNgVOx">
                        dojoweather</a> by karli95acua (<a href="https://codepen.io/karli95acua">@karli95acua</a>)
                        on <a href="https://codepen.io">CodePen</a>.</span>
                    </p>
                    <div className='project-buttons'>
                        <a href='https://github.com/karli95acua/dojoweather' target="_blank" rel="noopener noreferrer">
                            <Button>
                                Ver código
                            </Button>
                        </a>
                    </div>
                </div>
                <div>
                    <video className="worksImg" controls muted controlsList='nodownload' playsInline poster={PosterAjedrez}>
                        <source src={VidAjedrez} type="video/mp4" />
                    </video>
                    <div className='project-buttons'>
                        <a href='https://github.com/karli95acua/tableroajedrez' target="_blank" rel="noopener noreferrer">
                            <Button>
                                Ver código
                            </Button>
                        </a>
                    </div>
                </div>
                <div>
                    <video className="worksImg" controls muted controlsList='nodownload' playsInline poster={PosterHtml}>
                        <source src={VidHtml} type="video/mp4" />
                    </video>
                    <div className='project-buttons'>
                        <a href='https://github.com/karli95acua/tablahtml' target="_blank" rel="noopener noreferrer">
                            <Button>
                                Ver código
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Works;

