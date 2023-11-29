import React, { useRef } from 'react';
import './contact.css';
import LinkedinIcon from '../../assets/linkedin-icon.png';
import InstagramIcon from '../../assets/instagram.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s2sxxvn', 'template_5mwb0ps', form.current, 'YRYuaperHQwFanGoG')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email enviado con éxito');
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'> Contáctame</h1>
                <span className='contactDesc'> Por favor llena este formulario para mantenernos en contacto:</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Tu nombre completo' name='from_name' />
                    <input type='email' className='email' placeholder='Tu email' name='from_email'/>
                    <textarea name='message' className='msg' rows='5' placeholder='Tu mensaje'></textarea>
                    <button type='submit' value='send' className='submitBtn'>Enviar</button>
                    <div className='links'>
                        <img src={LinkedinIcon} alt='Linkedin' className='link' id='linkedin'/>
                        <img src={InstagramIcon} alt='Instagram' className='link'/>
                        <img src={FacebookIcon} alt='Facebook' className='link'/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact