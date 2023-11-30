import React from "react";
import './techs.css';
import HtmlImg from "../../assets/html-5.png";
import CssImg from "../../assets/css.png";
import BootsImg from "../../assets/bootstrap1.png";
import JsImg from "../../assets/java-script.png";
import ReactImg from "../../assets/react.png";
import PyImg from "../../assets/python.png";
import GasImg from "../../assets/app.png";
import MySQLImg from "../../assets/mysql.png";

const Techs = () => {
    return (
        <section id='techs'>
            <span className="techTitle">Tecnologías</span>
            <div className="techBars">
                <div className="techBar">
                    <img src={HtmlImg} alt="" className="techBarImg"/>
                    <div className="techBarText">
                        <p>HTML</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={CssImg} alt="" className="techBarImg"/>
                    <div className="techBarText">
                        <p>CSS</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={BootsImg} alt="" className="techBarImg" id=""/>
                    <div className="techBarText">
                        <p>Bootstrap</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={JsImg} alt="" className="techBarImg" id=""/>
                    <div className="techBarText">
                        <p>Javascript</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={ReactImg} alt="" className="techBarImg" id=""/>
                    <div className="techBarText">
                        <p>React.js</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={PyImg} alt="" className="techBarImg" id=""/>
                    <div className="techBarText">
                        <p>Python</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={GasImg} alt="" className="techBarImg" id=""/>
                    <div className="techBarText">
                        <p>Google Apps Script</p>
                    </div>
                </div>
                <div className="techBar">
                    <img src={MySQLImg} alt="" className="techBarImg" id=""/>
                    <div className="techBarText">
                        <p>MySQL</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Techs;