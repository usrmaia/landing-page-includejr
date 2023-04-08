import React from "react";
import "./Welcome.css";
import ImageBusiness from "./assets/img/image-business.png";

function Welcome() {
  return (
    <section className="welcome">
      <img src={ImageBusiness} alt="Imagem de negócio" />
      <div id="titles">
        <h1 className="font-convergence">Consultoria especializada em  Engenharia e Gestão de Negócios</h1>
        <h2 className="font-book-antiqua">Transformando empresas por meio da vivência empresarial</h2>
        <a href="#" className="animation-button font-book-antiqua">Fale com um especialista</a>
      </div>
    </section>
  );
}

export default Welcome;
