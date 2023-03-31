import React from "react";
import "./Services.css";
import ChessIcon from "./assets/img/chess-icon.png";
import DollarIcon from "./assets/img/dollar-icon.png";
import GearsIcon from "./assets/img/gears-icon.png";
import PencilIcon from "./assets/img/pencil-icon.png";
import ServiceCard from "./components/ServiceCard";

function Services() {
  return (
    <section className="services">
      <h1>Serviços</h1>
      <div className="service-cards">
        <ServiceCard iconPath={ChessIcon} title="GESTÃO ESTRATÉGICA" text="Gestão estratégica é o conjunto de práticas e objetivos definidos pelos principais gestores de uma empresa, levando em consideração os ambientes interno e externo da companhia. Além de determinar os principais objetivos de uma organização em determinado período de tempo, os executivos também são responsáveis por definir como esses objetivos serão alcançados e alocar recursos para que as metas se concretizem." />
        <ServiceCard iconPath={PencilIcon} title="GESTÃO DA PRODUÇÃO" text="Consiste na gestão de ciclo que vai desde a estruturação dos processos de produção até as etapas finais com o cliente. É por meio do processo de gestão – sempre seguindo propósitos, princípios e valores pré-estabelecidos – que um empreendimento alcança seus objetivos e metas." />
        <ServiceCard iconPath={DollarIcon} title="GESTÃO FINANCEIRA" text="Gestão financeira empresarial é todo controle, administração, acompanhamento e planejamento das finanças de um negócio. Possui como principal objetivo a maximização dos resultados, ou seja, dos lucros. Para isso, utiliza de processos, métodos, ferramentas e padronização para alcançar melhores resultados financeiros." />
        <ServiceCard iconPath={GearsIcon} title="ASSESSORIA EM GESTÃO " text="Consiste-se em um serviço completo, desenvolvido a partir das necessidades de cada cliente, onde ele buscar impulsionar e impactar de forma direta e/ou indireta, todas os setores da empresa." />
      </div>
    </section>
  );
}

export default Services;
