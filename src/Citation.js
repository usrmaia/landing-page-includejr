import React from "react";
import "./Citation.css";
import ProfileIllustration from "./assets/img/profile-illustration.png";

function Citation() {
  return (
    <section className="citation">
      <img src={ProfileIllustration} alt="Ilustração de perfil"/>
      <div>
        <p>Nós somos uma empresa que nasceu da paixão pela empreendedorismo e pela busca constante pela excelência em tudo o que fazemos. Nosso objetivo é oferecer soluções inovadoras e personalizadas para cada cliente, atendendo às suas necessidades e contribuindo para o sucesso de seus negócios. Aqui, acreditamos que a transparência e a ética são fundamentais em todas as nossas atividades. Afinal, é assim que conquistamos a confiança de nossos clientes e parceiros, e assim que podemos trabalhar juntos de forma produtiva e eficiente. Além disso, temos uma equipe altamente qualificada e comprometida, que está sempre atualizada com as últimas tendências e tecnologias do mercado. Isso nos permite oferecer soluções de alta qualidade e valor agregado para nossos clientes, e garantir que estejamos sempre à frente do jogo.</p>
        <span>-Roberto  Aquino</span>
      </div>
    </section>
  );
}

export default Citation;
