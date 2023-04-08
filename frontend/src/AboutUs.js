import React from "react";
import "./AboutUs.css";
import AboutCardSimple from "./components/AboutCardSimple";
import AboutCardList from "./components/AboutCardList";
import AboutCardLogo from "./components/AboutCardLogo";
import Logo from "./assets/img/logo-includejr-big.png";

function AboutUs() {
  return (
    <section className="about-us">
      <div className="first-cards">
        <AboutCardSimple title={<strong>Visão:</strong>} description={<p>Ser reconhecida como referência em gestão empresarial, oferecendo <strong>soluções inovadoras e personalizadas para cada cliente</strong>, com base em princípios éticos e de responsabilidade social, e contribuir para o <strong>desenvolvimento sustentável das empresas e da sociedade</strong>.</p>} />
        <AboutCardSimple title={<strong>Missão:</strong>} description={<p>Oferecer <strong>soluções</strong> de gestão empresarial de <strong>alta qualidade</strong>, ajudando nossos clientes a alcançarem seus <strong>objetivos</strong> de negócios de <strong>forma sustentável</strong> e <strong>ética</strong>, por meio de uma equipe altamente <strong>qualificada</strong> e <strong>comprometida</strong>.</p>} />
        <AboutCardList title={<strong>Valores:</strong>} list={
          <ul className="font-convergence">
            <li><p><strong>Ética:</strong> agir sempre com integridade e transparência em todas as nossas atividades.</p></li>
            <li><p><strong>Comprometimento:</strong> ser comprometido com o sucesso de nossos clientes e colaboradores.</p></li>
            <li><p><strong>Inovação:</strong> buscar sempre soluções criativas e inovadoras para atender as necessidades de nossos clientes.</p></li>
            <li><p><strong>Excelência:</strong> buscar a excelência em tudo o que fazemos, oferecendo serviços de alta qualidade e valor agregado.</p></li>
            <li><p><strong>Responsabilidade social e ambiental:</strong> contribuir para o desenvolvimento sustentável da sociedade e do meio ambiente, por meio de ações e práticas socialmente responsáveis.</p></li>
          </ul>
        } />
      </div>
      <div className="second-card">
        <AboutCardLogo logo={Logo} title="Prospere Gestão Empresarial" caption="Transformando empresas por meio da vivência empresarial" />
      </div>
    </section>
  );
}

export default AboutUs;
