import React from "react";
import "./Benefits.css";
import BenefitsCard from "./components/BenefitsCard";
import IconClockMoney from "./assets/img/icon-clock-money.png";
import IconDollar from "./assets/img/icon-dollar.png";
import IconMoney from "./assets/img/icon-money.png";
import IconSupport from "./assets/img/icon-support.png";

function Benefits() {
  return (
    <section className="benefits">
      <BenefitsCard iconPath={IconClockMoney} title="Otimização do tempo" />
      <BenefitsCard iconPath={IconDollar} title="Redução dos custos" />
      <BenefitsCard iconPath={IconMoney} title="Maior lucratividade" />
      <BenefitsCard iconPath={IconSupport} title="Suporte ágil e eficiente" />
      <BenefitsCard iconPath={IconClockMoney} title="Otimização do tempo" />
      <BenefitsCard iconPath={IconDollar} title="Redução dos custos" />
      <BenefitsCard iconPath={IconMoney} title="Maior lucratividade" />
      <BenefitsCard iconPath={IconSupport} title="Suporte ágil e eficiente" />
    </section>
  );
}

export default Benefits;
