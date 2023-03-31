import React from "react";
import "./Welcome.css";
import ImageBusiness from "./assets/img/image-business.png";

function Welcome() {
  return (
    <section className="welcome">
      <img src={ImageBusiness} alt="Imagem de negócio" />
      <div id="titles">
        <h1>Consultoria especializada em  Engenharia e Gestão de Negócios</h1>
        <h2>Transformando empresas por meio da vivência empresarial</h2>
        <a src="#">Fale com um especialista</a>
      </div>
    </section>
  );
}

export default Welcome;
