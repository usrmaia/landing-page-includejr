import React from "react";
import "./Contact.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";

function Contact() {
  return (
    <footer className="contact">
      <div className="social-media">
        <p>Siga-nos</p>
        <p><span><FaLinkedinIn /></span>Linkedin</p>
        <p><span><FaInstagram /></span>Instagram</p>
        <p><span><FaFacebookF /></span>Facebook</p>
      </div>
      <div className="address">
        <p>Nossas informações</p>
        <p>Rua Professora Arlete Lago Serra, 13 - Cohama<br />São Luís/MA - CEP: 65073-830</p>
        <p>Seg. à Sex.: 08:00hr às 18:30</p>
        <p>Número: (85) 987875865</p>
        <p>cosmoscontabilidade@gmail.com</p>
      </div>
      <div className="maps">
        TODO - Linkar imagem do maps
      </div>
    </footer>
  );
}

export default Contact;
