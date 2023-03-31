import React from "react";
import "./BudgetForm.css";
//import SimpleHorizontalTimeline from "./components/SimpleHorizontalTimeline";
import Timeline from "./components/Timeline";

function BudgetForm() {
  const events = [
    { id: 1, order: "1", description: "Inicie o cadastro e confira se podemos te atender." },
    { id: 2, order: "2", description: "Conclua o cadastro, pague a 1ª mensalidade e deixe tudo com a gente." },
    { id: 3, order: "3", description: "Nós solicitamos a sua documentação contábil" },
    { id: 3, order: "4", description: "Pronto! Sua empresa sempre em dia e com uma contabilidade" },
  ];

  return (
    <section className="budget-form">
      <header className="tutorial-form">
        <Timeline events={events}/>
      </header>

      <form>
        <div className="title-form">
          <h1>Faça um orçamento gratuitamente com a gente!</h1>
        </div>
        <div className="form-form">
          <div className="first-part-form">
            <label>
              Nome da empresa:
              <input type="text" name="nome" required />
            </label>

            <label>
              Telefone:
              <input type="tel" name="telefone" required />
            </label>

            <label>
              Email:
              <input type="email" name="email" required />
            </label>

            <label>
              Cidade:
              <input type="text" name="cidade" required />
            </label>

            <label>
              CEP:
              <input type="number" name="cep" required />
            </label>
          </div>
          <div className="second-part-form">
            <label>
              Ramo(s) da atividade:
              <input type="text" name="ramo" required />
            </label>

            <label>
              Detalhe a atividade:
              <textarea name="detalhe" rows="4" required></textarea>
            </label>

            <label>
              Serviços desejados:
              <select name="servicos" multiple>
                <option value="servico1">Serviço 1</option>
                <option value="servico2">Serviço 2</option>
                <option value="servico3">Serviço 3</option>
              </select>
            </label>

            <button type="submit">Enviar</button>
          </div>
        </div>
      </form>

    </section>
  );
}

export default BudgetForm;
