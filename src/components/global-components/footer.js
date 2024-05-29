import React, { Component } from 'react';
import FooterData from '../../data/footerdata';

class Footer extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        // Calcular el año actual
        const currentYear = new Date().getFullYear();

        // Crear el texto de copyright dinámicamente
        const copyrightText = `© ${currentYear} JVG Abogados. Todos los derechos reservados. `;

        return (
            <footer id="footer-section" className="pt50 pb50 bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 text-left">
                            <p className=" mt-3">JVG Abogados, despacho jurídico líder desde 2008. Comprometidos con la excelencia legal y el servicio al cliente.</p>
                        </div>
                        <div className="col-lg-4 text-left">
                            <h4>Contacto</h4>
                            <p><a href="https://www.facebook.com/profile.php?id=61551346464130"><i className={FooterData.socialicon[0].icon}></i> Facebook</a></p>
                            <p><a href="https://www.instagram.com/jgv.abogados/"><i className={FooterData.socialicon[1].icon}></i> Instagram</a></p>
                            <p>Teléfono: +1 234 567 890</p>
                            <p>Dirección: Calle Ejemplo 123, Ciudad</p>
                        </div>
                        <div className="col-lg-4 text-left">
                            <h4>Secciones</h4>
                            <ul className="footer-links">
                                <li><a href="#">Inicio</a></li>
                                <li><a href="/#about">Acerca de</a></li>
                                <li><a href="/features">Servicios</a></li>
                                <li><a href="/portfolio">Portafolio</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="/contact">Contacto</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row text-center mt-4">
                        <div className="col-sm-12" dangerouslySetInnerHTML={{ __html: copyrightText }}></div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
