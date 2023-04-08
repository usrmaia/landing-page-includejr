// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript

const key = require("./keySendGrid");

function SendGridAPI (messageHTML) {
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
}

module.exports = SendGridAPI;
