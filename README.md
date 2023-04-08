# [landing-page-includejr](./frontend/public/index.html) [![Pato Dançando](./assets/icons/pato.gif)](./assets/icons/pato.gif)
## Desafio do processo seletivo Include Jr. 2023.1 
Desenvolver uma página com base no protótipo.
## Tecnologias usadas
| [![HTML5](https://img.icons8.com/color/64/null/html-5--v1.png)](https://www.w3schools.com/html/) | [![CSS](https://img.icons8.com/color/64/null/css3.png)](https://www.w3schools.com/css/default.asp) | [![JavaScript](https://img.icons8.com/fluency/64/000000/javascript.png)](https://www.w3schools.com/js/default.asp) | [![React](https://img.icons8.com/plasticine/64/000000/react.png)](https://react.dev/) | [![NodeJS](https://img.icons8.com/fluency/64/null/node-js.png)](https://nodejs.org/en) | [![SendGridAPI](./assets/icons/send-grid.png)](https://sendgrid.com/) | [![Google Maps](https://img.icons8.com/color/64/null/google-maps.png)](https://www.google.com.br/maps/) | [![Insomnia](./assets/icons/insomnia.png)](https://insomnia.rest/) | [![Google Fonts](./assets/icons/google-fonts.png)](https://fonts.google.com/) | 
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:| 
| HTML5 | CSS3 | JS | React | NodeJS | SendGrid | Maps | Insomnia | Fonts |
## O que é SendGrid?
Uma API de e-mail. Com ele, pode-se enviar emails com o serviço SMTP (sem a necessidade de servidores). Além disso, é possivel criar e-mails com código HTML.
![](./assets/img/Captura%20de%20tela%20-%20form%20frontend.png)
```
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(key);

const msg = {
  to: "srmaia.dev@gmail.com",
  from: "srmaia.dev@gmail.com",
  subject: "Cliente acaba de pedir orçamento!",
  text: "Cliente acaba de pedir orçamento!",
  html: `
    <h1>Novo Serviço</h1>
    <p><strong>Nome: </strong>${messageHTML.Nome}</p>
    <p><strong>Telefone: </strong>${messageHTML.Telefone}</p>
    <p><strong>Email: </strong>${messageHTML.Email}</p>
    <p><strong>Cidade: </strong>${messageHTML.Cidade}</p>
    <p><strong>CEP: </strong>${messageHTML.CEP}</p>
    <p><strong>Ramo: </strong>${messageHTML.Ramo}</p>
    <p><strong>Detalhe: </strong>${messageHTML.Detalhes}</p>
    <p><strong>Serviços: </strong>${messageHTML.Servicos}</p>
  `,
};

sgMail.send(msg)
  .then(() => console.log("Email sent"))
  .catch((error) => console.error("Email error", error)); 
```
![](./assets/img/Captura%20de%20tela%20-%20email%20sendgrid.png)
## Integração com Google Maps
1. Enter no site [Google Maps](https://www.google.com.br/maps/);
2. Selecione a localização desezada;
3. No menu hamburguer, selecione 'Compartilhar ou incorporar mapa' -> 'Incorporar um mapa' -> 'COPIAR HTML'.