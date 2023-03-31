import React from "react";
import "./OurClients.css";
import ClienteA from "./assets/img/cliente-a.png";
import ClienteCampachi from "./assets/img/cliente-campachi.png";
import ClienteIbel from "./assets/img/cliente-ibel.png";
import ClienteMariaBaloes from "./assets/img/cliente-maria-baloes.png";
import ClienteMariaFlorinha from "./assets/img/cliente-maria-florinha.png";
import ClienteNormatel from "./assets/img/cliente-normatel.png";
import ClientePA from "./assets/img/cliente-pa.png";
import ClientePHD from "./assets/img/cliente-phd.png";
import ClienteSaoLuiz from "./assets/img/cliente-sao-luiz.png";
import ClienteWePizzaDelivery from "./assets/img/cliente-we-pizza-delivery.png";

function OurClients() {
  return (
    <section className="our-clients">
      <h1>Nossos clientes</h1>
      <div className="clients">
        <img src={ClienteMariaFlorinha} alt="Cliente Maria Florinha" />
        <img src={ClienteSaoLuiz} alt="Cliente São Luiz" />
        <img src={ClienteNormatel} alt="Cliente Normatel" />
        <img src={ClienteWePizzaDelivery} alt="Cliente We Pizza Delivery" />
        <img src={ClientePHD} alt="Cliente PHD" />
        <img src={ClienteA} alt="Cliente A" />
        <img src={ClienteMariaBaloes} alt="Cliente Baloes" />
        <img src={ClienteIbel} alt="Cliente Ibel" />
        <img src={ClientePA} alt="Cliente PA" />
        <img src={ClienteCampachi} alt="Cliente Campachi" />
      </div>
    </section>
  );
}

export default OurClients;
