import { useState } from "react";
import React from "react";
import "./BudgetForm.css";
import Timeline from "./components/Timeline";

function BudgetForm() {
  const events = [
    { id: 1, order: "1", description: "Inicie o cadastro e confira se podemos te atender." },
    { id: 2, order: "2", description: "Conclua o cadastro, pague a 1ª mensalidade e deixe tudo com a gente." },
    { id: 3, order: "3", description: "Nós solicitamos a sua documentação contábil" },
    { id: 4, order: "4", description: "Pronto! Sua empresa sempre em dia e com uma contabilidade" },
  ];

  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(formData));
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    fetch('http://localhost:3001/api/form', requestOptions)
      .then(response => console.log(response))
      .catch(error => console.log("Error ao enviar form" + error));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    //action="/enviar-orcamento" 
    <section className="budget-form">
      <header className="tutorial-form">
        <Timeline events={events}/>
      </header>

      <h1 className="font-convergence">Faça um orçamento gratuitamente com a gente!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="p1">
          <label className="font-convergence">Nome da empresa:<input type="text" id="Nome" className="input-container" name="Nome" required onChange={handleChange} /></label>
          <label className="font-convergence">Telefone:<input type="tel" id="Telefone" className="input-container" name="Telefone" required onChange={handleChange} /></label>
          <label className="font-convergence">E-mail:<input type="email" id="Email" className="input-container" name="Email" required onChange={handleChange} /></label>
          <label className="font-convergence">Cidade:<input type="text" id="Cidade" className="input-container" name="Cidade" required onChange={handleChange} /></label>
          <label className="font-convergence">CEP:<input type="number" id="CEP" className="input-container" name="CEP" required onChange={handleChange} /></label>
        </div>
        <div className="p2">
          <label className="font-convergence">Ramo de atividades:<input type="text" id="Ramo" className="input-container" name="Ramo" required onChange={handleChange} /></label>
          <label className="font-convergence">Detalhes da atividade:<textarea id="Detalhes" className="input-container textarea" name="Detalhes" required onChange={handleChange} /></label>
          <label className="font-convergence">Serviços:<textarea id="Servicos" className="input-container textarea" name="Servicos" required onChange={handleChange} /></label>
          <button type="submit" className="animation-button font-convergence">Enviar</button>
        </div>
      </form>

    </section>
  );
}

export default BudgetForm;
