import React, { Component } from 'react';
import homedata from '../../data/home.json';

class Contact extends Component {
    render() {

        let contactInfo = homedata.contact
        let sectionHeadingInfo = {
            title: "Contacta a JVG Abogados",
            desc: "Estamos aquí para ayudarte con tus necesidades legales. Completa el formulario y nos pondremos en contacto contigo a la brevedad."
        }
        let publicUrl = process.env.PUBLIC_URL
        let inlineStyle = {
            backgroundImage: 'url(' + publicUrl + contactInfo.bgImg + ')'
        }

        return <section id="contact" className="pt100 pb100 bg-parallax" style={inlineStyle}>
            <div className="color-overlay opacity-8"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="contact-block text-center">
                            <div className="col-sm-12">
                                <h3>{sectionHeadingInfo.title}</h3>
                                <p className="subtitle">{sectionHeadingInfo.desc}</p>
                            </div>
                            <form id="contact-form" method="post" action={`#`}>
                                <div className="message col-lg-12">
                                    <p className="email-loading"><img src={`${publicUrl}/assets/img/loading.gif`} alt="loading" />&nbsp;&nbsp;&nbsp;Enviando...</p>
                                    <p className="email-success"><i className="icon fa fa-check"></i> Tu mensaje ha sido enviado con éxito.</p>
                                    <p className="email-failed"><i className="icon fa fa-times"></i> ¡Algo salió mal!</p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input name="name" className="contact-name form-control input-box" id="contact-name" type="text" placeholder="Tu Nombre" required="" />
                                    </div>
                                    <div className="col-md-6">
                                        <input name="email" className="contact-email form-control input-box" id="contact-email" type="email" placeholder="Tu Email" required="" />
                                    </div>
                                    <div className="col-sm-12">
                                        <input name="subject" className="contact-subject form-control input-box" id="contact-subject" type="text" placeholder="Asunto" required="" />
                                    </div>
                                    <div className="col-sm-12">
                                        <textarea name="message" className="contact-message form-control textarea-box" id="contact-message" placeholder="Tu Mensaje" required=""></textarea>
                                    </div>
                                    <div className="col-sm-12">
                                        <button className="primary-btn"><i className="fa fa-paper-plane" aria-hidden="true"></i> Enviar Mensaje</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export default Contact
