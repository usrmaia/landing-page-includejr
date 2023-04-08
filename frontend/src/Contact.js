import React from "react";
import "./Contact.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

function Contact() {
  return (
    <footer className="contact">
      <div className="contact-details">
        <div className="social-media">
          <p className="font-convergence">Siga-nos</p>
          <p className="animation-links font-convergence"><span><FaLinkedinIn /></span>Linkedin</p>
          <p className="animation-links font-convergence"><span><FaInstagram /></span>Instagram</p>
          <p className="animation-links font-convergence"><span><FaFacebookF /></span>Facebook</p>
        </div>
        <div className="address">
          <p className="font-convergence">Nossas informações</p>
          <p className="font-convergence">Rua Professora Arlete Lago Serra, 13 - Cohama<br />São Luís/MA - CEP: 65073-830</p>
          <p className="font-convergence">Seg. à Sex.: 08:00hr às 18:30</p>
          <p className="font-convergence">Número: (85) 987875865</p>
          <p className="font-convergence">cosmoscontabilidade@gmail.com</p>
        </div>
        <iframe title="Localização" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.995036710966!2d-37.97942688551777!3d-4.940465051918247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b98389c91dd257%3A0xf3ea9d48f760f7d7!2sInclude%20Jr!5e0!3m2!1spt-BR!2sbr!4v1680920864047!5m2!1spt-BR!2sbr" width="400" height="300" border="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </footer>
  );
}

export default Contact;
