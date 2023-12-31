import React, { useRef } from 'react';
import './contact.css';
import LinkedinIcon from '../../assets/linkedin-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current.elements.from_email.value) {
            alert('Por favor, ingresa tu correo electrónico.');
            return;
        }

        emailjs.sendForm('service_s2sxxvn', 'template_5mwb0ps', form.current, 'YRYuaperHQwFanGoG')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email enviado con éxito');
        }, (error) => {
            console.log(error.text);
            alert('Hubo un error al enviar el correo, inténtalo de nuevo.');
        });
    };

    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'> Contáctame</h1>
                <span className='contactDesc'> Por favor llena este formulario para mantenernos en contacto:</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Tu nombre completo' name='from_name' required />
                    <input type='email' className='email' placeholder='Tu email' name='from_email' required />
                    <textarea name='message' className='msg' rows='5' placeholder='Tu mensaje' required></textarea>
                    <button type='submit' value='send' className='submitBtn'>Enviar</button>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/karli-acuna/' target='_blank' rel='noopener noreferrer'>
                            <img src={LinkedinIcon} alt='Linkedin' className='link' id='linkedin'/>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
